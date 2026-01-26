// Importamos la función de gestión
const { nuevoRegistroAsunto, asuntos } = require('./backend/src/domain/entidades/gestion/gestion-Asunto');

console.log("--- INICIO DE PRUEBAS DEL MH-1 ---");

// ESCENARIO 1: El superior registra un asunto COMPLETO
const asunto1 = nuevoRegistroAsunto({
    refe: "EXP-2026-001",
    rese: "Solicitud de licencia de obra",
    oid: 10,
    fid: 5
});
console.log("1. Asunto Completo creado:", asunto1);

// ESCENARIO 2: El superior deja un asunto A MEDIAS (Borrador)
// Solo tiene la Organización y un resumen rápido
const asunto2 = nuevoRegistroAsunto({
    oid: 20,
    rese: "Borrador urgente sin referencia aún"
});
console.log("2. Borrador creado (debe tener refe null):", asunto2);

// ESCENARIO 3: Comprobar el almacenamiento
console.log("3. Total de asuntos en el array:", asuntos.length);