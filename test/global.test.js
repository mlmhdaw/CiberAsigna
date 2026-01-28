const { crearRegistroOrg, organismos} = require('../backend/src/domain/services/orgService');
const { crearRegistroFunc, funcionarios} = require('../backend/src/domain/services/funcService');
const { crearRegistroAsunto, asuntos} = require('../backend/src/domain/services/asuntoService');

console.log("=== CHECK 4 MH-1 FASE 02: TEST DE INTEGRACIÓN GLOBAL ===");

// ------------------------ PASO 1: Preparar el entorno (Semillas) ------------------------

console.log("\n1. Creando entidades semilla...");
const listaOrg  = crearRegistroOrg ({nom: "Organismo Primero"});
const listafunc = crearRegistroFunc({nom: "Nombre1",
                                    apel: "Apel1",
                                    ncp: "111111", });

//muestro en pantalla los ID del organismo y funcionario creado
console.log (`Org creado con ID: ${listaOrg.id}`);
console.log (`Func creado con ID: ${listafunc.id}`);

// -------------------- PASO 2: Utilizar los ID generados dinámicamente --------------------

console.log("\n2. Vinculando entidades en un nuevo Asunto...");
const listaAsunto = crearRegistroAsunto({refe: "refe1",
                                        rese: "rese1",
                                        oid: listaOrg.id,
                                        fid: listafunc.id});

// ---------------------- PASO 3: validaciones cruzadas de integridad ----------------------

console.log("\n3. Verificando integridad de relaciones...");
// coincidenIds es un booleano que guarda si coinciden los `[id]` o no coinciden
const coincidenIds = (listaAsunto.oid === listaOrg.id && listaAsunto.fid === listafunc.id);

if (coincidenIds) {
  console.log("ÉXITO: El Asunto ha vinculado correctamente a Org y Func.");
} else {
    console.log(" ERROR: Los IDs en el Asunto no coinciden con las entidades creadas.");
    // decimos al SO que detenga, inmediatamente, la ejecución de Node.js (exit <> 0 = error)
    // sirve para que el sistema no arranque (o siga) con datos corruptos o relaciones rotas
    process.exit(1);
}

// -------------------- PASO 4: Visualización del ecosistema vinculado --------------------

console.log("\n--- ECOSISTEMA ACTUAL (ASUNTO VINCULADO) ---");
console.table(asuntos);