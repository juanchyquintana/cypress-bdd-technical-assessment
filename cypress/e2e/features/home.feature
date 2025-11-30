Feature: Home Page - Check Title and Navegation

    As a user
    I want to see the title into Web and navigate through Commands

    Background:
        Given The user is on the home page

    Scenario: TC-A The title contain Kitchen Sink
        Then The Title must contain "Kitchen Sink"

    Scenario: TC-B Navigate to Commands - Actions
        When The user navigates to Commands "Actions"
        Then The URL must include "Actions"

    Scenario: The title changes when the user navigates through the page
        When The user navigates to Commands "Assertions"
        Then The Title must contain "Assertions"

    Scenario: The title returns to Kitchen Sink when user navigates back home
        When The user navigates to Commands "Location"
        And The user navigates back to home
        Then The Title must contain "Kitchen Sink"

    Scenario Outline: The title changes when navigating to different topic
        When The user navigates to Commands "<topic>"
        Then The Title must contain "<topic>"

        Examples:
            | topic      |
            | Querying   |
            | Traversal  |
            | Connectors |
            | Files      |