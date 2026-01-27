# ENTIDADES — Fase 02: Núcleo funcional

> Documento vivo para definir entidades, atributos y relaciones centrales del núcleo funcional.  
> Mantener actualizado a medida que evoluciona la definición de la lógica central.

---

## Guía de Estructura de Archivos

Para garantizar la escalabilidad, el código se organiza siguiendo el patrón de **Arquitectura Limpia**:

- **Definición de Datos (Entities):** `backend/src/domain/entities/`
  - Contiene las clases puras (Asunto, Func, Org).
- **Lógica de Operaciones (Services):** `backend/src/domain/services/`
  - Contiene la manipulación de datos (asuntoService.js).
- **Validaciones (Tests):** `test/`
  - Pruebas unitarias y de integración (asunto.test.js).

## Guía rápida de uso del documento

- Cada entidad tiene:
  - **Nombre de la entidad**
  - **Atributos mínimos**
  - **Notas o comentarios de diseño**
- Cada relación tiene:
  - Entidad origen → Entidad destino
  - Tipo de relación (1 a 1, 1 a N, N a N)
  - Notas si aplica
- Ejemplos concretos pueden incluirse para validar la estructura.

---

## Entidades

### asunto *Entidad principal de todo el proyecto*

- **Ubicación:** `backend/src/domain/entities/Asunto.js`
- **Atributos:**
  - `[id]` (Number): Identificador único autoincremental gestionado por el servicio
  - `[refe]` (String): Referencia de entrada externa - null hasta modificación por usuario
  - `[refs]` (Number): Referencia de salida generada por el sistema - editable (último + 1)
  - `[fece]` (Date): Fecha (actual) de entrada - editable (AAAA-MM-DD)
  - `[fecs]` (String/Date): Fecha de salida - null hasta modificación por usuario (AAAA-MM-DD)
  - `[rese]` (String): Resumen de entrada - null hasta modificación por usuario (máx. 500 caracteres)
  - `[ress]` (String): Resumen de salida - null hasta modificación por usuario (máx. 500 caracteres)
  - `[est]`  (String): Estado actual. Valores: `BORRADOR` (por defecto), `ASIGNADO`, `EN_CURSO`, `CERRADO`
  - `[fid]`  (Number): ID del Funcionario (Func) asignado - viene de la entidad Func (null por defecto)
  - `[oid]`  (Number): ID del Organismo (Org) remitente - viene de la entidad Org (null por defecto)

### Org *organismo*

- **Ubicación:** `backend/src/domain/entities/Org.js`
- **Atributos:**
  - `[id]` (Number): ID único
  - `[nom]` (String): Nombre del organismo (máx. 100 caracteres) - null hasta modificación por el usuario

### Func *funcionario*

- **Ubicación:** `backend/src/domain/entities/Func.js`
- **Atributos:**
  - `[id]` (Number): ID único
  - `[ncp]` (String): Número de carnet profesional (6 caracteres) - null hasta modificación por el usuario
  - `[cat]` (String): Categoría profesional - null hasta modificación por el usuario
  - `[apel]` (String): Apellidos - null hasta modificación por el usuario
  - `[nom]` (String): Nombre - null hasta modificación por el usuario
  - `[hist]` (Boolean): `true` si el empleado ya no está activo - `false` hasta que usuario modifique

## Relaciones entre entidades

- **Asunto → Org (N:1):** Varios asuntos pueden pertenecer a un mismo organismo remitente.
- **Asunto → Func (N:1):** Varios asuntos pueden estar asignados a un mismo empleado.

---

## Ciclo de Vida y Estados (`est`)

| Estado        | Descripción                     | Requisitos Mínimos                                                  |
|---------------|---------------------------------|---------------------------------------------------------------------|
| **BORRADOR**  | Registro inicial rápido         | `rese` or `oid` or `fece` obligatorio uno de ellos                  |
| **ASIGNADO**  | El asunto tiene un responsable  | est "BORRADOR" + `rese`, `oid`, `fece`, `refe`, `fid` obligatorios  |
| **EN_CURSO**  | Trabajo activo documentado      | est "ASIGNADO" + `fece` (mínimo actual) obligatorio                 |
| **CERRADO**   | Expediente finalizado           | est "EN_CURSO" + `refs`, `fecs`, `ress` obligatorios                |

---

## Control de Cambios

La lógica de estas entidades ha sido validada mediante el script `test/asunto.test.js`, confirmando que:

1. Los objetos se crean con valores por defecto (`null`) cuando no se especifican
2. La función `actualizarAsunto` permite modificar atributos parciales sin perder el resto de la información
3. Se mantiene la integridad referencial de los IDs
