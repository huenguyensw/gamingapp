import { render, screen, fireEvent } from "@testing-library/react";
import UserSelectionForm from "../UserSelectionForm";


describe("userSelectionForm", () => {
    const setChoiceOfPlayer = jest.fn();
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
        const currentResult = {current:[]};
        const choiced = {current: 0}
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setChoiceOfPlayer).toHaveBeenCalledWith(2);
    })

    it('Human vs Computer: should call the setUpdatedResult function after player makes a choice',()=>{
        const playerName = 'Player 1';
        const results = {};
        const choiced = {current: 0};
        const currentResult = {current:[]};
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}
        gameMode={2} setWinner={setWinner}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setUpdatedResult).toHaveBeenCalledWith(true);
    })

    it('humanvs computer: should call the setResults function two times after player make a choice',()=>{
        const playerName = 'Player 1';
        const results = {};
        const choiced = {current: 0};
        const currentResult = {current:[]};
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}
        gameMode={2} setWinner={setWinner}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setResults).toHaveBeenCalledTimes(2);
    })

    it('human vs computer: should call the setWinner function after player make a choice',()=>{
        const playerName = 'Player 1';
        const results = {};
        const choiced = {current: 0};
        const currentResult = {current:[]};
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}
        gameMode={2} setWinner={setWinner}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setWinner).toHaveBeenCalledTimes(1);
    })

    it('Human vs Human: should call the setUpdatedResult function after both players made their choice',()=>{
        const playerName = 'Player 2';
        const results = {};
        const choiced = {current: 1};
        const currentResult = {current:[{name: playerName,choice: 2}]};
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}
        gameMode={1} setWinner={setWinner}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setUpdatedResult).toHaveBeenCalledWith(true);
    })

    it('human vs human: should call the setResults function when player make a choice',()=>{
        const playerName = 'Player 1';
        const results = {};
        const choiced = {current: 0};
        const currentResult = {current:[]};
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}
        gameMode={1} setWinner={setWinner}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setResults).toHaveBeenCalledTimes(1);
        expect(setResults).toHaveBeenCalledWith({"Player 1": [2]});
    })

    
    it('human vs human: should call the setWinner function after both players made their choices',()=>{
        const playerName = 'Player 1';
        const results = {};
        const choiced = {current: 1};
        const currentResult = {current:[{name: playerName, choice: 2}]};
        render(<UserSelectionForm playerName = {playerName} choiceOfPlayer={null} results={results} currentResult={currentResult} setChoiceOfPlayer={setChoiceOfPlayer} setResults={setResults} choiced={choiced} setUpdatedResult={setUpdatedResult}
        gameMode={1} setWinner={setWinner}/>)
        const iconElement = screen.getByTestId('paperIcon');
        fireEvent.click(iconElement);
        expect(setWinner).toHaveBeenCalledTimes(1);
    })
})