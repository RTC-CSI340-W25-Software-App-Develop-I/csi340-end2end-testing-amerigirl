/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Submits a rating", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("Submits a rating", () => {
    //cy.get('[data-cy="rating-form"]').should('exist');

    cy.get('[data-cy="rating-form"]').submit();
    cy.get('[data-cy="input-name"]').type("Pizza House");
    cy.get('[data-cy="input-address"]').type("123r PL NE, Seattle, USA");
    cy.get('[data-cy="input-phone"]').type("111-123-1234");
    cy.get('[data-cy="input-cuisine"]').type("Italian");
    cy.get('[data-cy="input-rating"]').type("5");

    cy.get(`[data-cy="Pizza House"] ul`).within(() => {
      cy.contains("li", "123r PL NE, Seattle, USA").should("be.visible");
      cy.contains("li", "111-123-1234").should("be.visible");
      cy.contains("li", "Italian").should("be.visible");
      cy.contains("li", "5").should("be.visible");
    });
  });
});
// cy.get('[data-cy="input-name"]').should("exist");
// cy.get('[data-cy="input-address"]').should("exist");
// cy.get('[data-cy="input-phone"]').should("exist");
// cy.get('[data-cy="input-cuisine"]').should("exist");
// cy.get('[data-cy="input-rating"]').should("exist");
// cy.get('[data-cy="submit"]').should("exist");
