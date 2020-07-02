// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

let percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
  on('task', percyHealthCheck);
};

describe('Integration test with visual testing', function () {
  it('Loads the homepage', function () {
    // Load the page or perform any other interactions with the app.
    cy.visit('localhost:3000/');

    cy.percySnapshot();
  });
});
