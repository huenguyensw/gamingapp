import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {

  // Test that the header text is rendered
  test('renders header text', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Rock Paper Scissors/i);
    expect(headerElement).toBeInTheDocument();
  });

  // Parameterized test that checks that player names can be updated
  describe.each([
    ['player1', 'John', 'Jane'],
    ['player2', 'Mary', 'Alice']
  ])('%s name update', (player, initialValue, updatedValue) => {
    test(updates ${player} name, () => {
      const setPlayer = jest.fn(); // Create a mock function to set the player name
      render(<Header {...{ [player]: initialValue, [`set${player}`]: setPlayer }} />);
      const nameInput = screen.getByLabelText(Enter ${player.replace(/\d/g, '')} Name);
      fireEvent.change(nameInput, { target: { value: updatedValue } });
      expect(setPlayer).toHaveBeenCalledWith(updatedValue); // Verify that the mock function was called with the updated value
    });
  });

  // Test that the game mode can be updated
  test('updates game mode', () => {
    const setGameMode = jest.fn(); // Create a mock function to set the game mode
    render(<Header gameMode="1" setGameMode={setGameMode} />);
    const gameModeSelect = screen.getByLabelText(/Select Game Mode/i);
    fireEvent.change(gameModeSelect, { target: { value: '2' } });
    expect(setGameMode).toHaveBeenCalledWith('2'); // Verify that the mock function was called with the updated game mode
  });

  // Parameterized test that checks that inputs are disabled when playing or when a result has been updated
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

  // Test that the player 2 name field is rendered based on the game mode
  test('renders player 2 name field based on game mode', () => {
    render(<Header gameMode="1" />);
    const player2NameInput = screen.getByLabelText(/Enter Player 2 Name/i);
    expect(player2NameInput).toBeInTheDocument();

    render(<Header gameMode="2" />);
    expect(player2NameInput).not.toBeInTheDocument();
  });
});
