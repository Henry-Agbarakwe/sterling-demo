class Config{
clickConfig(){
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
    cy.get('[data-testid="link-Chart of Accounts"] > .MuiBox-root > .MuiTypography-root').click()
    
}

}
export default Config