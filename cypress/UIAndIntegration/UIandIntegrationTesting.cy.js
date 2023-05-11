///<reference types="cypress" />

describe("general test cases", () => {

    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    it("A correct title should be shown in Header ", () => {
        cy.get('.header > h1').should('have.text','Rock Paper Scissors')
    })

    it("should have 'Human vs Computer' selected by default in Game Mode field", ()=>{
        cy.get('select').should('have.value', 2).should('contain', 'Human vs Computer');
    })

    it("'PlayerA' should be shown by default in 'Player1 name' field", ()=>{
        cy.get('#player1Name').should('have.value', 'PlayerA')
    })

    it("should be able to input and display the first player name",()=>{
        cy.get('#player1Name').type('{selectAll}Hanna');
        cy.get(':nth-child(1) > h2').should('have.text','Hanna');
    })

    it("The second player should be shown when game mode is 'Human vs Human'  with default name is 'PlayerB'",()=>{
        //className is 'text' and get the second element
        cy.get('select.text').select('1');
        cy.get('#player2Name').should('be.visible');
        cy.get('#player2Name').should('have.value', 'PlayerB')
    })

    it("should be able to input and display the second player name",()=>{
        cy.get('select.text').select('1');
        cy.get('#player2Name').type('{selectAll}Marie');
        cy.get(':nth-child(2) > h2').should('have.text','Marie');
    })

    it("A text 'Let's play the game' should be shown on the screen",()=>{
        //className is 'text' and get the second element
        cy.get('.sub-title').should('have.text', "Let's play the game");
    })

    it('Moves is shown on the screen as title of History table',()=>{
        cy.get('h3').should('have.text','Moves')
    })

})

describe("for only Human vs Human", () => {

    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    /* Human vs Computer*/
    it("Human vs Human: Players can make a choice and the match result is updated correctly",()=>{
        cy.get('select.text').select('1');
        cy.get('[data-testid="winner"]').should('not.be.visible');
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click();
        cy.get(':nth-child(1) > p').should('have.text', 'You picked');
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        cy.get(':nth-child(2) > p').should('have.text', 'You picked');
        cy.get('[data-testid="winner"]').should('be.visible');
        cy.get('[data-testid="winner"]').should('have.text',"PlayerB won!")
    })
    it("Human vs Human: Game mode as well as selecting players should be locked while a game is taking place", ()=>{
        cy.get('select.text').select('1');
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click();
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        cy.get('#gameMode').should('be.disabled');
        cy.get('#player1Name').should('be.disabled');
    })

    it("Human vs Human: Player can play again after finishing the match",()=>{
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

    it("Human vs Human: Player can choose to end game and game mode as well as choosing player should be unlocked",()=>{
        cy.get('select.text').select('1');
        cy.get('.playing-container').next().should('not.exist');
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click(); 
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        cy.get('.buttons > :nth-child(2)').should('be.visible');
        cy.get('.buttons > :nth-child(2)').click();
        cy.get('#gameMode').should('not.be.disabled');
        cy.get('#player1Name').should('not.be.disabled');
    })

    it('Human vs Human: History is updated exactly',()=>{
        cy.get('select.text').select('1');
        cy.get('tr > :nth-child(1)').should('not.have.value');
        cy.get('tr > :nth-child(2)').should('not.have.value');
        cy.get(':nth-child(1) > [data-testid="playingIcons"] > [data-testid="rockIcon"]').click(); 
        cy.get(':nth-child(2) > [data-testid="playingIcons"] > [data-testid="paperIcon"]').click();
        cy.get('thead > tr > :nth-child(1)').should('have.text', "PlayerA (0)");
        cy.get('thead > tr > :nth-child(2)').should('have.text', "PlayerB (1)");
        cy.get('tbody > tr > :nth-child(1)').should('have.text',"PlayerA(rock)");
        cy.get('tbody > tr > :nth-child(2)').should('have.text',"PlayerB(paper)");
        cy.get('.selection > :nth-child(1)').should('have.text', "Score: 0 vs 1");
    })

});

describe("for only Human vs Computer", () => {

    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    /* Human vs Computer*/
    it(" Human vs Computer: A text 'Picked random' is displayed to show that computer's choice is random",()=>{
        cy.get('[data-testid="computerContent"]').should('have.text','Picked random')
    })
    it("Human vs Computer: Human can make a choice and the play result is updated",()=>{
        cy.get('[data-testid="winner"]').should('not.be.visible');
        cy.get('[data-testid="rockIcon"]').click();
        cy.get(':nth-child(1) > p').should('have.text', 'You picked');
        cy.get('[data-testid="winner"]').should('be.visible');
    })
    it("Human vs Computer: Game mode as well as selecting players should be locked while a game is happening", ()=>{
        cy.get('[data-testid="rockIcon"]').click();
        cy.get('#gameMode').should('be.disabled');
        cy.get('#player1Name').should('be.disabled');
    })
    it("Human vs Computer: Player can play again after finishing the match",()=>{
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
    it("Human vs Computer: Player can choose to end game and game mode as well as choosing player should be unlocked",()=>{
        cy.get('.playing-container').next().should('not.exist');
        cy.get('[data-testid="rockIcon"]').click();
        cy.get('.buttons > :nth-child(2)').should('be.visible');
        cy.get('.buttons > :nth-child(2)').click();
        cy.get('#gameMode').should('not.be.disabled');
        cy.get('#player1Name').should('not.be.disabled');
    })
    it('Human vs Computer: History is updated after finishing a match',()=>{
        cy.get('tr > :nth-child(1)').should('not.have.value');
        cy.get('tr > :nth-child(2)').should('not.have.value');
        cy.get('[data-testid="rockIcon"]').click();
        cy.get('thead > tr > :nth-child(1)').should('not.be.empty');
        cy.get('thead > tr > :nth-child(2)').should('not.be.empty');
        cy.get('tbody > tr > :nth-child(1)').should('not.be.empty');
        cy.get('tbody > tr > :nth-child(2)').should('not.be.empty');
    })
});

