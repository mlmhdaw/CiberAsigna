# ENTIDADES — Fase 02: Núcleo funcional

> Documento vivo para definir entidades, atributos y relaciones centrales del núcleo funcional.  
> Mantener actualizado a medida que evoluciona la definición de la lógica central.

---

## 1. Guía rápida de uso del documento

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

## 2. Entidades

### 2.1 Entidad: asunto  - Entidad principal de todo el proyecto

- **Atributos mínimos:**
  - `[id]`    - número interno de asunto
  - `[refe]`  - referencia de entrada
  - `[refs]`  - referencia de salida (no puede haber duplicados)
  - `[fece]`  - fecha de entrada
  - `[fecs]`  - fecha de salida
  - `[rese]`  - resumen de entrada
  - `[ress]`  - resumen de salida
  - `[]`
  > más adelante `[est]`    - estado actual del asunto abierto o cerrado (A/C)
- **Notas / Consideraciones:**
  - Toda la aplicación web se plantea en torno a esta entidad
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - `{id: 01, refe: "2026001S6289", refs: 00001, fece: 2026-01-18, fecs: 2026-01-23}`
    `{rese: "resumen de entrada que hace el superior", ress: "resumen de salida que hace el empleado"}`

### 2.2 Entidad: Org    - organismo

- **Atributos mínimos:**
  - `[id]`    - número interno de organismo
  - `[nom]`   - nombre del organismo
- **Notas / Consideraciones:**
  - Representa el organismo que remite el asunto al func
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - `{id: 01, nom: "institucion 1 de Santander"}`

### 2.3 Entidad: Func   - empleado

- **Atributos mínimos:**
  - `[id]`    - número interno de func
  - `[ncp]`   - número de carnet profesional
  - `[cat]`   - categoría profesional
  - `[apel]`  - apellidos
  - `[nomb]`  - nombre
- **Notas / Consideraciones:**
  - Representa al empleado al que se le asignará el asunto dentro del sistema.
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - `{id: 01, ncp: 123456, cat: "Oficial", apel: "López Pérez", nom: "Juan"}`

## 3. Relaciones entre entidades

- `[asunto] → [org]`  
  - Tipo de relación: n a 1  
  - Notas:
    - Cada asunto nuevo, viene de un organismo concreto
    - Varios asuntos pueden venir del mismo organismo
- `[asunto] → [func]`  
  - Tipo de relación: n a 1  
  - Notas:
    - Cada asunto nuevo, se asigna a un empleado concreto
    - Un empleado puede tener asignados varios asuntos

---

## 4. Ejemplos de flujo de datos (opcional)

- Flujo: Usuario crea un registro → Registro asociado a Organismo → …  
- Objetivo: validar que las entidades y relaciones permiten representar los casos reales.
