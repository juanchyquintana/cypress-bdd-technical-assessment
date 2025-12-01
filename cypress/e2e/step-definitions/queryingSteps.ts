import { Given, Then, When, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import QueryingPage from '../pages/QueryingPage.ts';

Given('The user is on the Querying Page', () => {
  QueryingPage.visit();
});

When('The user scroll to {string} section', (topic: string) => {
  QueryingPage.scrollToSection(topic);
});

Then('The Title should be {string}', (expectedTitle: string) => {
  QueryingPage.assertTitleEquals(expectedTitle);
});

Then('The Querying list should contain at least {int} items', (value: number) => {
  QueryingPage.assertListMinLength(value);
});

Then('The Querying list should contain the items:', (table: DataTable) => {
  // raw() return a matrix with any value of table
  // flat() converts them to a flat array of string
  const fruits = table.raw().flat();
  QueryingPage.assertListContainsItems(fruits);
});

Then('The Save Form button should be visible and have the CSS class "btn"', () => {
  QueryingPage.assertSaveFormButton();
});
