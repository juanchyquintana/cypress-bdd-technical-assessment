Feature: Login Form Validation on EduMVP
    As a registered user
    I want to authenticate safely with my account
    So that I can access my personal courses

    Background:
        Given The user is on the Login Page

    Scenario: TC-01 Successful login with valid credentials
        When The user enters their email address "profesor@test.com"
        And The user enters their password "Test123!@#"
        And The user check the option Mantener sesión activa
        And The user press the button for Iniciar Sesion
        Then The system show a success message "Inicio de sesión exitoso"

    Scenario: TC-02 Email empty
        When The user enters their password "Test123!@#"
        And The user press the button for Iniciar Sesion
        Then The form show a email error "El email es requerido"

    Scenario: TC-03 Password empty
        When The user enters their email address "profesor@test.com"
        And The user press the button for Iniciar Sesion
        Then The form show a password error "La contraseña es requerida"

    Scenario: TC-04 Login without checking the "Mantener sesion activa" checkbox
        When The user enters their email address "profesor@test.com"
        And The user enters their password "Test123!@#"
        And The user press the button for Iniciar Sesion
        Then The system show a success message "Inicio de sesión exitoso"

    Scenario: TC-05 Error message visible
        When The user press the button for Iniciar Sesion
        Then The form show a password error "La contraseña es requerida"
        Then The form show a email error "El email es requerido"

    Scenario Outline: TC-06 Invalid emails
        When The user enters their email address "<emails>"
        And The user press the button for Iniciar Sesion
        Then The form show a email error "El email no tiene un formato válido"

        Examples:
            | emails     |
            | email      |
            | email@     |
            | email@.com |
            | @.com      |

    Scenario Outline: TC-07 Login with multiple correct users
        When The user enters their email address "<emails>"
        And The user enters their password "<password>"
        And The user press the button for Iniciar Sesion
        Then The system show a success message "<error>"

        Examples:
            | emails              | password    | error                    |
            | estudiante@test.com | Test123!@#  | Inicio de sesión exitoso |
            | profesor@test.com   | Test123!@#  | Inicio de sesión exitoso |
            | admin@test.com      | Admin123!@# | Inicio de sesión exitoso |


    Scenario Outline: TC-08 Login with multiple user states
        When The user enters their email address "<emails>"
        And The user enters their password "<password>"
        And The user press the button for Iniciar Sesion
        Then The system show an account error "<error>"

        Examples:
            | emails                 | password   | error                                             |
            | deshabilitado@test.com | Test123!@# | Tu cuenta está deshabilitada                      |
            | bloqueado@test.com     | Test123!@# | Cuenta bloqueada temporalmente. Intentá más tarde |
            | pendiente@test.com     | Test123!@# | Verificá tu email antes de iniciar sesión         |