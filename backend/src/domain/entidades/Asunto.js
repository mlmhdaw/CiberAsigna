// clase Asunto
class Asunto {
  
  // constructor de la clase Asunto
  constructor(id) {
    this.id = id;
    this.refe = null;
    this.refs = null;
    this.fece = new Date().toISOString().slice(0,10);
    this.fecs = null;
    this.rese = null;
    this.ress = null;
    this.est = null;
  }

  // método para actualizar `[est]` = "Asignado"
  asignarEstado() {
    if (
      this.refe !== null && 
      this.rese !== null && 
      this.fece >= new Date().toISOString().slice(0,10)
    ) {
      this.est = "Asignado";
    } else {
      throw new Error ("No se puede asignar: faltan campos o fecha inválida");
    }
  }

  // método para actualizar `[est]` = "En curso"
  cursarEstado() {
    if (
      this.est === "Asignado" && 
      this.fece <= new Date().toISOString().slice(0,10)
    ) {
      this.est = "En curso";
    } else {
      throw new Error ("No se puede trabajar con el asunto: Estado no asignado o fecha de asignación futura");
    }
  }

  // método para actualizar `[est]` = "Cerrado"
  cerrarEstado(fecs, ress, refs) {
    if (
      this.est === "En curso" && 
      fecs !== null &&
      refs !== null &&
      ress !== null &&
      new Date(fecs) >= new Date(this.fece)
    ) {
      this.fecs = fecs;
      this.ress = ress;
      this.refs = refs;
      this.est = "Cerrado";
    } else {
      throw new Error ("No se puede cerrar el asunto: Faltan datos por cumplimentar");
    }
  }

  // convertir a objeto plano para cuando utilice base de datos (ahora todo en memoria)
  convertirPlano() {
    return {
      id: this.id,
      refe: this.refe,
      refs: this.refs,
      fece: this.fece,
      fecs: this.fecs,
      rese: this.rese,
      ress: this.ress,
      est: this.est
    };
  }
}