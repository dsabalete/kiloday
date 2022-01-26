describe('Initial page load', () => {
  it('Does not do much', () => {
    cy.visit('http://localhost:8080/')
    expect(true).to.equal(true)
  })
})
