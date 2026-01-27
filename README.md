# Proyecto CiberAsigna

Prototipo de Aplicación web desarrollado sin frameworks comerciales.

**Finalidad principal:** Gestionar y organizar las asignaciones recibidas por el grupo de xxxxxx de la yyyyyyy
**Estado actual:** Fase 02 - Núcleo funcional (MH-1 completado)

## Principios

- Planificación ligera
- Código y documentación juntos
- Enfoque incremental
- Sin frameworks comerciales

## Estructura del Proyecto

- `backend/src/domain/` → Lógica de negocio (Entidades y Servicios).
- `test/` → Batería de pruebas técnicas.
- `planificacion/` → Documentación viva del proceso y agenda.
  
## Requisitos mínimos

- **S.O.:** Linux - Ubuntu Desktop versión estable
- **Runtime:** Node.js versión estable (v18+ recomendado)
- **Herramientas:** Git

## Instrucciones de arranque en local

El proyecto utiliza un script de automatización para validar la lógica antes del arranque:

1. Dar permisos de ejecución (solo la primera vez): `chmod +x start.sh`
2. Ejecutar validación y arranque: `./start.sh`
