import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/HomePage.ts';

// Step definitions for Home Page title scenarios (BDD + POM)
Given('The user is on the home page', () => {
    HomePage.visit()
});

When('The user navigates to Commands {string}', (word: string) => {
    HomePage.navigateToCommand(word)
    HomePage.verifyCommandUrl(word)
})

When("The user navigates back to home", () => {
    HomePage.navigateBack()
})

Then("The Title must contain {string}", (expectedTitle: string) => {
    HomePage.getTitle().should('have.text', expectedTitle);
})

Then("The URL must include {string}", (expectedUrl: string) => {
    HomePage.verifyCommandUrl(expectedUrl)
})
