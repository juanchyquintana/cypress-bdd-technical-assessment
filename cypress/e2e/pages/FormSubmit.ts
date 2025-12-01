const emailInput = '#email';
const passwordInput = '#password';
const isActiveSessionCheckBox = '#acceptTerms';
const loginButton = '#loginBtn';
const messageSuccessfuly = '#success-message';

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

  haveMessage(message: string) {
    this.getMessageSuccessfuly().should('be.visible').should('contain.text', message)
  }
}

export default new FormSubmit();
