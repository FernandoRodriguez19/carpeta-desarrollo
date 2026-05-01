console.log("Guía JavaScript iniciada");



//ejercicio 1
let nombre = "Fernando";
let edad = 19
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log("Fernando");

//ejercicio 2
let puntosBase =100;
let bonus = 50;
let penalizacion = 20;

let puntajeTotal = puntosBase + bonus - penalizacion;

console.log("Puntaje total:", puntajeTotal);

//ejercicio 3

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;

 const numero =Number (valor);

 const resultado = numero + 10;
    mensaje.textContent = "El resultado es: " + resultado;
 
 // Convertir valor a número
 // Sumar 10
 // Mostrar el resultado en pantalla
});

//ejercicio 4


boton.addEventListener("click", function () {
   let edad = input.value;

const edadMinima = 13;

if (edad >= edadMinima) {
    console.log("Puedes acceder al contenido");
} else {
    console.log("No puedes acceder al contenido");
}
});

//ejercicio 5

boton.addEventListener("click", function () {
    let numero = input.value;

    let vida = input.value;

    if (vida >= 70){
        console.log("esta en buen estado");
    }
    else if (vida >= 30 && vida < 70){
        console.log("jugador herido");
    }
    else {
        console.log("jugador en estado crítico");
    }
})


//ejercicio 6

let opcion = "iniciar";

switch (opcion) {
  case "iniciar":
    console.log("El juego ha comenzado");
    break;

  case "configuracion":
    console.log("Accediendo a la configuracion");
    break;

  case "creditos":
    console.log("Creditos.");
    break;

  case "salir":
    console.log("saliendo del juego");
    break;

  default:
    console.log("Opción no válida. Por favor, elige una opción del menú.");
    break;
}

//ejercicio 7

for (let i =5; i > 0; i--){
  console.log(i);
}

//ejercicio 8

let PuntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  PuntajeTotal += ronda;
}
console.log("Puntaje total:", PuntajeTotal);

//ejercicio 9

const inventario = ["espada", "pocion", "llave", "escudo", "mapa"];
console.log("primer objeto:", inventario[0]);
console.log("cantidad total de objetos:", inventario.length);
console.log("ultimo objeto:", inventario[inventario.length -1]);

//ejercicio 10

const inventarioNuevo = ["espada", "pocion", "llave", "escudo"];

for (let i = 0; i < inventarioNuevo.length; i++){
  console.log(inventarioNuevo[i]);
}

//ejrcicio 11

let mochila = [];

mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");  

mochila.pop();
console.log(mochila);

//ejercicio 12

let inventarioPuerta = ["espada", "pocion", "llave", "escudo"];


  if (inventarioPuerta.includes("llave")) {
    console.log ("la puerta se abre");
  }
    else{ 
      console.log("necesitas una llave");
    }
   

  //ejercicio 13

 function saludarUsuario(nombre) {
    console.log("Bienvenido, " + nombre);
}
saludarUsuario("Ferchito");

//ejercicio 14

function calcularVidaRestante(vida, danio) {
    let vidaFinal = vida - danio;
    return vidaFinal;

let resultado = calcularVidaRestante(100, 30);

console.log("Vida restante: " + resultado); 
}

//ejercicio 15

const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(10, 5)); 

//ejercicio 16

const jugador = {
  nombre: "Ferchitoo",
  vida: 100,
  energia: 80,
  nivel: 1,
  inventario: ["llaves", "auriculares"]
};

console.log("Nombre del jugador:", jugador.nombre);
console.log("Vida del jugador:", jugador.vida);
console.log("Energía del jugador:", jugador.energia);
console.log("Nivel del jugador:", jugador.nivel);
console.log("Inventario del jugador:", jugador.inventario);

//ejercicio 17

const jugador2 = {
  nombre: "Ferchitoo",
  nivel: 1,
  monedas: 0
};
jugador2.nivel = jugador2.nivel + 1; 
jugador2.monedas = jugador2.monedas + 50;
console.log(jugador2);

//ejercicio 18

const personajesF = [
  { nombre: "Ferchitoo", vida: 100, clase: "guerrero", nivel: 3 },
  { nombre: "Scocco", vida: 120, clase: "mago", nivel: 4 },
  { nombre: "Chiki", vida: 90, clase: "ladron", nivel: 2 }
];

  personajesF.forEach((personaje) => {
    console.log(`El personaje ${personaje.nombre} es un ${personaje.clase} de nivel ${personaje.nivel}.`);
});
 
//ejercicio 19

const personajesFuertes = personajesF.filter((personaje) => {
return personajesF.nivel >= 3;

console.log(personajesFuertes);
});

//ejercicio 20


const nombres = personajes.map((personaje) => {
  
    return personaje.nombre;
});

console.log(nombres); 

//ejercicio 21 

const personajeEncontrado = personajesF.find((personaje) => {
    return personaje.nombre === "Scocco";
    });
    console.log(personajeEncontrado);

    //ejercicio 22

    const vidaTotal = personajesF.reduce((total, personaje) => {
    return total + personaje.vida;
}, 0);

console.log("Vida total de los personajes:", vidaTotal);

//ejercicio 23

const textoBienvenida = document.getElementById("mensaje");
textoBienvenida.textContent = "Bienvenido a la guía de JavaScript";
textoBienvenida .style.color = "green"; 

//ejercicio 24

const botonazo = document.getElementById("btn");
const mensajito = document.getElementById("mensaje");

let puntos = 0;

botonazo.addEventListener("click", function () {
  puntos += 10;
  mensajito.textContent = "Puntos: " + puntos;
});

//ejercicio 25

const entrada = document.getElementById("dato");
const botoncito = document.getElementById("btn");
const mensajero = document.getElementById("mensaje");

botoncito.addEventListener("click", function () {
  const valor = entrada.value;

  if (valor.trim() === "") {
    mensajero.textContent = "Por favor, ingresa un valor válido.";
    mensajero.style.color = "green";
  } else {
    mensajero.textContent = "Valor ingresado: " + valor;
    mensajero.style.color = "red";
  }   

});

//ejercicio 26

const jugador3 = {
  nombre: "Ferchitoo",
  vida: 100,
};
localStorage.setItem("datosJugador", JSON.stringify(jugador));

const jugadorRecuperado = JSON.parse(localStorage.getItem("datosJugador"));

console.log("Datos recuperados:", jugadorRecuperado);
console.log("Nombre del jugador:", jugadorRecuperado.nombre);

//ejercicio 27

