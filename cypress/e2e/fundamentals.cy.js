describe('Fundamentals test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
 it('Contains correct header text', () => {
    //custom commands
    cy.getDataTest('fundamentals-headers').should('contain.text','Testing Fundamentals')
    //normal ccypress comand
    // cy.get('[data-test="fundamentals-headers"]').should('contain.text', 'Testing Fundamentals')
  })
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })

})
