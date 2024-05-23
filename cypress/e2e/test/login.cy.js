/// <reference types="cypress" />
//import { faker } from '@faker-js/faker';
import login from '../pageObject/login'

const Login = new login

describe('Sterling Bank retial core', ()=>{
beforeEach(()=>{
  cy.visit('/')
})
it.only('valid login user',()=>{
  // cy.visit('/')
  // demo.setUsername()
  // demo.setPassword()
  // demo.setLoginButton()
  Login.setlogin()

})
it ('invalid login',()=>{
  Login.setInvalidlogin()
  Login.setlogin()
})
})