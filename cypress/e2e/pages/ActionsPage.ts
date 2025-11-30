const inputEmail = '#email1';
const inputCoupon = '#couponCode1';
const buttonCouponCode = "button[type='submit']";
const successfullyMessage = 'div.well p';

class ActionsPage {
  visit() {
    cy.visit('/commands/actions');
  }

  getInputEmail() {
    return cy.get(inputEmail);
  }

  assertEmailEmpty() {
    this.getInputEmail().should('be.visible').should('have.value', '');
  }

  typeEmail(email: string) {
    this.getInputEmail().type(email);
  }

  isEqualEmail(email: string) {
    this.getInputEmail().should('have.value', email);
  }

  getCouponInput() {
    return cy.get(inputCoupon).should('be.visible').should('be.enabled').should('have.value', '');
  }

  getButtonCouponCode() {
    return cy
      .get(buttonCouponCode)
      .should('be.visible')
      .should('be.enabled')
      .should('have.prop', 'tagName', 'BUTTON');
  }

  scrollToExample(topic: string) {
    cy.contains('h4[id="submit"] a', topic)
      .should('be.visible')
      .should('have.prop', 'tagName', 'A')
      .should('have.text', topic)
      .scrollIntoView();
  }

  validateMessage(message: string) {
    cy.get(successfullyMessage).should('contain.text', message);
  }
}

export default new ActionsPage();
