const inputEmail = '#email1';
const inputCoupon = '#couponCode1';
const buttonCouponCode = "button[type='submit']";
const successfullyMessage = 'div.well p';

class ActionsPage {
  visit() {
    cy.visit('/commands/actions');
  }

  // Email
  getInputEmail() {
    return cy.get(inputEmail);
  }

  assertEmailEmpty() {
    this.getInputEmail().should('be.visible').should('have.value', '');
  }

  typeEmail(email: string) {
    this.getInputEmail().type(email);
  }

  clearEmail() {
    this.getInputEmail().clear();
  }

  isEqualEmail(email: string) {
    this.getInputEmail().should('have.value', email);
  }

  // Coupon
  getCouponInput() {
    return cy.get(inputCoupon).should('be.visible').should('be.enabled').should('have.value', '');
  }

  typeCoupon(coupon: string) {
    this.getCouponInput().type(coupon);
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

  // Message
  haveMessage(message: string) {
    cy.get(successfullyMessage).should('contain.text', message);
  }

  notHaveMessage() {
    cy.get(successfullyMessage).should('not.contain.text', 'Your form has been submitted!');
  }
}

export default new ActionsPage();
