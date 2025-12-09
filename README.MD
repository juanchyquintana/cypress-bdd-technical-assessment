# 🧪 QA Technical Challenge – Cypress + BDD + TypeScript

Este proyecto corresponde a una prueba técnica destinada a evaluar habilidades en automatización E2E utilizando Cypress, TypeScript, Cucumber (BDD) y buenas prácticas de arquitectura como Page Object Model.

## 🎯 Objetivos

- Automatizar pruebas funcionales de UI en la página oficial de ejemplo de Cypress.
- Aplicar desarrollo basado en comportamiento (BDD) escribiendo escenarios en Gherkin.
- Mantener el código organizado, escalable y legible usando Page Object Model (POM).
- Validar flujos críticos de navegación e interacción.

## 🧩 Aplicación bajo prueba (AUT)

🔗 https://example.cypress.io  
Sitio oficial de Cypress orientado a testing automatizado en UI.

## 🛠️ Tecnologías utilizadas

| Tecnología                      | Rol                                 |
| ------------------------------- | ----------------------------------- |
| Cypress                         | Framework E2E Testing               |
| Cucumber Preprocessor (Gherkin) | Sintaxis BDD                        |
| TypeScript                      | Tipado estático y estructura        |
| Page Object Model               | Reutilización y limpieza del código |
| Mochawesome                     | Reporter HTML + JSON                |

## 📂 Arquitectura del proyecto

    cypress/
    ├─ e2e/
    │ ├─ features/
    │ │ ├─ home.feature
    │ │ ├─ actions.feature
    │ │ ├─ querying.feature
    │ │ └─ login.feature
    │ ├─ step-definitions/
    │ │ ├─ home.steps.ts
    │ │ ├─ actions.steps.ts
    │ │ ├─ querying.steps.ts
    │ │ └─ login.steps.ts
    │ └─ pages/
    │ ├─ HomePage.ts
    │ ├─ ActionsPage.ts
    │ ├─ QueryingPage.ts
    │ └─ FormSubmit.ts

✔️ POM + BDD correctamente implementados  
✔️ TypeScript modo estricto

## 🧪 Pruebas automatizadas

### Requerimiento 1 - Página principal

#### Feature automatizado: Home Page – Check Title and Navigation

- Validar que el título principal sea: **"Kitchen Sink"**.
- La navegación mediante menú lateral actualiza correctamente el título y la URL
- Navegación entre distintas secciones y retorno a Home

✔ **Cobertura extendida:** Verificación de títulos dinámicos en múltiples secciones

### Requerimiento 2 - Navegación hacia Commands → Actions

#### Feature automatizado: Home Page – Check Title and Navigation

- Selección del menú Commands > Actions
- Validación de la URL resultante

✔ Navegación validada con scroll y asegurando visibilidad antes del clic

### Requerimiento 3 - Interacción con input #email1

#### Feature automatizado: Actions Page – Input and Click Submit

- Escribir texto y validar el valor.
- Validación de persistencia del valor ingresado

✔ **Cobertura extendida:** Limpiar campo y reescribirlo

### Requerimiento 4 - Clic en botón Submit

#### Feature automatizado: Actions Page – Input and Click Submit

- Botón visible, habilitado y con etiqueta HTML BUTTON
- Clic exitoso que dispara confirmación en el DOM.

✔ **Cobertura extendida:**

- Validación de que no se muestra mensaje antes del envío
- Validación de mensaje solo después de Submit

### Requerimiento 5 - Validación de lista en sección Querying

#### Feature automatizado: Querying Page – Validation list and UI Components

- Lista con mínimo 5 elementos.
- Verificación de contenido esperado usando DataTable (apples, oranges, bananas, more apples).
- Botón Save Form visible + con clase btn.

✔ **Cobertura extendida:**

- Validación de lista no vacía en cualquier estado
- Verificación de estilo de botón

## 🔄 Prueba de flujo adicional (formulario EduMVP)

#### Feature automatizado: Login Form Validation on EduMVP

Para sumar mayor realismo a la prueba se automatizó un formulario propio (EduMVP):

🔗 https://v0-user-registration-functionality-pi.vercel.app/

    ✔ Login exitoso
    ✔ Email vacío
    ✔ Contraseña vacía
    ✔ Ambos vacíos
    ✔ Emails inválidos (Scenario Outline)
    ✔ Usuarios múltiples válidos
    ✔ Estados de cuenta:
        - Bloqueado
        - Deshabilitado
        - Pendiente de verificación

Mensajes diferenciados según su contexto en el DOM (éxito / errores de validación / errores de estado).

## 📊 Reportes (opcional implementado)

Se configuró **Mochawesome** como reporter.

Al ejecutar:

```bash
npm run cy:run
```

### 📊 Reportes generados

Se configuró **Mochawesome** como reporter principal.

Los reportes **HTML + JSON** se generan automáticamente luego de ejecutar el proyecto en modo headless:

📂 **mochawesome-report/**  
Cada archivo corresponde a un Feature ejecutado durante la corrida.

## 🚀 Ejecución del proyecto

Instalar dependencias:

```bash
npm install
```

Abrir Cypress en modo interfaz:

```bash
npm run cy:open
```

Ejecución headless con reporter:

```bash
npm run cy:run
```

## ✔ Checklist de Requerimientos

| Requisito                                        | Estado |
| ------------------------------------------------ | :----: |
| Cypress configurado                              |   ✔    |
| TypeScript configurado                           |   ✔    |
| Cucumber configurado                             |   ✔    |
| Scripts `run` + `open` en package.json           |   ✔    |
| Uso correcto de selectores y assertions          |   ✔    |
| Escenarios escritos en Gherkin (BDD)             |   ✔    |
| Page Object Model implementado                   |   ✔    |
| Validación de flujos completos                   |   ✔    |
| Reporter Mochawesome                             |   ✔    |
| Pruebas adicionales (más allá del requerimiento) |  ✔🔥   |

## ✨ Conclusiones

Este proyecto cumple con todos los requerimientos planteados en la prueba técnica, agregando además:

- Cobertura extendida en escenarios positivos, negativos y estados de usuario
- Estructura profesional con reutilización de código gracias a POM
- Reportería visual que facilita el análisis de ejecución
- Trabajo con un formulario externo real para validar flujo adicional

#### 👨‍💻 Autor: Juan Diego Quintana - 🧪 QA Automation | BDD | Cypress | TypeScript
