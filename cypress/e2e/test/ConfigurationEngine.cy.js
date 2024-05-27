import { faker } from '@faker-js/faker';
import login from '../pageObject/login'
import Config from '../pageObject/ConfigurationEngine'
const Login = new login
const Demo = new Config


describe('Sterling Bank retial core', ()=>{
beforeEach(()=>{
   // Cypress.on ('uncaught:exception', (err, runnable) => {
    //    return false
  cy.visit('https://seabaas.dev.bepeerless.co/login')
})
  it('valid login user',()=>{
  Login.setlogin()
  Demo.clickConfig()
  })
})

