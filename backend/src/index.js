//backend/src/index.js

// Importación de los arrays (la "base de datos" en memoria) de cada servicio
const {asuntos} = require('./domain/services/asuntoService.js');
const {funcionarios} = require('./domain/services/funcService.js');
const {organismos} = require('./domain/services/orgService.js');

console.log("===================================================");
console.log("   CIBERASIGNA - NÚCLEO FUNCIONAL (FASE-02 MH-1)   ");
console.log("===================================================");

console.log("\n-------------------------------------------------");
console.log("El sistema ha arrancado correctamente");
console.log("=================================================\n");