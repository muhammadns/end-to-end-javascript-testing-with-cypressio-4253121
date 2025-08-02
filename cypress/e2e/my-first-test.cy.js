describe('Heading Text', () => {
  it('contins the title of our site', () => {
    cy.visit('http://localhost:5173/example-1');
    cy.get('h1').should('have.text', 'My Awesome Web site')
  })
})