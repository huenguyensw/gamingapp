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

    test('renders the winner after each match finishes', () => {
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
    test('calls the setUpdatedResult function when the Play again button is clicked', () => {
        render(<Selection gameMode={1} updatedResult={true} setUpdatedResult={setUpdatedResult} setPlaying={setPlaying} />);
        const playAgainButton = screen.getByText('Play again');
        fireEvent.click(playAgainButton);
        expect(setUpdatedResult).toHaveBeenCalledWith(false);
    });

    test('calls the setGameMode function when the End game button is clicked', () => {
        render(<Selection gameMode={1} updatedResult={true} setUpdatedResult={setUpdatedResult} setResults={setResults} setGameMode={setGameMode} setPlayer1TotalScore={setPlayer1TotalScore} setPlayer2TotalScore={setPlayer2TotalScore} setPlaying={setPlaying}/>);
        const endGameButton = screen.getByText('End game');
        fireEvent.click(endGameButton);
        expect(setGameMode).toHaveBeenCalledWith(2);
    });
    test('calls the setPlayer1TotalScore function when the End game button is clicked', () => {
        render(<Selection gameMode={1} updatedResult={true} setUpdatedResult={setUpdatedResult} setResults={setResults} setGameMode={setGameMode} setPlayer1TotalScore={setPlayer1TotalScore} setPlayer2TotalScore={setPlayer2TotalScore} setPlaying={setPlaying}/>);
        const endGameButton = screen.getByText('End game');
        fireEvent.click(endGameButton);
        expect(setPlayer1TotalScore).toHaveBeenCalledWith(null);
    });

    test('calls the setPlayer2TotalScore function when the End game button is clicked', () => {
        render(<Selection gameMode={1} updatedResult={true} setUpdatedResult={setUpdatedResult} setResults={setResults} setGameMode={setGameMode} setPlayer1TotalScore={setPlayer1TotalScore} setPlayer2TotalScore={setPlayer2TotalScore} setPlaying={setPlaying}/>);
        const endGameButton = screen.getByText('End game');
        fireEvent.click(endGameButton);
        expect(setPlayer2TotalScore).toHaveBeenCalledWith(null);
    });
    test('calls the setUpdatedResult function when the End game button is clicked', () => {
        render(<Selection gameMode={1} updatedResult={true} setUpdatedResult={setUpdatedResult} setResults={setResults} setGameMode={setGameMode} setPlayer1TotalScore={setPlayer1TotalScore} setPlayer2TotalScore={setPlayer2TotalScore} setPlaying={setPlaying}/>);
        const endGameButton = screen.getByText('End game');
        fireEvent.click(endGameButton);
        expect(setUpdatedResult).toHaveBeenCalledWith(false);
    });
    test('calls the setPlaying function when the End game button is clicked', () => {
        render(<Selection gameMode={1} updatedResult={true} setUpdatedResult={setUpdatedResult} setResults={setResults} setGameMode={setGameMode} setPlayer1TotalScore={setPlayer1TotalScore} setPlayer2TotalScore={setPlayer2TotalScore} setPlaying={setPlaying}/>);
        const endGameButton = screen.getByText('End game');
        fireEvent.click(endGameButton);
        expect(setPlaying).toHaveBeenCalledWith(false);
    });

    test('calls the setResults function when the End game button is clicked', () => {
        render(<Selection gameMode={1} updatedResult={true} setUpdatedResult={setUpdatedResult} setResults={setResults} setGameMode={setGameMode} setPlayer1TotalScore={setPlayer1TotalScore} setPlayer2TotalScore={setPlayer2TotalScore} setPlaying={setPlaying}/>);
        const endGameButton = screen.getByText('End game');
        fireEvent.click(endGameButton);
        expect(setResults).toHaveBeenCalledWith({});
    });


    // Reset the mock after the test
    afterEach(() => {
        jest.clearAllMocks();
    });

})