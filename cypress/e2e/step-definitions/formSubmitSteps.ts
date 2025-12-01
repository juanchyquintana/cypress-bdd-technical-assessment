import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import FormSubmit from '../pages/FormSubmit.ts';

Given('The user is on the Login Page', () => {
  FormSubmit.visit();
});

When('The user enters their email address {string}', (emailText: string) => {
  FormSubmit.typeEmailInput(emailText);
});

When('The user enters their password {string}', (passwordText: string) => {
  FormSubmit.typePasswordInput(passwordText);
});

When('The user check the option Mantener sesión activa', () => {
  FormSubmit.checkIsActiveSessionCheckBox();
});

When('The user press the button for Iniciar Sesion', () => {
    FormSubmit.pressLoginButton();
})

Then('The system show a message {string}', (messageSystem: string) => {
    FormSubmit.haveMessage(messageSystem);
})