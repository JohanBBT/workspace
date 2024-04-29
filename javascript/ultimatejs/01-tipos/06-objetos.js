//Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

//Dandole atributos a un objeto
let personaje = {
    //Llave: valor -> propiedad: valor -> Atributo: valor
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad: 16,
};

//Imprimiendo Objeto completo o un atributo del objeto
console.log(personaje); //Imprime: {nombre: 'Tanjiro', anime: 'Demon slayer', edad: 16}
console.log(personaje.nombre); //Imprime: Tanjiro
console.log(personaje['nombre']); //Imprime: Tanjiro (alternativa para acceder al atributo de un objeto)



//Modificando valor de un atributo
personaje.edad = 13;//Forma 1.
let llave = 'edad'; //Forma 2. Caso interesante para acceder a todas las propiedades de un objeto con un ciclo for
personaje[llave] = 12;


//Eliminar una propiedad de un objeto
delete personaje.anime;
console.log(personaje); //Imprime: {nombre: 'Tanjiro', edad: 12}