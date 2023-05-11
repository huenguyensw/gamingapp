///<reference types="cypress" />

describe("Demo tests", () => {

    beforeEach(()=>{
        cy.visit("/")
    })

    it("A correct title should be shown in Header ", () => {
        cy.get('.header > h1').should('have.text','Rock Paper Scissors')
    })

    it("should have 'Human vs Computer' selected by default in Game Mode field", ()=>{
        cy.get('select').should('have.value', 2).should('contain', 'Human vs Computer');
    })

    it("should have 'PlayerA' shown by default in 'Player1 name' field", ()=>{
        cy.get('#player1Name').should('have.value', 'PlayerA')
    })

    it("should be able to input and display the first player name",()=>{
        cy.get('#player1Name').type('{selectAll}Hanna');
        cy.get(':nth-child(1) > h2').should('have.text','Hanna');
    })

    it("The second player should be shown when game mode is 'Human vs Human'  with default name is 'PlayerB' and it should be able to input and display Player2 name",()=>{
        //className is 'text' and get the second element
        cy.get('select.text').select('1');
        cy.get('#player2Name').should('be.visible');
        cy.get('#player2Name').should('have.value', 'PlayerB')
        cy.get('#player2Name').type('{selectAll}Marie');
        cy.get(':nth-child(2) > h2').should('have.text','Marie');
    })

    it("A text 'Let's play the game' should be shown on the screen",()=>{
        //className is 'text' and get the second element
        cy.get('.sub-title').should('have.text', "Let's play the game");
    })

    /* Human vs Computer*/
    it("A text 'Picked random' is displayed to show that computer's choice is random",()=>{
        cy.get('[data-testid="computerContent"]').should('have.text','Picked random')
    })
    it("Human can make a choice when playing vs computer and the play result is updated",()=>{
        cy.get('[data-testid="winner"]').should('not.be.visible');
        cy.get('[data-testid="rockIcon"]').click();
        cy.get(':nth-child(1) > p').should('have.text', 'You picked');
        cy.get('[data-testid="winner"]').should('be.visible');
    })
    it("Game mode as well as selecting players should be locked while a game is happening", ()=>{
        cy.get('[data-testid="rockIcon"]').click();
        cy.get('#gameMode').should('be.disabled');
        cy.get('#player1Name').should('be.disabled');
    })
    it("Player can play again after finishing a play vs computer",()=>{
        cy.get('.playing-container').next().should('not.exist'); // make sure that 'Playing again' button is not shown when no play is executed.
        cy.get('[data-testid="rockIcon"]').click(); // user makes a choice.
        cy.get('.buttons > :nth-child(1)').should('be.visible'); // make sure that 'Playing again' button is displayed.
        cy.get('.buttons > :nth-child(1)').click(); 
        cy.get(':nth-child(1) > p').should('not.exist'); // make sure that text 'You picked' is not displayed
        cy.get('[data-testid="playingIcons"]').should('be.visible'); // icons rock-scissor-paper are shown
        cy.get('[data-testid="winner"]').should('not.be.visible'); // the result message is not shown when the play have not begin yet.
        cy.get('[data-testid="rockIcon"]').click(); // user makes a choice again.
        cy.get(':nth-child(1) > p').should('have.text', 'You picked'); // to make sure player can play again vs computer successfully.
    })
    it("Player can choose to end game and game mode as well as choosing player should be unlocked",()=>{
        cy.get('.playing-container').next().should('not.exist');
        cy.get('[data-testid="rockIcon"]').click();
        cy.get('.buttons > :nth-child(2)').should('be.visible');
        cy.get('.buttons > :nth-child(2)').click();
        cy.get('#gameMode').should('not.be.disabled');
        cy.get('#player1Name').should('not.be.disabled');
    })

    /* Human vs Computer*/
    it("Players can make a choice and the play result is updated correctly",()=>{
        cy.get('select.text').select('1');
        cy.get('[data-testid="winner"]').should('not.be.visible');
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click();
        cy.get(':nth-child(1) > p').should('have.text', 'You picked');
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        cy.get(':nth-child(2) > p').should('have.text', 'You picked');
        cy.get('[data-testid="winner"]').should('be.visible');
        cy.get('[data-testid="winner"]').should('have.text',"PlayerB won!")
    })





    


    // it("Should be able to visit our site", () => {

    //     cy.visit("http://localhost:3000")

    //     cy.get('input[placeholder="Add comment ..."]').type("Hej")

    //     cy.get('[data-cy="addBtn"]').click()

    //     cy.get(".comment")
    //         .should('have.length', 2)
    //         .last()
    //         .should('have.text', "Hej")

    // })

})
