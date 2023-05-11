import { render, screen, fireEvent } from "@testing-library/react";
import UserSelectionForm from "../UserSelectionForm";


describe("userSelectionForm", () => {
    const setChoiceOfPlayer = jest.fn();
    const currentResult = {current:[]};
    const setResults = jest.fn();
    const setUpdatedResult = jest.fn();
    const setWinner = jest.fn();

    test('should render playerName', () => {
        //Given
        const playerName = 'Hanna';
        //When
        render(<UserSelectionForm playerName={playerName} />);
        const playerNameElement = screen.getByText(playerName)

        //Then
        expect(playerNameElement).toBeInTheDocument()
    })

    test("text 'Picked random' should be rendered when player is 'computer'", () => {
        //Given
        const playerName = 'computer';

        //When
        render(<UserSelectionForm playerName={playerName} />);

        //solution 2
        const playerNameElement = screen.getByTestId('computerContent')

        //Then
        expect(playerNameElement).toHaveTextContent('Picked random')
    })

    it('should render playing icons when choiceOfPlayer is null', () => {
        //Given
        const playerName = "Player 1";
        const choiceOfPlayer = null;

        //When
        render(<UserSelectionForm playerName={playerName} choiceOfPlayer={choiceOfPlayer} />)
        const iconSectionElement = screen.getByTestId('playingIcons')

        //Then
        expect(iconSectionElement).toBeInTheDocument();
    });

    it("should render 'You picked' after player made a choice",()=>{
        //Given
        const playerName = "Player 1";
        const choiceOfPlayer = 1;

        //When
        render(<UserSelectionForm playerName={playerName} choiceOfPlayer={choiceOfPlayer} />)
        const iconSectionElement = screen.getByText('You picked')

        //Then
        expect(iconSectionElement).toBeInTheDocument();
    })

    it('should call the setChoiceOfPlayer function when player makes a choice',()=>{
        const playerName = 'Player 1';
        const results = {};
        const choiced = {current: 0}
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setChoiceOfPlayer).toHaveBeenCalledWith(2);
    })
    it('should call the setUpdatedResult function when players makes their choice',()=>{
        const playerName = 'Player 1';
        const results = {};
        const choiced = {current: 0};
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}
        gameMode={2} setWinner={setWinner}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setUpdatedResult).toHaveBeenCalledWith(true);
    })


})