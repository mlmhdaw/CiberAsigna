# README.md - ciberasigna/backend/README.md

## Backend - CiberAsigna

Capa de servidor y lógica de negocio.

## Organización del código

- **Entities:** Definición de clases y estructuras de datos puras.
- **Services:** Funciones de gestión (CRUD funcional) y reglas de negocio.

## Ejecución de pruebas

Para validar la lógica de forma independiente o conjunta:

- **Test unitario:** `node ../test/asunto.test.js`
- **Test de integración (Ecosistema completo):** `node ../test/global.test.js`

> **Nota:** El sistema utiliza actualmente persistencia en memoria para agilizar el desarrollo del prototipo (Fase 02).