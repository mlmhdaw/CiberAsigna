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
              - Tipo de dato: número autoincrementable (clave principal)

  - `[refe]`  - referencia entrada
              - Tipo de dato: cadena
              - Valor inicial: null

  - `[refs]`  - referencia salida (no duplica)  
              - Tipo de dato: número
              - Regla de negocio: número secuencial propuesto por el sistema (último + 1)
              - Valor inicial: último + 1 (editable)

  - `[fece]`  - fecha de entrada (efectiva de asignación al empleado)
              - Tipo de dato: fecha (AAAA-MM-DD)
              - Valor inicial: fecha actual (editable)

  - `[fecs]`  - fecha de salida
              - Tipo de dato: fecha (AAAA-MM-DD)
              - Valor inicial: null

  - `[rese]`  - resumen de entrada
              - Tipo de dato: texto (máx 500 caracteres)
              - Valor inicial: null

  - `[ress]`  - resumen de salida
              - Tipo de dato: texto (máx 500 caracteres)
              - Valor inicial: null

  - `[est]`   - estado actual del asunto
              - Tipo de dato: cadena
              - Valor inicial: null("Asignado", "en curso", "cerrado")
- **Notas / Consideraciones:**
  - Toda la aplicación web se plantea en torno a esta entidad
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - inicial:
    `{id: 01, refe: null, refs: 00001, fece: 2026-01-25, fecs: null}`
    `{rese: null, ress: null}`
  - final
    `{id: 01, refe: "2026001S6289", refs: 00001, fece: 2026-01-18, fecs: 2026-01-23}`
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

## 4. Ciclo de vida de asunto

- Etapas de cada asunto
  - posibles estados de atributo `[est]`
    - Asignado
    - En curso
    - Cerrado
  - Condiciones de transición
    - Asignado:
      - fecha actual o futura
      - estado "asignado"
    - En curso:
      - Fecha de entrada cumplida (mínimo, actual)
      - estado "en curso"
    - Cerrado:
      - Fecha de cierre no es null
      - referencia de salida no es null
      - resumen de salida no es null
      - estado "cerrado"
  - Campos existentes en cada momento
    - Al asignar el asunto
      - id
      - fece (fecha de entrada)
      - org (organismo remitente)
      - refe (referencia de entrada)
      - func (empleado al que se le asigna)
      - rese (resumen de entrada)
      - est (estado del asunto "asignado")
    - Durante el trabajo:
      - est (estado del asunto "en curso")
    - Al cerrar el asunto
      - refs (referencia de salida)
      - fecs (fecha de salida o cierre)
      - ress (resumen de salida o cierre)
      - est (estado del asunto "cerrado")
- Requisitos para cierre de asunto:
  - refs, fecs, ress no pueden ser nulos (ninguno de ellos)
  - fecs no puede ser anterior a fece
  - est pasa de "en curso" a "cerrado"

---

## 5. Ejemplos de flujo de datos (opcional)

- Objetivo: Mostrar cómo se crean y evolucionan los datos de un asunto a lo largo de su ciclo de vida,
    reflejando cambios en los atributos y el estado de la entidad asunto

### 5.1 Flujo básico de un asunto

- **Asignación**
  - Momento: Un superior registra un asunto nuevo
  - Atributos inicializados
    - `[id]`    - autoincremental
    - `[refs]`  - secuencial propuesto por el sistema (último + 1)
    - `[fece]`  - fecha de asignación (editable)
    - `[refe]`  - referencia entrada (si aplica)
    - `[rese]`  - resumen inicial
    - `[org]`   - organismo remitente
    - `[func]`  - empleado asignado
    - `[est]`   - estado del asunto “asignado”
- **Trabajo en curso**
  - Momento: el empleado recibe el asunto.
  - Cambios:
    - `[est]` → “En curso”
    - `[rese]`, `[refe]`, `[func]` permanecen
    - `[ress]`, `[fecs]`, `[refs]` pendientes de completar

- **Cierre del asunto**
  - Momento: el empleado finaliza el asunto.
  - Cambios:
    - `[fecs]` → fecha de cierre
    - `[ress]` → resumen final
    - `[refs]` → confirmado (editable si es necesario)
    - `[est]` → “Cerrado”
  - Requisitos:
    - `[refs]`, `[fecs]`, `[ress]` no pueden ser nulos
    - `[fecs]` >= `[fece]`
    - `[est]` = "cerrado"

### 5.2 Ejemplo de camino de atributos

| Momento   | `[id]` | `[refe]` | `[refs]` | `[fece]`   | `[fecs]`    | `[rese]`              | `[ress]`                      | `[est]`   |
|-----------|--------|----------|----------|------------|-------------|-----------------------|-------------------------------|-----------|
| creación  | 01     | null     | 00001    | 2026-01-25 | null        | "resumen de entrada"  | null                          | Asignado  |
| en curso  | 01     | null     | 00001    | 2026-01-25 | null        | "resumen de entrada"  | null                          | En curso  |
| cierre    | 01     | null     | 00001    | 2026-01-25 | 2026-01-28  | "resumen de entrada"  | "resumen final del empleado"  | Cerrado   |