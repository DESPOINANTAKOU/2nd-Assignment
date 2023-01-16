describe('Open HomePage', () => {
    it('should navigate to the home page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
  
      // Find the title
      cy.get('h1').should('have.text', "Welcome to Debbie\'s BookStore")
  
      // The new url should include "/about"
    //   cy.url().should('include', '/about')
  
    cy.get('.section').should('have.length', 4)
    })
  })