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

### 2.1 Entidad: Func   - empleado

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

### 2.2 Entidad: Org    - organismo

- **Atributos mínimos:**
  - `[id]`    - número interno de organismo
  - `[nom]`   - nombre del organismo
- **Notas / Consideraciones:**
  - Representa el organismo que remite el asunto al func
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - `{id: 01, nom: "institucion 1 de Santander"}`

### 2.3 Entidad: Ref   - referencia entrante y saliente

- **Atributos mínimos:**
  - `[id]`    - número interno de referencia
  - `[cod]`   - número de referencia general (puede haber duplicados)
  - `[res]`   - resumen del contenido
  - `[tipo]`  - puede ser de entrada o de salida (E/S)
- **Notas / Consideraciones:**
  - Indica la referencia
    - Entrante, asignada al asunto, de un organismo concreto
    - Saliente que asigna el empleado al asunto
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - `{id: 01, cod: 53, res: "resumen breve del contenido completo del documento", tipo: "E"}`
  - `{id: 02, cod: 24, res: "resumen breve del contenido completo del documento", tipo: "S"}`

### 2.4 Entidad: fec    - fecha entrada y fin

- **Atributos mínimos:**
  - `[id]`    - número interno de fecha
  - `[fec]`   - fecha (AAAA-MM-DD)
  - `[tipo]`  - puede ser de entrada o de salida (E/S)
- **Notas / Consideraciones:**
  - Indica la fecha
    - Entrante, de cuando el empleado se hace cargo del asunto
    - Saliente, de cuando el empleado da por concluido el asunto
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - `{id: 01, fec: 2026-02-15, tipo: "S"}`
  - `{id: 02, fec: 2026-02-20, tipo: "E"}`

### 2.5 Entidad: res  - resumen de asunto inicial, asunto final

- **Atributos mínimos:**
  - `[id]`    - número interno de resumen
  - `[res]`   - resumen inicial o final del asunto
  - `[tipo]`  - puede ser inicial o final (E/S)
- **Notas / Consideraciones:**
  - Indica el resumen
    - Entrante, que le llega al empleado cuando se hace cargo del asunto
    - Saliente, que realiza el empleado cuando da por concluido el asunto
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - `{id: 01, res: "asunto que le llega al empleado", tipo: "E"}`
  - `{id: 02, res: "asunto que redacta el empleado", tipo: "S"}`

### 2.6 Entidad: asunto  - Asunto que engloba las entidades 2.1 - 2.5

- **Atributos mínimos:**
  - `[id]`    - número interno de asunto
- **Notas / Consideraciones:**
  - Todas las entidades 2.1 a 2.5 cuelgan de esta entidad
  - Mantener atributos mínimos al inicio; se pueden ampliar más adelante.
- **Ejemplo de instancia:**
  - `{id: 01}`

---

## 3. Relaciones entre entidades

- `[Entidad A] → [Entidad B]`  
  - Tipo de relación: 1 a N / N a N / 1 a 1  
  - Notas: …  
- `[Entidad X] → [Entidad Y]`  
  - Tipo de relación: …  
  - Notas: …  

---

## 4. Ejemplos de flujo de datos (opcional)

- Flujo: Usuario crea un registro → Registro asociado a Organismo → …  
- Objetivo: validar que las entidades y relaciones permiten representar los casos reales.
