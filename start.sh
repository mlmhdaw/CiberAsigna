# start.sh

#!/bin/bash
# start.sh - Script de validación y arranque de CiberAsigna

echo ">>> Iniciando batería de pruebas (Fase-02 MH-1) <<<"

# Ejecución en cadena de los tests unitarios y el de integración
node test/func.test.js && \
node test/org.test.js && \
node test/asunto.test.js && \
node test/global.test.js

# Comprobamos si la cadena de tests fue exitosa
# `[$?]`: variable que guarda, automáticamente, el "código de salida" del último comando ejecutado
  # = 0: éxito
  # <> 0: error
if [ $? -eq 0 ]; then
    echo -e "\n PRUEBAS SUPERADAS: El ecosistema es estable.\n"
    # Arrancamos el reporte de consolidación
    node backend/src/index.js
else
    echo -e "\n ERROR: Los tests no han pasado. El sistema no arrancará.\n"
    exit 1 # con esto salimos de la aplicación
fi