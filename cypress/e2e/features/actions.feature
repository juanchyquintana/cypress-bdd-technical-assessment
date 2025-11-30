Feature: Actions Page - Input and Click Submit
    As a user
    I want to interact with the Actions Example to validate form behavior

    Background:
        Given The user is on the Actions Page

    Scenario: TC-C Interact with the input #email1
        When The user types an email "test@gmail.com"
        Then The input should show "test@gmail.com"

    Scenario: TC-D Click on the submit button
        When The user scroll to ".submit()"
        And The user types a coupon code "C0DE-T3ST"
        And The user press submit Button
        Then The system shows a successful message "Your form has been submitted!"

    Scenario: The User can clear and rewrite the email value
        When The user types an email "test@gmail.com"
        And The user clears the email input
        When The user types an email "rocco@gmail.com"
        Then The input should show "rocco@gmail.com"

    Scenario: The success message is only shown after submitting the form
        Then The system should not show a successful message
        When The user scroll to ".submit()"
        And The user types a coupon code "C0DE-OTH3R"
        And The user press submit Button
        Then The system shows a successful message "Your form has been submitted!"