Feature: Login Form Validation on EduMVP
    As a registered user
    I want to authenticate safely with my account
    So that I can access my personal courses

    Background:
        Given The user is on the Login Page

    Scenario: Successful login with valid credentials
        When The user enters their email address "profesor@test.com"
        And The user enters their password "Test123!@#"
        And The user check the option Mantener sesión activa
        And The user press the button for Iniciar Sesion
        Then The system show a message "Inicio de sesión exitoso"

