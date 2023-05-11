///<reference types="cypress" />

describe("E2E test", () => {

    beforeEach(()=>{
        cy.visit("/")
    })

    it("Two players can play against each other and their score as well as  choice is updated correctly",()=>{
        cy.get('select.text').select('1');
        cy.get('#player1Name').type('{selectAll}Hanna');
        cy.get('#player2Name').type('{selectAll}Maria');
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click(); 
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        cy.get('[data-testid="winner"]').should('have.text',"Maria won!")
        cy.get('.selection > :nth-child(1)').should('have.text','Score: 0 vs 1');
        cy.get('thead > tr > :nth-child(1)').should('have.text','Hanna (0)');
        cy.get('thead > tr > :nth-child(2)').should('have.text','Maria (1)');
        cy.get('tbody > tr > :nth-child(1)').should('have.text', 'Hanna(rock)');
        cy.get('[style="font-size: 1.5rem;"]').should('have.text', 'Maria(paper)');
    })

    it("A player can play against the computer and the score is updated in the history table",()=>{
        cy.get('select.text').select('2');
        cy.get('#player1Name').type('{selectAll}Hanna');
        cy.get('[data-testid="rockIcon"]').click();
        cy.get('[data-testid="winner"]').should('be.visible');
        cy.get('thead > tr > :nth-child(1)').should('not.be.empty');
        cy.get('thead > tr > :nth-child(2)').should('not.be.empty');
        cy.get('tbody > tr > :nth-child(1)').should('not.be.empty');
        cy.get('tbody > tr > :nth-child(2)').should('not.be.empty');  
    })
    it("Human vs Human: Player can play again after finishing a match",()=>{
        cy.get('select.text').select('1');
        cy.get('.playing-container').next().should('not.exist'); // make sure that 'Playing again' button is not shown when no play is executed.
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click(); // user makes a choice.
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        cy.get('.buttons > :nth-child(1)').should('be.visible'); // make sure that 'Playing again' button is displayed.
        cy.get('.buttons > :nth-child(1)').click(); 
        cy.get(':nth-child(1) > p').should('not.exist'); // make sure that text 'You picked' is not displayed
        cy.get('[data-testid="winner"]').should('not.be.visible'); // the result message is not shown when the play have not begin yet.
        cy.get('[data-testid="playingIcons"]').should('be.visible'); // icons rock-scissor-paper are shown
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click(); 
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        // to make sure players can play again
        cy.get(':nth-child(1) > p').should('have.text', 'You picked');
        cy.get(':nth-child(2) > p').should('have.text', 'You picked');
    })

    it("Human vs Human: Player can choose to end game and start a new game",()=>{
        cy.get('select.text').select('1');
        cy.get('.playing-container').next().should('not.exist');
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click(); 
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        cy.get('.buttons > :nth-child(2)').should('be.visible');
        cy.get('.buttons > :nth-child(2)').click();
        cy.get('#gameMode').should('not.be.disabled');
        cy.get('#player1Name').should('not.be.disabled');
    })
    it("Human vs Computer: Player can play again after finishing a match",()=>{
        cy.get('.playing-container').next().should('not.exist'); // make sure that 'Playing again' button is not shown when no play is executed.
        cy.get('[data-testid="rockIcon"]').click(); // user makes a choice.
        cy.get('.buttons > :nth-child(1)').should('be.visible'); // make sure that 'Playing again' button is displayed.
        cy.get('.buttons > :nth-child(1)').click(); 
        cy.get(':nth-child(1) > p').should('not.exist'); // make sure that text 'You picked' is not displayed
        cy.get('[data-testid="winner"]').should('not.be.visible'); // the result message is not shown when the play have not begin yet.
        cy.get('[data-testid="playingIcons"]').should('be.visible'); // icons rock-scissor-paper are shown
        cy.get('[data-testid="rockIcon"]').click(); // user makes a choice again.
        cy.get(':nth-child(1) > p').should('have.text', 'You picked'); // to make sure player can play again vs computer successfully.
    })
    it("Human vs Computer: Player can choose to end game and start a new game",()=>{
        cy.get('.playing-container').next().should('not.exist');
        cy.get('[data-testid="rockIcon"]').click();
        cy.get('.buttons > :nth-child(2)').should('be.visible');
        cy.get('.buttons > :nth-child(2)').click();
        cy.get('#gameMode').should('not.be.disabled');
        cy.get('#player1Name').should('not.be.disabled');
    })

})