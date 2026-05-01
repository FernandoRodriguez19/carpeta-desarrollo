// ejercio 27 

¿Cuál es la diferencia entre let, const y var?

la variable let es un tipo de variable que se usa para poner valores que se pueden cambiar si se lo desea 
la variable const es lo contrario es para guardar valores estaticos 
y la variavle var es una variable antigua que funcionaba como hoy funcionan las variables let y const pero ya no se usa por diversos fallos 

usaria una variable let si quisiera hacer un acumulador o contador 
una variable const la usaria para declarar por ejemplo un array
no es recomendable usar la variable var porque permite volver a declarar la misma variable en el mismo archivo y se puede volver a declarar la misma variable en el mismo archivo sin que salte un error

//ejercicio 28 

el scope es basicamete el territorio dende una variable puede funcionar, y quiere decir que estructuras podemos usar con estas variables 

function mostrarNombre() {
 let nombre = "Local";
 console.log(nombre);
}

mostrarNombre();
console.log(nombre);

lo primero que sale es el texto local, luego se muestra nada porque la variable "nombre" fue declarada con let adentro de las llaves { } de la función mostrarNombre. Esto significa que su "territorio" o alcance está limitado exclusivamente a esa función.

//ejercicio 29 

Un array es una colección de elementos ordenados por un índice numérico y un objeto es una estructura que guarda datos mediante pares de clave: valor.

un array es conveniente usarlo por ejemplo para crear un inventario en un juego y un objeto lo usamos cuando necesitamos describir algo en detalle y querés acceder a un dato específico sin tener que recorrer toda la lista.

un ejemplo de un array es este
const enemigosEnPantalla = ["Iguana Malvada", "Cuervo", "Pinche Móvil"];

const inventario = ["espada", "poción", "llave"];

const jugador = {
 nombre: "Luna",
 vida: 100,
 nivel: 3
};

esta estructura respresenta un array donde se crea un inventario y luego se usa un objeto para describir al jugador 

//ejercicio 30 

Un evento en JavaScript es básicamente una señal de que algo ha sucedido como un boton o un click cuando pasa algo dipara al codigo a hacer lo que tenia que hacer 

boton.addEventListener("click", function () {
 console.log("El usuario hizo clic");
});

en este codigo el elemto que escucha el evento es la variable boton donde se esta escuchando el click de cuando se presiona el mouse y se ejecuta la accion console.log("El usuario hizo clic");

se podria usar en menús desplegables, al pasar el mouse sobre un escudo, que aparezca la información del equipo.