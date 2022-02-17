
describe("Rick and morty", () => {
  it("should return different results for a search name", () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy=input-search]').type('Morty{enter}');
      cy.get('[data-cy=search-result-title]').should('have.length', 20);
  });
});
