import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)

    cy.get('[data-cy="LeadershipTable"]').as('LeadershipTable');
    cy.get('[data-cy="LeadershipTable__Slider"]').should('not.exist');
    cy.get('[data-cy="TabsComponent"]').as('Tabs');
    cy.get('@Tabs').children().as('Tab').should('have.length', 2)
    cy.get('@Tab').first().should('have.class', 'tabs__button--active')
    cy.get('@Tab').last().should('not.have.class', 'tabs__button--active')
    cy.get('@Tab').last().click()
    cy.get('@Tab').first().should('not.have.class', 'tabs__button--active')
    cy.get('@Tab').last().should('have.class', 'tabs__button--active')
    cy.get('[data-cy="LeadershipTable__Slider"]').should('exist');
  })
})