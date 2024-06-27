// Objetivo
// Crear una jerarquía de clases que simule un sistema de vehículos, utilizando la herencia para compartir y extender funcionalidades.

// Instrucciones
// Define una clase Vehiculo: Esta clase debe tener propiedades como marca y modelo, y un método mostrarDetalles
// que imprima las propiedades del vehículo.
// Crea una subclase Coche: Extiende la clase Vehiculo e incluye una propiedad adicional tipoCombustible.
// Sobrescribe el método mostrarDetalles para incluir esta nueva propiedad.
// Crea una subclase Bicicleta: Extiende la clase Vehiculo e incluye una propiedad adicional tipoBicicleta.
// Sobrescribe el método mostrarDetalles para incluir esta nueva propiedad.


class Vehiculo {

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
  
    mostrarDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

  //nota:  constructor must call super in order to execute its parent (base) constructor

class Coche extends Vehiculo {

    constructor(marca, modelo, tipoCombustible) {
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }
  
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Combustible: ${this.tipoCombustible}`);
    }
}
  
class Bicicleta extends Vehiculo {

    constructor(marca, modelo, tipoBicicleta) {
        super(marca, modelo);
        this.tipoBicicleta = tipoBicicleta;
    }
  
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Bicicleta: ${this.tipoBicicleta}`);
    }
}
  

const unCoche = new Coche('Suzuki', 'Spresso', 'Super');
unCoche.mostrarDetalles();

const unaBicicleta = new Bicicleta('Lavisi', '2.0', 'Urbana');
unaBicicleta.mostrarDetalles();