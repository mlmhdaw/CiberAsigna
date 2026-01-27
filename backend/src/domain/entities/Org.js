// clase Org (organización)
class Org {

  // constructor de la clase Org
  constructor(id) {
    this.id = id;
    this.nom = null;
  }

  // convertir a objeto plano para cuando utilice base de datos (ahora todo en memoria)
  convertirPlano() {
    return {
      id: this.id,
      nom: this.nom
    }
  }
}

module.exports = Org;