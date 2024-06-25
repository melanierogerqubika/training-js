// Objetivo
// Crear una promesa que simule una solicitud de datos a un servidor y maneje tanto el éxito como el fallo de la operación.

// Instrucciones
// Define una promesa: Crea una promesa que simule la obtención de datos de un servidor. Usa setTimeout para simular una demora de 2 segundos.
// Cumple o rechaza la promesa: Después de 2 segundos, la promesa debe cumplirse con un mensaje de éxito ("Datos obtenidos con éxito")
// o ser rechazada con un mensaje de error ("Error al obtener los datos").
// Maneja la promesa: Usa .then y .catch para manejar el resultado de la promesa.

// Usa esto -> let exito = Math.random() > 0.5; Para simular éxito o error aleatorio - boolean

// 2 -> Usando fetch y esta url "https://api.restful-api.dev/objects/7" obtener el recurso e imprimirlo.

// 3 -> Ejecuta ambas promesas en paralelo.
//explicar el porque 

// 4 -> Convertir los ejemplos generados en el punto uno y dos, a la sintaxis async/await (tene en cuenta el manejo de errores)




// Ejercicio 1 -----------------------------------------------------
let exito = Math.random() > 0.5;

const obtenerDatos = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (exito) {
            resolve("Datos obtenidos con éxito");
        } else {
            reject("Error al obtener los datos");
        }
    }, 2000);
});

obtenerDatos.then(function(mensaje) {
    console.log("Ejercicio 1: " + mensaje);
})

obtenerDatos.catch(function(error) {
    console.error("Ejercicio 1: " + error);
});
//----------------------------------------------------------------


// Ejercicio 4 obtenerDatosAsync ---------------------------------
async function obtenerDatosAsync() {
    try {
        await new Promise(function(resolve, reject) {
                setTimeout(function() {
                    if (exito) {
                        resolve("Datos obtenidos con éxito");
                    } else {
                        reject("Error al obtener los datos");
                    }
                }, 2000);
            });
        console.log("Ejercicio 4 promise: " + "Datos obtenidos con éxito");

    }catch(err) {
        console.error("Ejercicio 4 promise: " + "Error al obtener los datos");
    }
}
obtenerDatosAsync();
//----------------------------------------------------------------



// Ejercicio 2 ----------------------------------------------------
const fetchPromesa = fetch("https://api.restful-api.dev/objects/7")
    .then(function(response) {
        return response.json();
    })
    .then(function(recurso) {
        console.log("Ejercicio 2 recurso: " + recurso);
        for (const key in recurso) {
            console.log("Ejercicio 2: " + key + ": " + recurso[key]);
        }
    })
//----------------------------------------------------------------

// Ejercicio 4 fetchPromesaAsync ---------------------------------
async function fetchPromesaAsync() {
    try {
        var response = await fetch("https://api.restful-api.dev/objects/7");
        if (!response.ok) {
            throw new Error("Error al obtener el recurso");
            console.error("Ejercicio 4 fetch: throw new Error");
        }
        var recurso = await response.json();
        for (const key in recurso) {
            console.log("Ejercicio 4 fetch: " + key + ": " + recurso[key]);
        }
    } catch (error) {
        console.error("Ejercicio 4 fetch: " + error);
    }
}

fetchPromesaAsync();
//----------------------------------------------------------------


// Ejercicio 3 ----------------------------------------------------
Promise.all([obtenerDatos, fetchPromesa])
.then(function(mensaje, recurso) {
    console.log("Ejercicio 3 P: " + mensaje);
    console.log("Ejercicio 3 F: " + recurso);
})
.catch(function(error) {
    console.error("Ejercicio 3 P error: " + error);
});
//----------------------------------------------------------------