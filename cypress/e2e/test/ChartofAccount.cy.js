import account from "../pageObject/Accounting"
import login from "../pageObject/login"
import Config from "../pageObject/ConfigurationEngine"

const Login = new login
const Demo = new Config
const accounting = new account

describe('Create ledger', ()=>{
    beforeEach(()=>{
       // Cypress.on ('uncaught:exception', (err, runnable) => {
        //    return false
      cy.visit('https://seabaas.dev.bepeerless.co/login')
    })
      it('Create Ledger',()=>{
        Login.setlogin()
        Demo.clickConfig()
        accounting.clickcreateLedgers()
  })
})

