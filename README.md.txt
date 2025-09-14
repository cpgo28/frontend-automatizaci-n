 - Proyecto de Automatización de Pruebas - Aplicación Web

1. Objetivo
Crear una suite de pruebas automatizadas para la aplicación web **[nombre de la aplicación]** utilizando **Playwright** con **Cucumber**, implementando un patrón de diseño adecuado para mantener el código organizado y reutilizable.

2. Estrategia de Automatización
- Se utilizó Playwright para la automatización de navegadores y pruebas end-to-end.
- Los escenarios se describen en feature files con Gherkin, lo que permite una lectura clara y entendible de los tests.
- Se aplicó el patrón Page Object Model (POM) para separar la lógica de interacción con la UI de los pasos de los tests, aumentando la mantenibilidad.

3. Estructura del Proyecto

├─ features/ # Archivos .feature con escenarios de prueba
├─ step_definitions/ # Step definitions de Cucumber
├─ pages/ # Page Objects
├─ package.json # Dependencias y scripts del proyecto
├─ playwright.config.ts # Configuración de Playwright
└─ README.md