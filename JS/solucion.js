// Set 1 -> Arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 1. Implementa una función de expresión que tome el siguiente array y devuelva un nuevo array con solo los números pares.
const arrayAFiltrar = [1, 10, 3, 4, 80, 120, 2, 55, 70];

function pares(array){
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

document.querySelector("#resultado1").innerHTML = `${pares(arrayAFiltrar)}`;




// 2. Dado el array "numeros" y usando array.reduce() retornar la suma de todos ellos:

// nota: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

function arrayReduceSumar(total, numero){
    return total + numero
}

document.querySelector("#resultado2").innerHTML = `${numeros.reduce(arrayReduceSumar)}`;


// 3. Dado el array "numeros", devolver cada valor al cuadrado

function cuadrado(array){
    let numerosCuadrados = [];
    for (let i = 0; i < array.length; i++) {
        let numCuadrado = parseInt(array[i]);
        numCuadrado = numCuadrado * numCuadrado;
        numerosCuadrados.push(numCuadrado);
    }
    return numerosCuadrados;
  }
  
  document.querySelector("#resultado3").innerHTML = `${cuadrado(numeros)}`;


//4. Combina todas las funciones anteriores para filtrar los números pares, luego sumar los números pares, y finalmente aplicar una operación (por ejemplo, duplicar el valor) usando un callback.

function combinarFunciones(array){
    let combinar = pares(arrayAFiltrar);
    combinar = [combinar.reduce(arrayReduceSumar)]; // nota le agregue [] para combertir el valor resultante del reduce a un array
    combinar = cuadrado(combinar)
    return combinar

}

document.querySelector("#resultado4").innerHTML = `${combinarFunciones(numeros)}`;


// Set 2 -> Procesamiento de datos de estudiantes

/**
 * Ejercicio: Procesamiento de Datos de Estudiantes
 * Descripción:
 * Tienes un conjunto de datos de estudiantes, cada uno con su nombre y calificaciones.
 * Debes implementar varias funciones y estructuras para procesar estos datos.
 * El ejercicio incluye funciones de expresión, arrow functions, validación de tipos, operador ternario,
 * uso de labels con bucles anidados, objetos literales y constructores, y operadores lógicos como &&, ?? y ||.
 */

// Datos iniciales
const estudiantes = [
  { nombre: "Ana", calificaciones: [8, 9, 7] },
  { nombre: "Luis", calificaciones: [5, 6, 4] },
  { nombre: "Silvia", calificaciones: [10, 8, 9] },
];

// Paso 1: Función de expresión que internamete use un array.reduce(*)
// para calcular promedio (Usar nombre "calcularPromedio" ya que sera usada en el ejercicio 3)


function calcularPromedio(array){
  let suma = array.reduce((total, valorActual) => total + valorActual, 0);
  let promedio = suma/array.length;
  return promedio
} 


// Paso 2: Arrow function para verificar si el estudiante pasa (usar como nombre de funcion "esAprobado" se usara en el siguiente ejercicio)
let esAprobado = (promedio) => promedio >= 6;

for (let i = 0; i < estudiantes.length; i++){
  let promedio = calcularPromedio(estudiantes[i].calificaciones);//promedio de cada estudiant
  console.log(promedio)
  console.log(esAprobado(promedio))
  estudiantes[i].aprueba = esAprobado(promedio);
  console.log(estudiantes);
}

// Paso 3: Usando la funcion de array que creas mas conveniente devolver un nuevo array
// el cual contenga los mismos estudiantes, pero agregando a cada uno, una nueva propiedad llamada
// "aprueba" cuyo valor seria la respuesta de la funcion creada en el ejercicio anterior ("esAprobado")
// Datos extra:
// La siguiente funcion tiene errores, en ocaciones funcionara bien y en otras no, buscar y fixear esos errores.
function procesarEstudiantes(estudiantes, callback) {}

// procesarEstudiantes(estudiantes, "aprueba")
// procesarEstudiantes(estudiantes, esAprobado)

// Paso 4: Usando operador ternario imprimir en el console log las palabras "Aprobado", "Reprobado"
// segun corresponda al valor de "aprueba" definido en el ejercicio anterior

procesarEstudiantes(estudiantes, esAprobado).forEach((estudiante) => {
  console.log((estudiante.aprueba) ? "Aprobado" : "Reprobado");
});


// Paso 5: Para todos los pasos anteriores utilizamos un array con object literals.
// Ahora tenemos que crear un object constructor.
// El constructor debe seguir la siguiente firma "Estudiante(nombre, calificaciones)"
// Ambos parametros pueden ser undefined o vacios, en dichos casos debemos asignar "Desconocido" al nombre
// y un array vacio a las calificaciones.

function Estudiante(nombre, calificaciones) {
  this.nombre = (nombre !== undefined && nombre !== "") ? nombre : "Desconocido";
  this.calificaciones = (calificaciones !== undefined && calificaciones.length > 0) ? calificaciones : [];
}


const estudianteDesconocido = new Estudiante();
const estudianteConNombre = new Estudiante("Pedro", [7, 8, 6]);

console.log(estudianteDesconocido);
console.log(estudianteConNombre);
