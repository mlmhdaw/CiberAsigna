const {
  crearRegistroOrg,
  consultarOrg,
  actualizarOrg,
  organismos
} = require('../backend/src/domain/services/orgService');

console.log("=== CHECK 4 MH-1 FASE 02: VALIDACIÓN DE LÓGICA DE ORG ===");

// --------------- PASO 1: Crear datos de prueba representativos ---------------

console.log("\n1. Creando datos de prueba...");
crearRegistroOrg({nom: "Organismo Primero"});
crearRegistroOrg({nom: "Organismo Segundo"});
crearRegistroOrg({nom: null});
crearRegistroOrg({nom: "error"});

// ----------------------- PASO 2: Ejecutar y Verificar -----------------------

console.log("2. Verificando creación...");
if (organismos.length === 4) {
  console.log(`Éxito: Se han creado ${organismos.length} registros.`);
}

// -------------------------- PASO 3: Probar Consulta --------------------------

console.log("\n3. Probando consulta...");

// guardo, en un array, los resultados con nom = "primero"
const resultado = consultarOrg({nom: "primero"});

// guardo, en una variable (buscado), lo almacenado en resultado[0]
const buscado = resultado[0];

if (buscado && buscado.nom.toLowerCase().includes("primero")) {
    console.log("Éxito: Registro 'Organismo Primero' localizado correctamente.");
}

// ----------- PASO 4: Probar Actualización (Ajustar si hay errores) -----------

console.log("\n4. Probando actualización de errores...");
const orgError = consultarOrg({ nom: "error" });
if (orgError) {
  actualizarOrg(orgError, {nom: "Organismo Tercero"});
    
if (orgError.nom === "Organismo Tercero") {
  console.log(" Éxito: Registro error actualizado a 'Organismo Tercero'.");
}
}


// ---------------------------- VISUALIZACIÓN FINAL ----------------------------

console.log("\n--- RESULTADO FINAL DEL ARRAY ---");
console.table(organismos);