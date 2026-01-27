# Agenda — Fase 02: Núcleo funcional

## Objetivo inmediato

Tener la funcionalidad central de la aplicación operativa de extremo a extremo, usable en local, aunque sin pulido ni extras.

---

## Siguiente acción

> Completar check 1 - punto 4 - mini-hito 1

---

## Mini-hito 1 — Lógica central básica

### Objetivo MH-1

Definir y probar la lógica principal de la aplicación, dejando la base lista para integrarla con el frontend.

### Checklist de tareas + commits MH-1

1. **Definir entidades y estructuras de datos principales**
   - [x] Identificar entidades clave (por ejemplo: Usuario, Registro de precipitaciones)
      > Commit: "FS02-MH1: Entidades clave identificadas y documentadas"
      > bf0b058 (HEAD -> fase-02) MH1: Entidades clave identificadas y documentadas
   - [x] Identificar las relaciones entre entidades
      > Commit: "FS02-MH1: Relaciones conceptuales entre entidades definidas"
      > eabf635 (HEAD -> fase-02) FS02-MH1: Relaciones conceptuales entre entidades definidas
      > Commit de actualización: "FS02-MH1: Entidades y relaciones finales; ciclo de vida y flujo de datos inicial definido"
      > 8e94ee7 (HEAD -> fase-02) FS02-MH1: Entidades y relaciones finales; ciclo de vida y flujo de datos inicial definido
   - [x] Crear estructuras de datos y clases/objetos correspondientes
      > Commit: "FS02-MH1: Estructuras de datos / clases básicas implementadas"
      > 3c93e16 (HEAD -> fase-02) FS02-MH1: Estructuras de datos / clases básicas implementadas

2. **Implementar funciones core para registro y gestión de datos**
   - [x] Función para crear un registro de datos
      > Commit: "FS02-MH1: Implementada función nuevo-registro"
      > 7fd2f21 (HEAD -> fase-02) FS02-MH1: Implementada función nuevo-registro
   - [x] Función para consultar/leer registros
      > Commit: "FS02-MH1: Implementada función consulta-registro"
      > 3ae2f12 (HEAD -> fase-02) FS02-MH1: Implementada función consulta-registro
   - [x] Función para actualizar registros (opcional inicial)
      > Commit: "FS02-MH1: Implementada función actualiza-registro"
      > 8d4a896 (HEAD -> fase-02) FS02-MH1: Implementada función actualiza-registro

3. **Validar la lógica en local con datos de prueba**
   - [x] Crear datos de prueba representativos
   - [x] Ejecutar funciones con datos de prueba y verificar resultados
   - [x] Ajustar funciones si hay errores
   - [x] Commit: "FS02-MH1: Validada lógica central con datos de prueba; actualización árbol y documentación"
      > ca4f4f2 (HEAD -> fase-02) FS02-MH1: Validada lógica central con datos de prueba; actualización árbol y documentación

4. **Implementar servicios para Funcionario (Func) y Organismo (Org)**
   - [x] Crear funcService.js con funciones de creación, consulta, paso a histórico y actualización
      > Commit: "FS02-MH1: Implementado funcService con gestión de creación, consulta y actualización"
      > b031b24 (HEAD -> fase-02) FS02-MH1: Implementado funcService con gestión de creación, consulta y actualización
   - [-] Crear orgService.js con funciones de creación y consulta
      > Commit: "FS02-MH1: Implementado orgService con funciones de creación y consulta de organismos"
      >
   - [] Validar la creación de datos semilla en test/asunto.test.js para asegurar que las IDs coinciden
   - [] Commit: "FS02-MH1: Implementada gestión completa (CRUD básico) de Func y Org"

5. **Consolidación del mini-hito**
   - [] Vincular todos los servicios (asunto, func, org) en index.js
   - [] Automatizar arranque/test integral en start.sh
   - [] Verificar que el ecosistema de entidades está operativo
   - [] Commit final del mini-hito: "FS02-MH1 completado — Ecosistema de lógica central y entorno operativos"

**Resultado esperado:** Lógica central operativa y comprobada con datos de ejemplo.

---

## Mini-hito 2 — Integración mínima frontend-backend

### Objetivo MH-2

Conectar la interfaz con la lógica central y asegurar el flujo básico de interacción (entrada → procesamiento → salida).

### Checklist de tareas + commits MH-2

1. **Conectar formularios con la lógica central**
   - [ ] Crear formularios de entrada en frontend
   - [ ] Vincular cada formulario con las funciones del núcleo funcional
   - [ ] Commit: "FS02-MH2: Formularios conectados con la lógica central"

2. **Validar almacenamiento y presentación de datos**
   - [ ] Confirmar que los datos se guardan correctamente
   - [ ] Confirmar que los datos se muestran correctamente en la interfaz
   - [ ] Commit: "FS02-MH2: Almacenamiento y presentación de datos verificados"

3. **Feedback básico al usuario**
   - [ ] Mostrar errores básicos (campos vacíos, datos incorrectos)
   - [ ] Mostrar confirmaciones al completar operaciones
   - [ ] Commit: "FS02-MH2: Feedback básico implementado"

4. **Consolidación del mini-hito**
   - [ ] Verificar que el flujo completo funciona en local
   - [ ] Commit final del mini-hito: "FS02-MH2 completado — Integración mínima frontend-backend"

**Resultado esperado:** Flujo completo usable en local, desde entrada hasta salida.

---

## Mini-hito 3 — Pruebas y documentación funcional

### Objetivo MH-3

Asegurar funcionamiento confiable del núcleo funcional y dejar documentación mínima para uso técnico.

### Checklist de tareas + commits MH-3

1. **Pruebas unitarias y básicas de integración**
   - [ ] Escribir pruebas unitarias de funciones clave
   - [ ] Escribir pruebas básicas de integración entre frontend y backend
   - [ ] Commit: "FS02-MH3: Pruebas unitarias e integración implementadas"

2. **Documentar endpoints y funciones**
   - [ ] Documentar cada endpoint y función central
   - [ ] Commit: "FS02-MH3: Endpoints y funciones documentadas"

3. **Actualizar README.md**
   - [ ] Instrucciones de uso del núcleo funcional
   - [ ] Commit: "FS02-MH3: README actualizado con instrucciones del núcleo funcional"

4. **Consolidación del mini-hito**
   - [ ] Verificar que todas las pruebas y documentación están completas
   - [ ] Commit final del mini-hito: "FS02-MH3 completado — Pruebas y documentación núcleo funcional"

**Resultado esperado:** Núcleo funcional validado, documentado y listo para uso técnico inicial.

---

## Criterio de cierre de fase

- Lógica central operativa y comprobada  
- Interacción básica confirmada  
- Flujo completo validado en local  
- Documentación suficiente para uso técnico inicial

---

## Cierre de fase

- Todos los mini-hitos completados  
- Núcleo funcional usable en local  
- Documentación base actualizada  
- Preparado para iniciar la siguiente fase
