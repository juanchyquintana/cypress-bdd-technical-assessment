/**
 * Configuración de ESLint
 * Basado en las recomendaciones oficiales:
 *    - eslint-plugin-cypress (buenas prácticas de tests E2E)
 *    - @eslint/js y typescript-eslint (calidad general del código)
 *
 * Objetivo:
 *    - Garantizar código limpio, mantenible y estándar en TS
 *    - Aplicar buenas prácticas específicas de Cypress
 *    - Detectar errores comunes durante el desarrollo
 *
 * Alcance:
 *    Esta configuración analiza únicamente los archivos *.ts dentro del
 *    directorio cypress/, donde se encuentran los tests y step-definitions.
 *
 * Esta configuración forma parte del setup inicial requerido en la
 * prueba técnica para evaluar calidad de código en automatización.
 */
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import pluginCypress from 'eslint-plugin-cypress';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['cypress/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      cypress: pluginCypress,
      prettier: pluginPrettier
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginCypress.configs.recommended,
      eslintConfigPrettier
    ],
    rules: {
      'prettier/prettier': 'warn'
    }
  }
]);
