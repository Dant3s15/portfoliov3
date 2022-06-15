import { cyan } from '@mui/material/colors';

describe('My First Test', () => {
  it('Clicks the link', () => {
    cy.visit('/');
    cy.contains('Character')
      .click()
      .get('#search-all')
      .click({ force: true })
      .type('javascript');
    cy.contains('+').click();
    cy.get('#level-bar').invoke('val', 9).trigger('change');
    cy.contains('+').click();
  });
});
