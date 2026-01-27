const { 
  crearRegistroAsunto, 
  consultarAsuntoRefe, 
  actualizarAsunto, 
  asuntos 
} = require('../backend/src/domain/services/asuntoService');

console.log("=== CHECK 3 MH-1 FASE 02: VALIDACIÓN DE LÓGICA CENTRAL ===");

// --------------- PASO 1: Crear datos de prueba representativos ---------------

console.log("\n1. Creando datos de prueba...");
crearRegistroAsunto({ refe: "EXP-001", fid: 1, oid: 10, rese: "Asunto completo", est: "ASIGNADO" });
crearRegistroAsunto({ rese: "Borrador sin referencia", est: "BORRADOR" }); // refe será null
crearRegistroAsunto({ refe: "ERROR-99", rese: "Dato erróneo", est: "BORRADOR" });

// ----------------------- PASO 2: Ejecutar y Verificar -----------------------

console.log("2. Verificando creación...");
if (asuntos.length === 3) {
    console.log(`Éxito: Se han creado ${asuntos.length} registros.`);
}

// -------------------------- PASO 3: Probar Consulta --------------------------

console.log("\n3. Probando consulta...");
const buscado = consultarAsuntoRefe({ refe: "EXP-001" });
if (buscado && buscado.rese === "Asunto completo") {
    console.log("Éxito: Registro 'EXP-001' localizado correctamente.");
}

// ----------- PASO 4: Probar Actualización (Ajustar si hay errores) -----------

console.log("\n4. Probando actualización de errores...");
const asuntoError = consultarAsuntoRefe({ refe: "ERROR-99" });
if (asuntoError) {
    actualizarAsunto(asuntoError, { 
        refe: "EXP-002", 
        rese: "Dato corregido", 
        est: "BORRADOR" 
    });
    
    if (asuntoError.refe === "EXP-002" && asuntoError.est === "BORRADOR") {
        console.log(" Éxito: Registro error actualizado a 'EXP-002'.");
    }
}

// ---------------------------- VISUALIZACIÓN FINAL ----------------------------

console.log("\n--- RESULTADO FINAL DEL ARRAY ---");
console.table(asuntos);