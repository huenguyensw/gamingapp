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

    it("should be able to input and display 'Player1's name",()=>{
        cy.get('#player1Name').type('{selectAll}Hanna');
        cy.get(':nth-child(1) > h2').should('have.text','Hanna');
    })

    it("'Player2 name' should be shown when game mode is 'Human vs Human' and should be able to input and display 'Player2 name'",()=>{
        //className is 'text' and get the second element
        cy.get('select.text').select('1');
        cy.get('#player2Name').should('be.visible');
        cy.get('#player2Name').type('{selectAll}Marie');
        cy.get(':nth-child(2) > h2').should('have.text','Marie');
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
