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
})