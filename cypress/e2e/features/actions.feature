Feature: Actions Page - Input and Click Submit
    As a user
    I want to interact with the Actions Example to validate form behavior

    Background:
        Given The user is on the Actions Page

    Scenario: TC-C Interact with the input #email1
        When The user types an email "test@gmail.com"
        Then The input should show "test@gmail.com"

    Scenario: TC-D Click on the submit button
        When The user navigates to ".submit()"
        And The user types a coupon code "C0DE-T3ST"
        And The user press submit Button
        Then The system shows a successful message "Your form has been submitted!"