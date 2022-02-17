
describe("Rick and morty", () => {
    it("should return different results for a change page", () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=page-search]').type('1{enter}');
        cy.get('[data-cy=search-result-title]').should('have.length', 20);
        cy.get('[data-cy=page-search]').type('{backspace}, 2');
        cy.get('[data-cy=page-search-button]').type('{enter}')
        cy.get('[data-cy=search-result-title]').should('have.length', 20);
        cy.get('[data-cy=show-number-page]').contains('Page 2');

    });

    it("should return to the home page to click the reset button", () => {
        cy.get('[data-cy=page-reset-button]').type('{enter}');
        cy.get('[data-cy=search-result-title]').should('have.length', 20);
        cy.get('[data-cy=show-number-page]').contains('Page 1');
    });

    it("should return to the next page by clicking the next button", () => {
        cy.get('[data-cy=page-next-button]').type('{enter}');
        cy.get('[data-cy=search-result-title]').should('have.length', 20);
        cy.get('[data-cy=show-number-page]').contains('Page 2');
    });

    it("should return to the back page by clicking the back button", () => {
        cy.get('[data-cy=page-back-button]').type('{enter}');
        cy.get('[data-cy=search-result-title]').should('have.length', 20);
        cy.get('[data-cy=show-number-page]').contains('Page 1');
    });

  });