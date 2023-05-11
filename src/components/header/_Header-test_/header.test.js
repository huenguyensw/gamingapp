import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "..\\Header.js";

describe("Header component", () => {
  test("renders game mode selection", () => {
    const { getByLabelText } = render(<Header />);
    const gameModeSelect = getByLabelText("Select Game Mode");
    expect(gameModeSelect).toBeInTheDocument();
  });

  test("renders player 1 name input", () => {
    const { getByLabelText } = render(<Header />);
    const player1NameInput = getByLabelText("Enter Player 1 Name");
    expect(player1NameInput).toBeInTheDocument();
  });

  test("updates game mode when selected", () => {
    const setGameMode = jest.fn();
    const { getByLabelText } = render(<Header setGameMode={setGameMode} />);
    const gameModeSelect = getByLabelText("Select Game Mode");
    fireEvent.change(gameModeSelect, { target: { value: "2" } });
    expect(setGameMode).toHaveBeenCalledWith("2");
  });

  test("updates player 1 name when input changes", () => {
    const setPlayer1 = jest.fn();
    const { getByLabelText } = render(<Header setPlayer1={setPlayer1} />);
    const player1NameInput = getByLabelText("Enter Player 1 Name");
    fireEvent.change(player1NameInput, { target: { value: "John" } });
    expect(setPlayer1).toHaveBeenCalledWith("John");
  });

  test("updates player 2 name when input changes in game mode 1", () => {
    const setPlayer2 = jest.fn();
    const { getByLabelText } = render(
      <Header setPlayer2={setPlayer2} gameMode="1" />
    );
    const player2NameInput = getByLabelText("Enter Player 2 Name");
    fireEvent.change(player2NameInput, { target: { value: "Jane" } });
    expect(setPlayer2).toHaveBeenCalledWith("Jane");
  });

  test("does not render player 2 name input in game mode 2", () => {
    const { queryByLabelText } = render(<Header gameMode="2" />);
    const player2NameInput = queryByLabelText("Enter Player 2 Name");
    expect(player2NameInput).not.toBeInTheDocument();
  });
  test("renders header component without crashing", () => {
    render(<Header />);
  });
  test("disables game mode select field during gameplay", () => {
    const { getByLabelText } = render(<Header playing={true} />);
    const gameModeSelect = getByLabelText("Select Game Mode");
    expect(gameModeSelect).toBeDisabled();
  });
  
  test("disables game mode select field after game has ended", () => {
    const { getByLabelText } = render(<Header updatedResult={true} />);
    const gameModeSelect = getByLabelText("Select Game Mode");
    expect(gameModeSelect).toBeDisabled();
  });
  test("enables player 2 name input field in game mode 1", () => {
    const { getByLabelText } = render(<Header gameMode="1" />);
    const player2NameInput = getByLabelText("Enter Player 2 Name");
    expect(player2NameInput).toBeEnabled();
  });
  test("calls handleGameModeChange function when game mode is changed", () => {
    const handleGameModeChange = jest.fn();
    const { getByLabelText } = render(
      <Header setGameMode={handleGameModeChange} gameMode="1" />
    );
    const gameModeSelect = getByLabelText("Select Game Mode");
    fireEvent.change(gameModeSelect, { target: { value: "2" } });
    expect(handleGameModeChange).toHaveBeenCalledTimes(1);
  });
  test("calls handlePlayer2NameChange function when player 2 name is changed", () => {
    const handlePlayer2NameChange = jest.fn();
    const { getByLabelText } = render(
      <Header setPlayer2={handlePlayer2NameChange} gameMode="1" />
    );
    const player2NameInput = getByLabelText("Enter Player 2 Name");
    fireEvent.change(player2NameInput, { target: { value: "Jane" } });
    expect(handlePlayer2NameChange).toHaveBeenCalledTimes(1);
  });
                
});