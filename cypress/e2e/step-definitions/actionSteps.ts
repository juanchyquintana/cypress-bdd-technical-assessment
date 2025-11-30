import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import ActionsPage from '../pages/ActionsPage.ts';

// Step definitions for Actions Page
Given('The user is on the Actions Page', () => {
  ActionsPage.visit();
});

When('The user types an email {string}', (email: string) => {
  ActionsPage.assertEmailEmpty();
  ActionsPage.typeEmail(email);
});

When('The user navigates to {string}', (topic: string) => {
  ActionsPage.scrollToExample(topic);
});

When('The user types a coupon code {string}', (codeText: string) => {
  ActionsPage.getCouponInput().type(codeText);
});

When('The user press submit Button', () => {
  ActionsPage.getButtonCouponCode().click();
});

Then('The input should show {string}', (expectedEmail: string) => {
  ActionsPage.isEqualEmail(expectedEmail);
});

Then('The system shows a successful message {string}', (expectedMessage: string) => {
  ActionsPage.validateMessage(expectedMessage);
});
