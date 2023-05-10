import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';


// cypress/integration/header.spec.js

describe('Header component', () => {
    beforeEach(() => {
      cy.visit('/') // replace with the URL of your app
    })
  
    it('should update player 1 name', () => {
      const newName = 'John'
  
      cy.get('#player1Name')
        .type(newName)
        .should('have.value', newName)
    })
  
    it('should update game mode', () => {
      const newMode = '2'
  
      cy.get('#gameMode')
        .select(newMode)
        .should('have.value', newMode)
    })
  
    it('should render player 2 name field based on game mode', () => {
      cy.get('#gameMode')
        .select('1')
        .get('#player2Name')
        .should('exist')
  
      cy.get('#gameMode')
        .select('2')
        .get('#player2Name')
        .should('not.exist')
    })

  })
  