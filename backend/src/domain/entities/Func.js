// clase Func (Empleado)
class Func {

  // constructor de la clase Func
  constructor(id) {
    this.id = id;
    this.ncp = null;
    this.cat = null;
    this.apel = null;
    this.nom = null;
    this.hist = false;
  }

  // convertir a objeto plano para cuando utilice base de datos (ahora todo en memoria)
  convertirPlano() {
    return {
      id: this.id,
      ncp: this.ncp,
      cat: this.cat,
      apel: this.apel,
      nom: this.nom,
      hist: this.hist
    }
  }
}

module.exports = Func;