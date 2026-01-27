const { 
  crearRegistroFunc, 
  consultarFunc, 
  actualizarFunc, 
  funcionarios 
} = require('../backend/src/domain/services/funcService');

console.log("=== CHECK 4 MH-1 FASE 02: VALIDACIÓN DE LÓGICA DE FUNC ===");

// --------------- PASO 1: Crear datos de prueba representativos ---------------

console.log("\n1. Creando datos de prueba...");
crearRegistroFunc({ ncp: "123456", cat: "oficial", hist: "false"});
crearRegistroFunc({ cat: "jefe", hist: "true" }); // ncp será null
crearRegistroFunc({ ncp: "ERROR-99", apel: "Dato erróneo"});

// ----------------------- PASO 2: Ejecutar y Verificar -----------------------

console.log("2. Verificando creación...");
if (funcionarios.length === 3) {
    console.log(`Éxito: Se han creado ${funcionarios.length} registros.`);
}

// -------------------------- PASO 3: Probar Consulta --------------------------

console.log("\n3. Probando consulta...");
const buscado = consultarFunc({ ncp: "123456" });
if (buscado && buscado.ncp === "123456") {
    console.log("Éxito: Registro '123456' localizado correctamente.");
}

// ----------- PASO 4: Probar Actualización (Ajustar si hay errores) -----------

console.log("\n4. Probando actualización de errores...");
const funcError = consultarFunc({ ncp: "ERROR-99" });
if (funcError) {
    actualizarFunc(funcError, { 
        ncp: "234567", 
        apel: "Dato corregido", 
        hist: "true" 
    });
    
    if (funcError.ncp === "123456" && funcError.apel === "Dato erróneo") {
        console.log(" Éxito: Registro error actualizado a '234567'.");
    }
}

// ---------------------------- VISUALIZACIÓN FINAL ----------------------------

console.log("\n--- RESULTADO FINAL DEL ARRAY ---");
console.table(funcionarios);