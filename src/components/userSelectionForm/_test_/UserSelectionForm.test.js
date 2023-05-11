import { render, screen, fireEvent } from "@testing-library/react";
import UserSelectionForm from "../UserSelectionForm";


describe("userSelectionForm", () => {
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

    // Reset the mock after the test
    afterEach(() => {
        jest.clearAllMocks();
    });

})