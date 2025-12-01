const emailInput = '#email';
const passwordInput = '#password';
const isActiveSessionCheckBox = '#acceptTerms';
const loginButton = '#loginBtn';
const messageSuccessfuly = '#success-message';
const inputEmailErrorMessage = '#email-error';
const inputPasswordErrorMessage = '#password-error';
const errorAccounts = "div[role='alert']";

class FormSubmit {
  visit() {
    cy.visit('https://v0-user-registration-functionality-pi.vercel.app/login');
  }

  getEmailInput() {
    return cy
      .get(emailInput)
      .should('be.visible')
      .should('be.enabled')
      .should('have.value', '')
      .should('have.prop', 'tagName', 'INPUT')
      .should('have.attr', 'type', 'email');
  }

  typeEmailInput(email: string) {
    this.getEmailInput().type(email);
  }

  getPasswordInput() {
    return cy
      .get(passwordInput)
      .should('be.visible')
      .should('be.enabled')
      .should('have.value', '')
      .should('have.prop', 'tagName', 'INPUT')
      .should('have.attr', 'type', 'password');
  }

  typePasswordInput(password: string) {
    this.getPasswordInput().type(password);
  }

  getActiveSessionCheckBox() {
    return cy
      .get(isActiveSessionCheckBox)
      .should('be.visible')
      .should('not.be.checked')
      .should('have.prop', 'tagName', 'INPUT')
      .should('have.attr', 'type', 'checkbox');
  }

  checkIsActiveSessionCheckBox() {
    this.getActiveSessionCheckBox().check();
  }

  getLoginButton() {
    return cy
      .get(loginButton)
      .should('be.visible')
      .should('be.enabled')
      .should('have.prop', 'tagName', 'BUTTON');
  }

  pressLoginButton() {
    this.getLoginButton().click();
  }

  getMessageSuccessfuly() {
    return cy.get(messageSuccessfuly);
  }

  assertSuccessMessage(message: string) {
    this.getMessageSuccessfuly().should('be.visible').should('contain.text', message);
  }

  getInputEmailErrorMessage() {
    return cy.get(inputEmailErrorMessage);
  }

  getInputPasswordErrorMessage() {
    return cy.get(inputPasswordErrorMessage);
  }

  assertEmailErrorMessage(message: string) {
    this.getInputEmailErrorMessage()
      .should('be.visible')
      .should('contain.text', message)
      .should('have.attr', 'role', 'alert');
  }

  assertPasswordErrorMessage(message: string) {
    this.getInputPasswordErrorMessage()
      .should('be.visible')
      .should('contain.text', message)
      .should('have.attr', 'role', 'alert');
  }

  getErrorAccountsMessage() {
    return cy.get(errorAccounts);
  }

  assertAccountErrorMessage(message: string) {
    this.getErrorAccountsMessage().should('be.visible').should('contain.text', message);
  }
}

export default new FormSubmit();
