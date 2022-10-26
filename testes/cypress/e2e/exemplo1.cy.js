/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa', ()=>{
  
  it.skip('Caso de teste: Registrando um usuário no site com sucesso', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Inatel")
    cy.get('#Text1').type("Inatel")
    cy.get('#username').type("Inatel")
    cy.get('#password').type("Inatel")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  }) 

  it.skip('Caso de teste: Registrando um usuário com falha (faltando senha)', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type("Inatel")
    cy.get('#Text1').type("Inatel")
    cy.get('#username').type("Inatel")
    cy.get('#password').type("Inatel")
    cy.get('#password').clear()
    // cy.get('.btn-primary').click()
    cy.get('.has-error > .help-block').should('have.text', "Password is required")
    cy.get('.btn-primary').should('be.disabled')

  }) 

  it('Caso de teste: Realizando login com sucesso', ()=>{
    let info = criarUsuario()
    cy.get('#username').type(info.dados)
    cy.get('#password').type(info.senha)
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info.dados)
  }) 
})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = {
    dados: horas+minutos+segundos+'id',
    senha: horas+minutos+segundos+'senha'
  }

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user.dados)
  cy.get('#Text1').type(user.dados)
  cy.get('#username').type(user.dados)
  cy.get('#password').type(user.senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return user
}