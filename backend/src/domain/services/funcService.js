// funcService.js

/**
 * GESTIÓN DE FUNCIONARIOS
 * Este módulo centraliza la lógica de creación y almacenamiento temporal de la entidad func
 */

// importación de la clase Func.js (referencia obligatoria para modularidad de funcService.js)
const Func = require('../entities/Func');

// crear array para guardar el registro temporal (en memoria) de Func
const funcionarios = [];

// -------------------------------- Creación de un nuevoRegistroFunc --------------------------------

/**
 * Función para crear un nuevo registro de datos (Nuevo Func).
 * Implementa el patrón de fábrica para instanciar y persistir la entidad.
 * @param {Object} datos            - Objeto con los parámetros de entrada.
 * @param {string|null} datos.ncp   - número de carnet profesional
 * @param {string|null} datos.cat   - categoría profesional (máximo 20 caracteres)
 * @param {string|null} datos.apel  - Apellidos (máximo 50 caracteres)
 * @param {string|null} datos.nom   - Nombre  (máximo 25 caracteres)
 * @returns {Func}                  - La instancia del funcionario recién creada.
*/

function crearRegistroFunc({ncp = null, 
                            cat  = null, 
                            apel  = null, 
                            nom = null}) {

  // generar el id único (último + 1)
  const id = funcionarios.length + 1;

  // creo un elemento (instancia) del tipo funcionarios (Func.js) para trabajar localmente (dentro de la función)
  // con esta instrucción, en automático, el nuevo elemento toma id = id generado (último + 1)
  const miFunc = new Func(id);

  // incluir, el el registro del funcionario, sus datos
  if (ncp)  miFunc.ncp  = ncp;
  if (cat)  miFunc.cat  = cat;
  if (apel) miFunc.apel = apel;
  if (nom)  miFunc.nom  = nom;

  // persistir, en memoria, el elemento del array
  funcionarios.push(miFunc);

 // devolver el funcionario con sus atributos al módulo superior (quien ha llamado a funcService.js)
 return miFunc;
}

// ---------------------------- Consulta / lectura de un funcionario existente ----------------------------

/**
 * Función para consultar/leer un registro de datos (funcionario creado previamente)
 * Implementa el patrón de búsqueda o repositorio para localizar un elemento en un array (más tarde tabla)
 * @param {Object} datos      - Objeto de búsqueda
 * @param {string} datos.ncp  - Número de carnet profesional (elemento de búsqueda)
 * @returns {Func|null}     - La instancia encontrada o null si no existe
*/

function consultarFunc({ncp}) {
  // verificar que, antes de generar la búsqueda, se ha introducido un valor para `[ncp]`
  if (!ncp) return null;

  // El método .find recorre el array (hasta el final o encontrar el elemento) a localizar  
  // y devuelve el elemento que cumpla la condición (que el `[ncp]` del objeto sea igual al buscado)
  const result = funcionarios.find(miFunc => miFunc.ncp === ncp);

  // si lo encuentra lo devuelve
  // si no existe, devuelve null (para evitar undefined)
  return result || null;
}

// ------------------------------- Actualización de un funcionario existente -------------------------------

 /**
 * Función para modificar un registro de datos (funcionario creado previamente)
 * Implementa el patrón de modificación (una vez se ha localizado) sobre un elemento en un array (más tarde tabla)
 * @param {Func}       actual       - Asunto que se pasa (el buscado en `[consultarFunc()]`)
 * @param {Object}       cambios      - Objeto con los datos a incluir
 * @param {string|null}  cambios.ncp  - Nueva número de carnet profesional (solo por error al incluir y guardar)
 * @param {string|null}  cambios.cat  - Nueva categoría profesional
 * @param {string|null}  cambios.apel - Nuevos apellidos (solo por error al incluir y guardar)
 * @param {string|null}  cambios.nom  - Nuevo nombre (solo por error al incluir y guardar)
 * @param {boolean|null} cambios.hist - Lo quito de la plantilla actual o lo vuelvo a incluir
 */

function actualizarFunc(actual, {
                          ncp = null,
                          cat = null, 
                          apel = null, 
                          nom = null,
                          hist = null}) {

  // verificar que, antes de tratar de actualizar, existe el funcionario o registro`[actual]]`
  if (!actual) return null;

  // actualizar solo aquellos atributos que han sufrido cambios
  if (ncp !== null)  actual.ncp  = ncp;
  if (cat !== null)  actual.cat  = cat;
  if (apel !== null) actual.apel = apel;
  if (nom !== null)  actual.nom  = nom;
  if (hist !== null) actual.hist = hist;

  // Devuelve el objeto `[actual]` ya modificado
  return actual || null;
}

// ------------------------- Exportación del módulo (otros pueden utilizarlo) -------------------------

module.exports = {
  crearRegistroFunc,  // exportamos la función para crear el nuevo elemento del array (más tarde registro)
  consultarFunc,      // exportamos la función para consultar un elemento (por refe) del array
  actualizarFunc,     // exportamos la función para actualizar un elemento del array
  funcionarios        // exportamos el array donde se guardan los elementos (cada asunto creado)
}