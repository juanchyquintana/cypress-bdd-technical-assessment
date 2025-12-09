const titlePage = 'h1';
const queryingList = '.query-list li';
const saveBtn = '.btn.btn-default';

class QueryingPage {
  visit() {
    cy.visit('/commands/querying');
  }

  getTitle() {
    return cy.get(titlePage);
  }

  assertTitleEquals(title: string) {
    this.getTitle().should('have.text', title);
  }

  getListItems() {
    return cy.get(queryingList);
  }

  assertListMinLength(miniumValue: number = 5) {
    this.getListItems().should('be.visible').should('have.length.at.least', miniumValue);
  }

  assertListContainsItems(fruits: string[]) {
    this.getListItems().then((fruit) => {
      const texts = [...fruit].map((fru) => fru.innerText.trim());

      fruits.forEach((item) => {
        expect(texts).to.include(item);
      });
    });
  }

  assertSaveFormButton() {
    cy.get(saveBtn)
      .should('be.visible')
      .should('have.class', 'btn')
      .should('contain.text', 'Save Form');
  }

  navigateToMenuItem(topic: string) {
    const selector = 'ul.home-list a';
    cy.contains(selector, topic).scrollIntoView();

    cy.contains(selector, topic)
      .should('be.visible')
      .should('have.prop', 'tagName', 'A')
      .should('have.text', topic);

    cy.contains(selector, topic).click();
  }

  verifyCommandUrl(topic: string) {
    cy.url().should('include', `commands/${topic.toLowerCase()}`);
  }

  scrollToSection(topic: string) {
    cy.contains('h4[id="contains"] a', topic)
      .should('be.visible')
      .should('have.prop', 'tagName', 'A')
      .should('have.text', topic)
      .scrollIntoView();
  }
}

export default new QueryingPage();
