// POM (Page Object Model) for the Cypress "Kitchen Sink" home page.

const titlePage = 'h1';

class HomePage {
  // Open the Kitchen Sink home page using baseUrl
  visit() {
    cy.visit('/');
  }

  // Get the main page title <h1>
  getTitle() {
    return cy.get(titlePage);
  }

  // Navigate from home to specific command section by link text
  navigateToCommand(topic: string) {
    cy.contains('ul.home-list a', topic)
    .scrollIntoView()
    .should('be.visible')
    .should("have.prop", "tagName", "A")
    .should('have.text', topic)
    .click();
  }

  // Go back to the previous page (used to return to home)
  navigateBack() {
    cy.go('back');
  }

  // Verify that the current URL matches the selected command section
  verifyCommandUrl(topic: string) {
    cy.url().should('include', `commands/${topic.toLowerCase()}`);
  }
}

export default new HomePage();
