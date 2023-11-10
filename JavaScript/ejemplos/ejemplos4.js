//CONECCION CON EL DOM
//console.log(document);
//getElementById(id)

/* let aplicacion = document.getElementById("aplicacion");
console.log(aplicacion.innerHTML);// contenido html interno
console.log(aplicacion.innerText);// solo devuelve el texto
 */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerText);
console.log(parrafo.innerHTML);
 */

//getElementsByClassName(clase);
/*  let perritos= document.getElementsByClassName("perritos");
 console.log(perritos);
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

//formas de recorrerlo con un for: 

/* getElemntsByTagName(nombre);  */

/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML); 
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */

//modificacion de NODOS:
//let saludo = document.getElementById("saludo");
//let seccion = prompt("ingrese la seccion a la que  desea ingresar:")

//un ejemplo:

/* if(seccion === "carrito"){
    saludo.innerHTML = "<h1>BIENVENIDOS AL CARRITO</h1>";
    saludo.className = "amarillo";
}else if(seccion === "favoritos"){
    saludo.innerHTML = "<h1> bienvenidos a los favoritos</h1>";
    saludo.className = "rojo";
}else{
    saludo.innerHTML = "<h1>bienvenidos a nuestra pagina</h1>";
    saludo.className = "verde";
}; */

//creacion de nodos:
//creacion de la etiqueta
//let parrafo = document.createElement("p");

//asignacion del contenido:
//parrafo.innerHTML = "Hooooola a todos";

//asignacion del padre
//1: forma en el body:
//document.body.append(parrafo);

//2: forma en el contenedor:
/* let contenedor = document.getElementById("contenedor");
contenedor.append(parrafo); */

//eliminar un nodo:

/* let contenedor =document.getElementById("contenedor");
contenedor.remove() */


//*******ejemplo completo:******* */

//traemos el contenedor donde mostraremos los productos
let contenedor = document.getElementById("contenedor");
const productos = [
    {id: 1, nombre: "camisa", precio: "1000"},
    {id: 2, nombre: "gorra", precio: "750"},
    {id: 3, nombre: "pantalon", precio: "500"},
    {id: 4, nombre: "media", precio: "392"},
];

productos.forEach((item) => {
    //creamos la etiqueta que contendra el contenido del producto
    let div = document.createElement("div");

    //asignamos el contenido a la etiqueta anteriormente creada
    div.innerHTML = `
    <h2 class = "amarillo"> Id: ${item.id}</h2>
    <p class= "verde"> Nombre: ${item.nombre}</p>
    <b class="rojo"> $${item.precio}</b> 
    `;

    //agregamos la etiqueta al contenedor de la pagina 
    contenedor.append(div);
});



//para agregar un tipo de modo NEGRO O BLANCO

/* let tipo =prompt("ingrese el modo:");

if(tipo ==="negro"){
    document.body.className = "negro";
}else{
    document.body.className = "gris";
} */

// **********CLASE 10 ******************
let boton = document.getElementById("click");

/* const saludar= () =>{
    console.log("Hola click");
}; */ 
//primera forma para definir un evento:
//el addEventListener recibe el nombre del evento y la declaracion de una funcion.

//ewboton.addEventListener("click", saludar);

//segunda forma para definir un evento:

//boton.onclick =  saludar;

// de la forma 1 podemos hacer tambien :
/* let evento =prompt("ingrese el evento");

boton.addEventListener(evento,saludar); */

//otra forma de hacerlo: 
//para que el usuario ingrese el nombre y luego 
//al apretar el boton te dice el nombre que le pusiste.


 const saludar =(nombre) => {
     console.log(`Hola ${nombre}`);
}; 
let nombre = prompt("ingrese el nombre:");

//se convierte en una funcion.
boton.addEventListener("click", () => saludar(nombre));

// EVENTOS MAS COMUNES:

//MOUSE
//let boton = document.getElementById("click");

//al apretar el mouse ya se ejecuta
//boton.addEventListener("mousedown", () => console.log("mousedown"));

//al soltar el mouse ya se ejecuta
//boton.addEventListener("mouseup", () => console.log("mouseup"));

//al pasar el mouse se ejecuta
//boton.addEventListener("mouseover", () => console.log("mouseover"));

//se ejecuta al salir del boton
//boton.addEventListener("mouseout", () => console.log("mouseout"));

//se ejecuta mientras estoy dentro del boton
//boton.addEventListener("mousemove", () => console.log("mousemove"));



//EVENTOS DEL TECLADO:

/* let nombre = document.getElementById("nombre");
let saludo = document.getElementById("saludo"); */

//nombre.addEventListener("keydown", () => console.log("keydown"));

