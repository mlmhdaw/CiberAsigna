// gestion-Asunto.js

/**
 * GESTIÓN DE ASUNTOS
 * Este módulo centraliza la lógica de creación y almacenamiento temporal de la entidad Asunto.
 */

// importación de la clase clase-Asunto.js (referencia obligatoria para modularidad de gestion-Asunto.js)
const Asunto = require('../entities/Asunto');

// crear array para guardar el registro temporal (en memoria) de Asunto
  // se declara como const para asegurar que siempre se mantiene la misma referencia durante la ejecución
    // posibilidad de reemplazo: NO
    // posibilidad de modificación: SÍ
  // array sin tipo de datos ni número de elementos
const asuntos = [];

// este bloque de comentarios permite que VS Code entienda qué tipo de datos maneja la función
// returns: muy útil porque si creo un array (p.e. const miAsunto = nuevo Asunto(...))
  // VS Code sabrá que tiene métodos (gracias al comentario @returns) como
  // asignarEstado() o convertirPlano()

// -------------------------------- Creación de un nuevoRegistroAsunto --------------------------------

 /**
 * Función para crear un nuevo registro de datos (Nuevo Asunto).
 * Implementa el patrón de fábrica para instanciar y persistir la entidad.
 * @param {Object} datos - Objeto con los parámetros de entrada.
 * @param {string|null} datos.refe  - Referencia de entrada externa.
 * @param {string|null} datos.rese  - Resumen de entrada (máximo 500 caracteres)
 * @param {number|null} datos.fid   - ID del funcionario asociado (entidad Func).
 * @param {number|null} datos.oid   - ID de la organización asociada (entidad Org).
 * @param {string|null} datos.fece  - Fecha de entrada.
 * @param {string|null} datos.est   - Estado.
 * @returns {Asunto}                - La instancia del asunto recién creada.
 */

function crearRegistroAsunto({refe = null, 
                              fid  = null, 
                              oid  = null, 
                              rese = null, 
                              fece = null, 
                              est = null}) {
    
  // generar el id único (último + 1)
  // Esto permite que el superior pueda recuperar su "borrador" más tarde
  // creo una variable `[id]` para almacenar el número de id que debe llevar el nuevo elemento del array
  const id = asuntos.length + 1;
  // creo un elemento (instancia) del tipo Asunto (clase-Asunto.js) para trabajar localmente (dentro de la función)
  // con esta instrucción, en automático, el nuevo elemento toma id = id generado (último + 1)
  const asunto = new Asunto(id);

  // incorporar lo que el superior ha establecido en el elemento asunto
  if (refe) asunto.refe = refe;
  if (fid) asunto.fid  = fid;
  if (oid) asunto.oid  = oid;
  if (rese) asunto.rese = rese;
  if (fece) asunto.fece = fece;
  if (est) asunto.est  = est;

  // persistir, en memoria, el elemento del array
  asuntos.push(asunto);

  // devolver asunto con sus atributos al módulo superior (quien ha llamado a gsteion-Asunto.js)
  return asunto;
}

// ---------------------------- Consulta / lectura de un asunto existente ----------------------------

 /**
 * Función para consultar/leer un registro de datos (Asunto creado previamente)
 * Implementa el patrón de búsqueda o repositorio para localizar un elemento en un array (más tarde tabla)
 * @param {Object} datos       - Objeto de búsqueda
 * @param {string} datos.refe  - Referencia de entrada (elemento a buscar)
 * @returns {Asunto|null}      - La instancia encontrada o null si no existe
 */

function consultarAsuntoRefe({refe}) {

  // verificar que, antes de generar la búsqueda, se ha introducido un valor para `[refe]`
  if (!refe) return null;

  // El método .find recorre el array (hasta el final o encontrar el elemento) 'asuntos'  
  // y devuelve el elemento que cumpla la condición (que la refe del objeto sea igual a la refe buscada)
  const result = asuntos.find(asunto => asunto.refe === refe);

  // si lo encuentra lo devuelve
  // si no existe, devuelve null (para evitar undefined)
  return result || null;
}

// ------------------------------- Actualización de un asunto existente -------------------------------

 /**
 * Función para modificar un registro de datos (Asunto creado previamente)
 * Implementa el patrón de modificación (una vez se ha localizado) sobre un elemento en un array (más tarde tabla)
 * @param {Asunto} actual   - Asunto que se pasa (el buscado en `[consultarAsuntoRefe()]`)
 * @param {Object} cambios  - Objeto con los datos a incluir
 * @param {string|null} cambios.refe - Nueva referencia de entrada
 * @param {string|null} cambios.refs - Nueva referencia de salida
 * @param {string|null} cambios.fece - Nueva fecha de entrada
 * @param {string|null} cambios.fecs - Nueva fecha de salida
 * @param {string|null} cambios.rese - Nuevo resumen de entrada (máximo 500 caracteres)
 * @param {string|null} cambios.ress - Nuevo resumen de salida (máximo 500 caracteres)
 * @param {number|null} cambios.oid  - Nuevo id de la organización asociada (entidad Org)
 * @param {number|null} cambios.fid  - Nuevo id de funcionario asociado (entidad Func)
 * @param {string|null} cambios.est  - Nuevo estado
 */

function actualizarAsunto(actual, {
                          refe = null,
                          refs = null, 
                          fece = null, 
                          fecs = null, 
                          rese = null, 
                          ress = null, 
                          oid  = null, 
                          fid  = null, 
                          est  = null}) {

  // verificar que, antes de tratar de actualizar, existe el asunto o registro`[actual]]`
  if (!actual) return null;

  // actualizar solo aquellos atributos que han sufrido cambios
  if (refe !== null) actual.refe = refe;
  if (refs !== null) actual.refs = refs;
  if (fece !== null) actual.fece = fece;
  if (fecs !== null) actual.fecs = fecs;
  if (rese !== null) actual.rese = rese;
  if (ress !== null) actual.ress = ress;
  if (oid  !== null) actual.oid  = oid;
  if (fid  !== null) actual.fid  = fid;
  if (est  !== null) actual.est  = est;

  // Devuelve el objeto `[actual]` ya modificado
  return actual || null;
}

// ------------------------- Exportación del módulo (otros pueden utilizarlo) -------------------------

module.exports = {
  crearRegistroAsunto,  // exportamos la función para crear el nuevo elemento del array (más tarde registro)
  consultarAsuntoRefe,  // exportamos la función para consultar un elemento (por refe) del array
  actualizarAsunto,     // exportamos la función para actualizar un elemento del array
  asuntos               // exportamos el array donde se guardan los elementos (cada asunto creado)
}