import { render, screen, fireEvent } from "@testing-library/react";
import Selection from "../Selection";


describe("Selection", () => {
    const setGameMode = jest.fn();
    const setResults = jest.fn();
    const setUpdatedResult = jest.fn();
    const setPlayer1TotalScore = jest.fn();
    const setPlayer2TotalScore = jest.fn();
    const setPlaying = jest.fn();

    test('renders the score', () => {
        const player1TotalScore = 1;
        const player2TotalScore = 2;
        render(<Selection gameMode={1} player1TotalScore={player1TotalScore} player2TotalScore={player2TotalScore} />);
        const scoreElement = screen.getByText(`Score: ${player1TotalScore} vs ${player2TotalScore}`);
        expect(scoreElement).toBeInTheDocument();
    });

    test('renders the winner', () => {
        const message = 'Player 1 won!';
        render(<Selection gameMode={1} winner={message} />);
        const winnerElement = screen.getByTestId('winner');
        expect(winnerElement).toBeInTheDocument()
    });

    test('calls the setPlaying function when the Play again button is clicked', () => {
        render(<Selection gameMode={1} updatedResult={true} setPlaying={setPlaying} setUpdatedResult={setUpdatedResult} />);
        const playAgainButton = screen.getByText('Play again');
        fireEvent.click(playAgainButton);
        expect(setPlaying).toHaveBeenCalledWith(true);
    });

    // Reset the mock after the test
    afterEach(() => {
        jest.clearAllMocks();
    });

})