//nombre.addEventListener("keyup", () => console.log("keyup"));


//aca hacemos que cada color tenga su tecla con e.key
/* 
nombre.addEventListener("keyup", (e) =>{
    if(e.key === "a"){
        saludo.className ="amarillo"
    } else if(e.key === "w"){
        saludo.className ="rojo"
    } else if(e.key === "s"){
        saludo.className ="verde"
    } else if(e.key === "d"){
        saludo.className ="negro"
    }
}) */

//detecta un cambio de enfoque
//nombre.addEventListener("change", () => console.log("change"));


//formas de validacion si no incluye un @ en este caso
/* nombre.addEventListener("input", () => {
    if(!nombre.value.includes("@")){
        saludo.className = "rojo";
    }else{
        saludo.className = "verde";
    }
}) */


//nos muestra todo lo que escribimos
/* nombre.addEventListener("input", () =>{
    console.log(nombre.value);
}); */


//*******************FORMULARIOS: ****************/

//let formulario = document.getElementById("formulario");

/* formulario.addEventListener("submit",(e) => {
    e.preventDefault();

    let inputs = e.target.children;
    //html collection
    //console.log(inputs[0].value);
    //console.log(inputs[1].value);

    if(!inputs[0].value.includes("@")){
        alert("el campo debe ser un email");
        inputs[0].value = "";
    }
}) */


//********************************CLASE 11 **************/
//un ejemplo de como llamar dentro de un swicht a una arrow funcion

/* const darAcceso = (mensaje,usuario) => {
    alert (`${mensaje} ${usuario}`);
};

let nombre = prompt("ingrese el nombre de usuario");

switch(nombre){
    case "Ezequiel":
        darAcceso("Eres admin", nombre);
        break;
    case "Walter":
        darAcceso("Eres de soporte", nombre);
        break;
    default:
        darAcceso("No estas autorizado", nombre);
        break;
} */

//STORAGE:

//LOCALSTORAGE

//localStorage.setItem("nombre","ezequiel");
//localStorage.setItem("numero",29);
//localStorage.setItem("valor","true");


//getItem es para traer elementos del storage

/* let nombre =localStorage.getItem("nombre");
console.log(nombre);

let numero =localStorage.getItem("numero");
console.log(numero);

let valor= localStorage.getItem("valor");
console.log(valor); */

//recorrer el localStorage con un for y 
//sacar el valor de la clave que contiene numero

/* for(let i=0; i< localStorage.length; i++){
    let clave = localStorage.key(i);

    console.log(clave);
    console.log("valor asociado", localStorage.getItem(clave));

} */


//para remover un item de la lista del localStorage

//localStorage.removeItem("numero");

//localStorage.clear();

//sessionStorage

//console.log(sessionStorage);

//sessionStorage.setItem("nombre","ezequiel");
//sessionStorage.setItem("numero",29);
//sessionStorage.setItem("valor","true");

//JSON

//JSON.stringify(elemento) dar formato json al elemento

//JSON.parse(elemento): quita el formato json al elemento

/* let persona ={
    nombre: "ezee",
    edad: 29,
}; */

//esta es la correcta forma de guardar un objeto
//localStorage.setItem("persona", JSON.stringify(persona));


//let arreglo = [2,8,10,12,14,16,18,20];

//manera correcta de llamar a un arreglo
//localStorage.setItem("arreglo", JSON.stringify(arreglo));


/* const productos =[
{id: 1 ,nombre: "camisa", precio: 1000},
{id: 2 ,nombre: "gorra", precio: 750},
{id: 3 ,nombre: "zapato", precio: 380},
{id: 4 ,nombre: "medias", precio: 512},
]; */


//para cargar todo el arreglo de una
//localStorage.setItem("carrito", JSON.stringify(productos));

//para cargar uno por uno:
/* const guardarStorage = (clave, valor) =>  {
    localStorage.setItem(clave, valor);
} */

/* productos.forEach((item) =>{
    guardarStorage(item.id, JSON.stringify(item));
}); */

//*****************EJEMPLO  1 DE UN INICIO DE SESION CON STORAGE:*****************

/* let usuario;
//traemos el usuario del storage
let usuarioStorage = sessionStorage.getItem("usuario");

//si hay usuario en el storage, significa que no es la primera vez que entra en nuestra pagina
if (usuarioStorage){
    usuario= usuarioStorage;

    alert(`bienvenid@ nuevamente ${usuario}`);
}else{
    //como es la primera vez que entra pedimos el nombre
    usuario = prompt("ingrese el usuario");

    alert(`bienvenid@ por primera vez ${usuario}`)

    //guardamos el nombre
    sessionStorage.setItem("usuario", usuario);
}; */

