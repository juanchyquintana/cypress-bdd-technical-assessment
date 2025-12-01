Feature: Querying Page - Validation list and UI Components
    As a user
    I want to validate the content and UI behavior in the Querying commands section

    Background:
        Given The user is on the Querying Page

    Scenario: TC-E The title changes when navegating to Querying
        Then The Title should be "Querying"

    Scenario: TC-E Validate minimum number of items in the Querying list
        When The user scroll to "cy.contains()" section
        Then The Querying list should contain at least 5 items

    Scenario: Validate that the Querying list displays all expected fruits
        When The user scroll to "cy.contains()" section
        Then The Querying list should contain the items:
            | apples      |
            | oranges     |
            | bananas     |
            | more apples |

    Scenario: Validate Save Form button visibility and style
        When The user scroll to "cy.contains()" section
        Then The Save Form button should be visible and have the CSS class "btn"

    Scenario: The Querying list is not empty
        When The user scroll to "cy.contains()" section
        Then The Querying list should contain at least 1 items