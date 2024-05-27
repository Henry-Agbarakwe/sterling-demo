import { faker } from '@faker-js/faker'
class account{
    clickcreateLedgers(){
        cy.get('.css-70qvj9 > .MuiButtonBase-root').click()
        cy.get('.css-6mqjit > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
        cy.get(':nth-child(21) > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
        cy.get('.MuiSelect-select').click()
        cy.get('#mui-53 > [tabindex="0"]').click()
        cy.wait (6000)
        cy.get('#mui-56').type(faker.finance.accountName())
        cy.get('[data-testid="description"]').type('descrition')
        cy.get('#mui-60').type(faker.random.alphaNumeric(3) )
        cy.get('#mui-62').type('0011')
        cy.get('#mui-63').type('1')
        cy.get('[data-testid="proceed-btn"]').click()
        cy.get('[data-testid="preview-parent-submit-button"]').click()
        cy.get('.css-1yd6qxv > :nth-child(1) > .MuiBox-root').click()

    }
}
export default account