//*********EJEMPLO 2*******
/* 
let eliminar = document.getElementById("eliminar");

let carrito;

let carritoStorage = localStorage.getItem("carrito");

if(carritoStorage){
    carrito= JSON.parse(carritoStorage);
}else{
    carrito = [];

    let div = document.createElement("div");
    div.innerHTML = "No hay elementos en el carrito";

    document.body.append(div);
} */

//mostramos el carrito en el dom
/* carrito.forEach((item) =>{
    let div = document.createElement("div");
    div.innerHTML = `
    <h2> Id: ${item.id}</h2>
    <p> Nombre: ${item.nombre} </p>
    <b> $${item.precio} </b>
    `;

    document.body.append(div);
}); */

//boton eliminar le agregamos un escuchador de eventos
//eliminar.addEventListener("click", () => {
//alert("carrito eliminado");
//borramos el storage
// localStorage.removeItem("carrito");
//recargamos la pagina
//location.reload();
//})

//******************** CLASE 12 *********************/
//OPERADOR TERNARIO

//condicion ? codigo a ejecutar cuando condicion verdadera : condigo a ejecutar cuando condicion es falsa


/* let edad = 24;


edad >= 18 ? console.log("eres mayor de edad") : console.log("no eres mayor de edad") */
/* if(edad> 18){
    console.log("eres mayor de edad");
}else{
    console.log("no eres mayor de edad")
}
 */

//OTRO EJEMPLO 2:

/* let temperatura = 28;

temperatura > 30 ? console.log("dia caluroso") : console.log("dia agradable");
 */
/* 
if(temperatura > 30){
    console.log("dia caluroso");
}else{
    console.log("dia agradable");
}

*/

//OTRO EJEMPLO 3:

/* const usuario ={
    nombre:"eze",
    edad: 10,
}; */

//return implicito
//                            18 entonces? devuelve true sino : devuelve false
/* const permiso = usuario.edad >= 18 ? true : false;

permiso ? console.log("puedes entrar a la fiesta") : console.log("no puedes entrar a la fiesta");
 */

//operadores logicos

/* 
valor 1 && valor 2 retorna valor 1 si este es falso, en caso contrario retorna valor2

valor1 || valor 2 retorna valor 1 si este es verdadera, en caso contrario retorna valor2

*/

//const carrito = [];

/* if(carrito.length === 0){
    console.log("elc arrito esta vacio");
}*/

//carrito.length === 0 && console.log("el carrito esta vacio");



//EJMPLOS:

/* let carrito;

let carritoStorage =JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
    carrito = carritoStorage;
}else{
    carrito = [];
}; */

//TODO LO DE ARRIBA SE SIMPLIFICO EN ESTO DE ABAJO---.
//const carrito =JSON.parse(localStorage.getItem("carrito")) || [];


/* const usuario = {
    nombre: "muzamba",
    edad: 29,
    cursos: {
        javascript: "aprobado",
    },
}; */

//FORMA SIMPLIFICADA:

//console.log(usuario?.cursos?.javascript ||"la propiedad no existe");


//DESESTRUCTURACION:

/*  const usuario = {
    nombre: "muzamba",
    edad: 29,
    direccion: "mariano acosta",
    telefonos: {
        casa: 123456,
        trabajo: 7894562,
    },
 };
//FORMA DE LLAMAR A CADA PARTE DENTRO DE USUARIO
let{
    nombre,
    direccion,
    telefonos: {casa,trabajo},
} = usuario;

console.log(casa);
console.log(trabajo); */

/* const usuario = {
    nombre: "muzamba",
    edad: 29,
    direccion: "mariano acosta",
    telefonos: {
        casa: {
            num1: 123456,
            casa2: 7894562,
        },
        trabajo: {
            num1: 5558471,
            trabajo2: 44623577,
        },
    },
};

let {
    nombre,
    telefonos: {
        casa: { num1: casa1 },
        trabajo: { num1: trabajo1 } },
} = usuario;

console.log(casa1, trabajo1);
 */

//ALIAS PARA CAMBIAR SI SE LLAMAN IGUALES

/*  const producto ={ nombre: "camisa", precio: 1000};
 const {nombre:nombreProducto, precio: precioProducto} =producto;

 console.log(nombreProducto,precioProducto); */

//UNA DESUSTRUCTURACION DE UN ARREGLO:

const nombres= ["ezequiel","anto","wali","aliii"];

const [nombreHijo, ,nombreHermano,nombreMadre]=nombres;

//console.log(nombres);
/* console.log(nombreHijo);
console.log(nombreHermano);
console.log(nombreMadre); */