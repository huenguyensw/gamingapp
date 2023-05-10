import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  test('renders header text', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Rock Paper Scissors/i);
    expect(headerElement).toBeInTheDocument();
  });

  describe.each([
    ['player1', 'John', 'Jane'],
    ['player2', 'Mary', 'Alice']
  ])('%s name update', (player, initialValue, updatedValue) => {
    test(`updates ${player} name`, () => {
      const setPlayer = jest.fn();
      render(<Header {...{ [player]: initialValue, [`set${player}`]: setPlayer }} />);
      const nameInput = screen.getByLabelText(`Enter ${player.replace(/\d/g, '')} Name`);
      fireEvent.change(nameInput, { target: { value: updatedValue } });
      expect(setPlayer).toHaveBeenCalledWith(updatedValue);
    });
  });

  test('updates game mode', () => {
    const setGameMode = jest.fn();
    render(<Header gameMode="1" setGameMode={setGameMode} />);
    const gameModeSelect = screen.getByLabelText(/Select Game Mode/i);
    fireEvent.change(gameModeSelect, { target: { value: '2' } });
    expect(setGameMode).toHaveBeenCalledWith('2');
  });

  test.each([
    ['playing', true],
    ['updatedResult', true]
  ])('disables inputs when %s is true', (prop, value) => {
    render(<Header {...{ [prop]: value }} />);
    const player1NameInput = screen.getByLabelText(/Enter Player 1 Name/i);
    const player2NameInput = screen.getByLabelText(/Enter Player 2 Name/i);
    const gameModeSelect = screen.getByLabelText(/Select Game Mode/i);
    expect(player1NameInput).toBeDisabled();
    expect(player2NameInput).toBeDisabled();
    expect(gameModeSelect).toBeDisabled();
  });

  test('renders player 2 name field based on game mode', () => {
    render(<Header gameMode="1" />);
    const player2NameInput = screen.getByLabelText(/Enter Player 2 Name/i);
    expect(player2NameInput).toBeInTheDocument();

    render(<Header gameMode="2" />);
    expect(player2NameInput).not.toBeInTheDocument();
  });
});
