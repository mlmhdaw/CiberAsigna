const { 
  crearRegistroFunc, 
  consultarFunc, 
  actualizarFunc, 
  funcionarios 
} = require('../backend/src/domain/services/funcService');

console.log("=== CHECK 4 MH-1 FASE 02: VALIDACIÓN DE LÓGICA DE FUNC ===");

// --------------- PASO 1: Crear datos de prueba representativos ---------------

console.log("\n1. Creando datos de prueba...");
crearRegistroFunc({ ncp: "111111", cat: "oficial", hist: "false"});
crearRegistroFunc({ ncp: "222222", cat: "currito", hist: "false"});
crearRegistroFunc({ ncp: null, cat: "jefe", hist: "true" }); // ncp será null
crearRegistroFunc({ ncp: "ERROR-99", apel: "Dato erróneo"});

// ----------------------- PASO 2: Ejecutar y Verificar -----------------------

console.log("2. Verificando creación...");
if (funcionarios.length === 3) {
    console.log(`Éxito: Se han creado ${funcionarios.length} registros.`);
}

// -------------------------- PASO 3: Probar Consulta --------------------------

console.log("\n3. Probando consulta...");
const buscado = consultarFunc({ ncp: "111111" });
if (buscado && buscado.ncp === "111111") {
    console.log("Éxito: Registro '111111' localizado correctamente.");
}

// ----------- PASO 4: Probar Actualización (Ajustar si hay errores) -----------

console.log("\n4. Probando actualización de errores...");
const funcError = consultarFunc({ ncp: "ERROR-99" });
if (funcError) {
    actualizarFunc(funcError, { 
        ncp: "333333", 
        apel: "Dato corregido", 
        hist: "true" 
    });
    
    if (funcError.ncp === "333333" && funcError.apel === "Dato corregido") {
        console.log(" Éxito: Registro error actualizado a '333333'.");
    }
}

// ---------------------------- VISUALIZACIÓN FINAL ----------------------------

console.log("\n--- RESULTADO FINAL DEL ARRAY ---");
console.table(funcionarios);