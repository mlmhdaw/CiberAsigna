// orgService.js

/**
 * GESTIÓN DE ORGANISMOS
 * Este módulo centraliza la lógica de creación y almacenamiento temporal de la entidad org
*/

// importación de la clase Org.js (referencia obligatoria para modularidad de orgService.js)
const Org = require('../entities/Org');

// crear array para guardar el registro temporal (en memoria) de Org
const organismos = [];

// -------------------------------- Creación de un nuevoRegistroOrg --------------------------------

/**
 * Función para crear un nuevo registro de datos (Nuevo Org).
 * Implementa el patrón de fábrica para instanciar y persistir la entidad.
 * @param  {Object} datos     - Objeto con los parámetros de entrada
 * @param  {string} datos.nom - nombre del organismo
 * @return {Org}              - La instancia del organismo recién creado
*/

function crearRegistroOrg({nom = null}) {

  // generar el id único (último + 1)
  const id = organismos.length + 1;

  // creo un elemento (instancia) del tipo organismos (Org.js) para trabajar localmente (dentro de la función)
  // con esta instrucción, en automático, el nuevo elemento toma id = id generado (último + 1)
  const miOrg = new Org(id);

  // incluir, el registro del organismo, sus datos
  if (nom) miOrg.nom = nom;

  // persistir, en memoria, el elemento del array
  organismos.push(miOrg);

 // devolver el organismo con sus atributos al módulo superior (quien ha llamado a orgService.js)
 return miOrg;
}

// ---------------------------- Consulta / lectura de un organismo existente ----------------------------

/**
 * Función para consultar/leer un registro de datos (organismo creado previamente)
 * Implementa el patrón de búsqueda o repositorio para localizar un elemento en un array (más tarde tabla)
 * @param {Object} datos      - Objeto de búsqueda
 * @param {String} datos.nom  - nombre del organismo a buscar (completo o parcial)
 * @param {Org[]}             - array de organismos que coinciden (o array vacío)
*/

function consultarOrg({nom}) {

  // verificar que, antes de generar la búsqueda, se ha introducido un valor para `[nom]`
  if (!nom) return [];

  // Convertimos a minúsculas para una búsqueda "Case Insensitive"
  const minuscula = nom.toLowerCase();

  // .filter devuelve un array con todos los que cumplan la condición
  return organismos.filter(miOrg => miOrg.nom && miOrg.nom.toLowerCase().includes(minuscula));

}

// ------------------------------- Actualización de un organismo existente -------------------------------

 /**
 * Función para modificar un registro de datos (organismo creado previamente)
 * Implementa el patrón de modificación (una vez se ha localizado) sobre un elemento en un array (más tarde tabla)
 * @param {Object} actual       - organismo que se pasa (el buscado en `[consultarOrg()]`)
 * @param {Object} cambios      - organismo con los datos nuevos a incluir
 * @param {string} cambios.nom  - nombre nuevo del organismo 
 */

function actualizarOrg(actual, {nom}) {

  // verificar que, antes de tratar de actualizar, existe el organismo o registro`[actual]]`
  if (!actual) return null;

  // actualizar solo aquellos atributos que han sufrido cambios
  if (nom !== null) actual.nom = nom; 

  // Devuelve el objeto `[actual]` ya modificado
  return actual;

}

// ------------------------- Exportación del módulo (otros pueden utilizarlo) -------------------------

module.exports = {
  crearRegistroOrg,
  consultarOrg,
  actualizarOrg,
  organismos
}