/// <reference types="cypress" />
//import { faker } from '@faker-js/faker';
import login from '../pageObject/login'

const Login = new login

describe('Sterling Bank retial core', ()=>{
beforeEach(()=>{
  cy.visit('/')
})
it('valid login user',()=>{
  Login.setlogin()
})
it('invalid login user',()=>{
  Login.setInvalidlogin()

})
})