class login{

    setUsername(){
        cy.get('[data-testid="login-email"]').type("admin@retailcore.com")
    }
    setPassword(){
        cy.get('[data-testid="login-password"]').type("Password@@1")
    }
    setLoginButton(){
        cy.get('[data-testid="submit-button"]').click()
    }

    setlogin(){
        cy.get('[data-testid="login-email"]').should('be.visible').and ('exist').type("admin@retailcore.com")
        cy.get('[data-testid="login-password"]').type("Password@@1")
        cy.get('[data-testid="submit-button"]').should('be.visible').and ('contain','LOG IN').click()
        cy.contains('Good').should('be.visible')

    }
    setInvalidlogin(){
        cy.get('[data-testid="login-email"]').type("admin112@retailcore.com")
        cy.get('[data-testid="login-password"]').should('be.visible').and ('exist').type("Password@@1")
        cy.get('[data-testid="submit-button"]').should('be.visible').and ('contain','LOG IN').click()
        cy.get('.MuiStack-root > .MuiTypography-root').should('be.visible').and ('contain', 'No active account found with the given credentials')
        
    }

}
export default login




