describe('Mac character input functionality', () => {
  it('displays the appropriate remaining charcter count', () => {
    cy.visit('http://localhost:5173/example-2');
    cy.get('span').invoke('text').should('equal', '15');
  })
})