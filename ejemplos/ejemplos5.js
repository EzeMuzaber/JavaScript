//declaracion de variables
/* 
let datosCorrectos = false;
let jugador;
let opcionElemento; */

//funcion para mostrar mensajes en el DOM

/* const mensajeUsuario = mensaje => {
    const arranque =document.getElementById("arranque");
    arranque.innerHTML = mensaje;
}; */

//funcion para manejar el inicio de la aplicacion:

//const inicioPrograma = () => {
   /*  if(!datosCorrectos){
        const nombreInput = document.getElementById("nombre");
        const apellidoInput = document.getElementById("apellido");

        jugador = nombreInput.value !== "" && apellidoInput.value !== ""
        ?(datosCorrectos = true, mensajeUsuario(`Hola, ${jugador}, le damos la bienvenida!!!!`),inicioMenu())
        :mensajeUsuario("Datos incorrectos. por favor, ingrese su nombre y su apellido nuevamente.");

        
        localStorage.setItem("nombreJugador",jugador); */
        /*jugador = nombreInput.value + " " + apellidoInput.value;

        if(nombreInput.value !== "" && apellidoInput.value !== ""){
            datosCorrectos=true;
            mensajeUsuario(`Hola, ${jugador}, le damos la bienvenida!!!!`);
            inicioMenu();
        }else{
            mensajeUsuario("Datos incorrectos. por favor, ingrese su nombre y su apellido nuevamente.");
        } */
  //  }
//};

//mostrar el menu principal:
/* const inicioMenu = () => {
    const form= document.createElement("form");
    form.id = "menuForm";

    form.innerHTML = `
    <label for="opcionPrincipal">¿Qué desea hacer?</label>
        <select id="opcionPrincipal">
            <option value="buscar">Buscar un producto</option>
            <option value="compra">Realizar una compra</option>
            <option value="juegos">Ver los juegos según edades</option>
            <option value="salir">Salir del programa</option>
        </select>
        <button type="submit">Elegir</button>
    `;
    const arranque = document.getElementById("arranque");
    arranque.appendChild(form);

    form.addEventListener("submit", function (e){
        e.preventDefault();

        const opcionElemento = document.getElementById("opcionPrincipal").value;

        switch(opcionElemento){
            case "buscar":
                break;
            case "comprar":
                break;
            case "juegos":
                break;
            case "salir":
                mensajeUsuario ("Saliendod el programa. Hasta luego!");
                break;
            default:
                mensajeUsuario("Opción incorrecta. Por favor, elija una opción válida.");
                break;
        }
    });
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function (e){
        e.preventDefault();
        inicioPrograma();
    })
    localStorage.setItem("nombreJugador",jugador);
    const nombreGuardado = localStorage.getItem("nombreJugador");
} */

///*************** CLASE 13 ********************/// 
//Spreado operator: ->  ...
/*  const nombres = ["Alex", "Ezee", "Anto", "Aliii"];

 console.log(...nombres);
 */
//es lo mismo lo que hacia antes con .join
 //console.log(nombres.join(" "));


//*/CON NUMEROS:

/* const numeros= [4,77,99,526,-55,-22,10256,44,22];

console.log(Math.max(...numeros));
console.log(Math.min(...numeros)); */

//*/ PASO POR VALOR: 
//ejemplos con string o numero:
/* si es  un string o un numero entonces al llamar a nombre1 se crea un espacio que se llama "juan"
y al llamar a nombre2 se crea un espacio que se llama "juan" y "emiliano", nunca cambiamos a 
nombre1 entonces al llamarlo vamos a obtener "juan" y si llamamos a nombre2, obtenemos "emiliano".
 */
/* let nombre1= "juan";
let nombre2 = nombre1;
 */
//nombre2= "emiliano";
//console.log(nombre1);//resultado:juan
//console.log(nombre2);//resultado: emiliano

//PASO POR REFERENCIA
//*/Ejemplo con arreglo,objeto
/* en este caso al tener un objeto, se crea un espacio para persona1 que se llama al objeto{} y
al decir que persona2 es igual a persona1 creamos o sobreescribimos a persona1 entonces persona2 va a pasar
a llamarse en persona1(ya que son iguales9 => alex
*/

//let persona1 ={nombre: "ezee", edad: 29};
//let persona2 = persona1;
//en esta opcion de abajo al hacer los 3 puntos (...) se crea una copia que ya no permite modificarse
/* let persona2 ={...persona1};
persona2.nombre="alex";
persona2.edad=30;
console.log(persona1); */


/* const nombres1=["Alex", "Anto"];
const nombres2=["Ezee", "Alii"];

const nombres =[...nombres1,...nombres2]; */

//console.log(nombres);

/* const usuario1={
    nombre:"alex",
    edad:29,
    curso: "Javascript",
};
const usuario2={
    ...usuario1,
    edad:27,//en este caso se modifica
    direccion: "mariano acosta 2000", //se agrega a la copia
};

console.log(usuario1);
console.log(usuario2); */

/* function sumar(...numeros){
    console.log(numeros);
    console.log(numeros.reduce((acum,item) => acum + item,0))
}
sumar(8,2,6,112,12,22,66,44,88,26);
sumar(2,4,6); */

////////////////////////////////////////////////////////////////
////////*CLASE 15 *//////////
//funciones Asincronas:

//setTimeout(funcion,tiempo);
/* setTimeout(() =>{
    console.log("hola");
},3000); */

//otro ejemplo mas complejo:
/*  let saludo= document.getElementById("saludo");
 let boton= document.getElementById("boton");

 boton.addEventListener("click", () =>{
    saludo.classList.add("color");//creamos el color para el fondo

    setTimeout(() => {
        saludo.classList.remove("color"); //hace que el color se remueva solo en 5 segundos
    },5000);
 }); */

 //OTRO EJEMPLO: en este caso sale uno abajo del otro con un milisegundo de diferencia
/*  for (const letra of "hola"){
    setTimeout(() =>{
        console.log(letra);
    },1000);
 };

 for (const letra of "mundo"){
    setTimeout(() =>{
        console.log(letra);
    },3000);
 }; */

 //ejemplo3:
/*  console.log("Inicio");

 setTimeout(() => {//vuelve a salir ultimo
    console.log("intermedio"); 
 },0);

 console.log("final"); */

 ////*  PROMESAS://////*/
 //new Promise((resolve,reject) =>{
    //cuerpo de la promesa
 //});

/*  const futuro =(valor) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            /* if (valor) {
                resolve("promesa resuelta");
            } else {
                reject("promesa rechazada");
            } */
            /*valor ? resolve("promesa resuelta") : reject("promesa rechazada");
        }, 3000);
    });
 }; */

 //console.log(futuro(true));
 /* futuro(true)//false
 .then((response)=> console.log(response))//se encarga de las promesas exitosas
 .catch((error)=> console.log(error))//se encarga de las promesas que fallan
 .finally(() => console.log("proceso finalizado"));//nos informa que finaliza el proceso
 */

//*/*////CLASE 16/////

//AJAX

/* fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json)); */

  /* let listado= document.getElementById("listado");
  fetch("./data.json")
  .then((response) => response.json())
  //.then((data)=> console.log(data))
  .then((data)=>{
     data.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2> ID: ${item.id}</h2>
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
        `;

        listado.append(li);
     });
  }); */
  
  fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data)=> console.log(data.results));
  