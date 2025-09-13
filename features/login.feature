Feature: Login
  Scenario: Usuario inicia sesión correctamente
    Given el usuario abre la página de login
    When ingresa usuario "standard_user" y contraseña "secret_sauce"
    And hace clic en el botón de login
    Then debe ver el mensaje "Products"


  Scenario: Usuario inicia sesión con credenciales inválidas
    Given el usuario abre la página de login
    When ingresa usuario "locked_out_user" y contraseña "wrong_password"
    And hace clic en el botón de login
    Then debe ver el mensaje "Epic sadface: Username and password do not match any user in this service"
