// comentario de linea
/*
comentario de bloque
*/
/*  */
//let edad = 29; //una variable tipo number
//let nombre= "Ezequiel";//variable tipo string

//no se puede cambiar el valor de la constante
//const IVA = 0.21;

/* nombre = "Alejandro";

console.log("hola ", nombre)
console.log("cuantos años tenes?", "tengo: " ,edad) */

/* let numeroUno= 5;
let numeroDos=10;

let resultadoSuma= numeroUno + numeroDos;
let resultadoResta= numeroUno - numeroDos;
let resultadoMultiplicacion= numeroUno * numeroDos;
let resultadoDivision= numeroUno / numeroDos;


console.log("la suma es: ",resultadoSuma);
console.log("la resta es: ",resultadoResta);
console.log("la multiplicacion es: ",resultadoMultiplicacion);
console.log("la division es: ",resultadoDivision); */
/* 
let saludo = "hola";
let nombre1 = "ezequiel";

let saludoCompleto =saludo + " " + nombre1 + " "+ "!!!";
console.log(saludoCompleto); */


/* let nombre2= prompt("ingrese su nombre");
alert ("hola " + nombre2);
 */

/* let numero3= Number(prompt("ingrese un numero"));
alert (numero3 +4);
  */

// let nombre = prompt("ingresa tu nombre");
// alert ("hola" +" "+  nombre + "," + " que tengas un lindo dia!!");

// let edad = Number(prompt("ingresa tu edad: "));
// alert ("Mi edad es:" + " " + edad);

// let entrada = prompt("ingresa tu nombre");
// let salida = prompt ("ingresa tu apellido");

// alert("Mi nombre completo es: " + " " + entrada + " " + salida);

// if ("eze"){
//   console.log("entramos");
// }

// console.log("finalizacion del proceso");

// let edad = 20;

// if(edad >= 18){
//   console.log("eres mayor de edad!!");
// }else{
//   console.log("no eres mayor de edad");
// }

//AGREGAMOS .TOLOWERCASE  para convertir de mayuscula a minuscula
// .TOUPPERCASE para convertir de minuscula a mayuscula

//  let respuesta = prompt("terminaste la tarea?").toLowerCase();

//  if(respuesta === "si"){
//   alert("puedes salir a jugar!!");
//  } else{
//   alert("no puedes salir a jugar!");
//  }

// let edad = Number(prompt("ingrese su edad"));

// if (edad <= 14){
//   alert("no puedes entrar a la fiesta");
// } else if (edad < 18){
//   alert("puedes entrar a fiesta acompañado por un adulto");
// }else{
//   alert("puedes entrar a la fiesta!")
// }

/*
valor1 && valor2 es verdadera cuando ambos valores son verdaderos, en caso contrario es falso

valor1 || valor2 es verdadero cuando al menos 1 de los valores es verdadero.

*/

// let nombre= prompt("ingrese su nombre");
// let apellido= prompt("ingrese su apellido");

// if(nombre != "" && apellido != ""){
//  alert(`Tu nombre es ${nombre} ${apellido}`); 
// }else{
//   alert("Datos requeridos!!")
// }

//o sino:

// if(nombre != "" && (nombre === "EZE" || nombre === "eze")){
//   alert("Hola eze!!!")
// }else{
//   alert("Datos incorrectos");
// }


 //***************CLASE 4*****************************
 //FUNCIONES:
 // function saludar(){
//   console.log("Hola");
// }
// saludar();

// function pedirDatos(){
//   let  nombre =prompt("ingrese el nombre");
//   alert(`Su nombre es ${nombre}`);
// }
// pedirDatos();

 // ************FUNCION CON PARAMETRO:****************

/* function saludar (saludo,nombre){
  console.log(`${saludo} ${nombre}`)
}
saludar("hola ", "ezequiel"); */

/* function enviarCorreo(correo){
  alert (`correo enviado a ${correo}`);
}

let correo = prompt("ingrese su correo para enviar la informacion: ");
enviarCorreo(correo);
 */

/* ****************EJEMPLO MUÑECO************************* */

/* function armar(material){
  return `muñeco armado con  ${material}`;
}

function pintar(munecoArmado){
  return `${munecoArmado} y pintado`;
}
function ropaBodega(munecoPintado){
  console.log (`${munecoPintado} vestido y enviado a bodega`);
}

let armado = armar ("madera");
let pintado = pintar (armado);
ropaBodega(pintado);  */

/* *******FIN EJEMPLO MUÑECO*************** */

/* *************** EJEMPLO DE CALCULADORA***************** */ 

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operación no identificada";
//       break;
//   }
// }

// let numeroUno = Number(prompt("Ingrese el número uno"));
// let numeroDos = Number(prompt("Ingrese el número dos"));

// let operacion = prompt("Ingrese la operación");

// let resultado = calculadora(numeroUno, numeroDos, operacion);

// alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);
// --------------------FIN EJEMPLO CALCULADORA--------------------------

/* *********************ARROW FUNCTION***************************** */

/* const suma =(num1,num2) => {
  return num1 + num2;
}
console.log (suma(5,10)); */

/* const saludar = nombre => {
  return `hola ${nombre}`;
}
console.log (saludar("camila")); */

/* const sumar = (num1,num2) => num1 + num2;

console.log(sumar (5,10));
 */
/* 
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = (precio) => precio * 0.21;

let precioProducto = 1000;
let descuento = 100; */

/* let precioProducto= prompt("ingrese el precio del producto");
let descuento= prompt ("ingrese el descuento"); */


// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)),descuento);
            /*   = resta(suma(1000, iva(1000)),100)
                  = resta (suma(1000,210)100)
                  =resta(1210,100)
                  =1110 */
//console.log(nuevoPrecio);

/* ********************ARRAYS*********************** */
//const nombres = ["eze","ali","alex","anto","ciro"];

/* console.log(nombres[2]); */
/* for(let index=0;index < 5; index++){
  console.log(nombres[index]);
} */

//const productos=["camisa","pantalon","gorra"];

/* console.log(productos);
console.log(productos.indexOf("camison")); */

/* ******PARA ELIMINAR UN NOMBRE DEL ARREGLO *********** */

/* const eliminarPorNombre = (nombre) => {
  let index = nombres.indexOf(nombre);

  if (index != -1){
    nombres.splice(index, 1);
    console.log(nombres);
  }
} 
eliminarPorNombre("ciro");
 */


/* ****************** FOR OF *********************** */

/* const producto = [
  { id:1 , nombre: "camisa", precio: 1000 },
  { id:2 , nombre: "gorra", precio: 750 },
  { id:3 , nombre: "zapato", precio: 377 },
  { id:4 , nombre: "media", precio: 150 },
]; */

/* for(const item of producto){
  console.log(producto);
  console.log(item.id);
  console.log(item.nombre);
  console.log(item.precio);
}
 */

// OTRA FORMA DE HACERLO:

/* class producto {
  constructor (nombre,precio){
    this.nombre = nombre;
    this.precio=precio;
  }
}

const productos = [];
productos.push(new producto("camisa", 1000));
productos.push(new producto("gorra", 700));
productos.push(new producto("media", 350));
productos.push(new producto("pantalon", 150));

console.log(productos);
 */

/* ****************** CLASE 7 ***************************** */

/*  function mayorQue(n){
  return (m) => m > n;
}

let mayorQueDiez = mayorQue(10); // (m) => m > 10;
console.log(mayorQueDiez(15)); // (15) => 15 > 10;
console.log(mayorQueDiez(5)); */

/* ******* EJEMPLO DE UN CARRO DE OPERACIONES ************ */

/* function operaciones(op){
  if(op === "sumar"){
    return (x, y) => x + y;
  }
  if(op === "restar"){
    return (x, y) => x - y;
  }
  if(op === "multiplicar"){
    return (x, y) => x * y;
  }
  if(op === "dividir"){
    return (x, y) => x / y;
  }
}

let sumar = operaciones ("sumar"); // (x,y) => x + y;
console.log(sumar(9,1));
let restar = operaciones ("restar"); // (x,y) => x - y;
console.log(restar(20,12));
let multiplicar = operaciones ("multiplicar"); // (x,y) => x * y;
console.log(multiplicar(5,5));
let dividir = operaciones ("dividir"); // (x,y) => x / y;
console.log(dividir(10,2)); */

/* ************** FIN EJEMPLO CARRO DE OPERACIONES ****************** */

/* function iterador(arreglo , funcion){
  for(const numero of arreglo){
    funcion(numero);
    //console.log(numero);
  }
}
 iterador([33,4,5,9], console.log);
 */
//-----------------
/*  function  mostrar(numero){
  console.log(`Hola soy ${numero}`);
}

function iterador(arreglo , funcion){
  for(const numero of arreglo){
  mostrar (numero);
  }
}
 iterador([33,4,5,9], mostrar)
 */
/* *******LO MISMO PERO CON NOMBRE *****************/
/*  function  mostrar(nombre){
  console.log(`Hola soy ${nombre}`);
}

function iterador(arreglo , funcion){
  for(const nombre of arreglo){
  mostrar (nombre);
  }
}
 iterador(["alex","eze","antoo","walooo"], mostrar); */

//---------------------------------------------

/* const productos = [
  { id:1 , nombre: "camisa", precio: 1000 },
  { id:2 , nombre: "gorra", precio: 750 },
  { id:3 , nombre: "zapato", precio: 377 },
  { id:4 , nombre: "media", precio: 150 },
]; */

//metodo forEach

/* productos.forEach(item => {
  console.log(item.nombre);
}); */


//metodo Find:

/* const encontrado = productos.find((item) => item.nombre ==="camisa");
console.log(encontrado);
 */
//otro metodo:

/* let nombre = prompt("ingrese el nombre del producto: ");

const producto = productos.find((item) => item.nombre === nombre);

if(producto){
  alert(`
    nombre: ${producto.nombre}
    precio: ${producto.precio}
  `);
}else{
  alert ("producto no encontrado")
};
 */
 
//metodo filter:

/* const filtrados = productos.filter((item) => item.precio > 500);
console.log(filtrados); */

//OTRA FORMA DE HACERLO:

/* let precio = Number(prompt("ingrese el precio minimo: "));

const filtrados =productos.filter((item) => item.precio > precio);

filtrados.forEach((producto) => {
  alert(`
    Nombre: ${producto.nombre}
    Precio: ${producto.precio}
    `);
});
 */

//MAP:

/* const nombre = productos.map((item) => item.nombre);
console.log(nombre);

const precios = productos.map((item) => item.precio);
console.log(precios) */

/* ******para realizar un descuento mapeando */

/* const descuento = productos.map((item) => {
  return {
    nombre: item.nombre,
    precio: item.precio - item.precio *0.21,
  };
}); */

/* console.log(descuento) */

//EJEMPLO PARA FILTRAR Y APLICAR DESCUENTO A LOS FILTRADOS NADA MAS

/* const filtrados = productos.filter((item) => item.precio > 500);

const descuento = filtrados.map((item) => {
  return {
    id: item.id,
    nombre: item.nombre,
    precio: item.precio - item.precio *0.21,
  };
});

console.log(descuento); */

//METODO REDUCE:  reduce un arreglo a un solo valor

/* const numeros = [4,5,6,8,10,12,16];

const total = numeros.reduce ((acum, item) => acum + item ,0);
console.log(total); */
 


const productos = [
  { id:1 , nombre: "camisa", precio: 1000 },
  { id:2 , nombre: "gorra", precio: 750 },
  { id:3 , nombre: "zapato", precio: 377 },
  { id:4 , nombre: "media", precio: 150 },
];

//RECORRE EL ARREGLO Y SUMA TODO EL CARRO DE COMPRAS EN UN SOLO PRECIO FINAL

/* const total = productos.reduce ((acum, item) => acum + item.precio ,0);
console.log(total); */
 
//SORT: ORDENA EL ARREGLO

//const numeros = [4,12,44,22,66,2,8,29];
/* 
console.log(numeros.sort((a,b) => a - b));

console.log(numeros.sort((a,b) => b - a)); */

const nombres= [
  {name: "ezequiel", edad: 29},
  {name: "alicia", edad: 66},
  {name: "antonella", edad: 27},
  {name: "walter", edad: 27},
];

/* console.log(
  nombres.sort((a, b) => {
    if(a.name > b.name){
      return -1;
    }
    if(a.name < b.name){
      return 1;
    }

    return 0;
  })
)
 */

// NUMERO MATH

//MAXIMO Y MINIMO

/* console.log(Math.max(1,5,8,12,44,66,77,99,12,35,6));
console.log(Math.min(1,5,8,12,44,66,77,99,12,35,6));
console.log(Math.max(1,5,8,12,44,Infinity,77,99,12,35,6));
console.log(Math.min(1,5,8,12,44, -Infinity,77,99,12,35,6));
 */

//redondeos
/* console.log(Math.ceil(3.12)); //aproxima al entero mas cercano hacia arriba
console.log(Math.floor(3.12));//aproxima al entero mas cercano hacia abajo
console.log(Math.round(3.7));//aproxima al entero mas cercano
console.log(Math.round(3.4));//aproxima al entero mas cercano
console.log(Math.sqrt(100));//aproxima al entero mas cercano */

//numeros aleatorios
/*console.log(Math.random());//numero aleatorio entre 0 y 1
console.log(Math.random() * 10);//numero aleatorio entre 0 y 10
console.log(Math.round(Math.random() *10));//numero aleatorio entre 0 y 1
*/

/*console.log(Math.round(Math.random() *26 + 27));//numero aleatorio entre 27 y 53
console.log(Math.round(Math.random() *39 + 54));//numero aleatorio entre 54 y 93
*/

//funcion que retorna numeros en este caso entre 20 y 25

/* const generarAleatorios = (amplitud , desplazamiento) =>{

  return Math.round(Math.random() *amplitud + desplazamiento)
};

console.log(generarAleatorios(5,20));
 */

//********FUNCION PARA GENERAR NOMBRES ALEATORIOS QUE YA ESTAN ESCRITOS *********** */

//***************FORMA 1:

/* const nombresAleatorios = ["alex","muzamba", "aliciaa", "ezee", "antoo", "cirooo", "walooo"];

const generarNombre = () =>{

  let index = Math.floor(Math.random() * nombresAleatorios.length);

  return nombresAleatorios[index]
};

console.log(generarNombre());
console.log(generarNombre());
console.log(generarNombre()); */


//*****************FORMA 2:

/* const nombresAleatorios = ["alex","muzamba", "aliciaa", "ezee", "antoo", "cirooo", "walooo"];

const generarAleatorios = (amplitud , desplazamiento) =>{

  return Math.floor(Math.random() *amplitud + desplazamiento);
};

const generarNombre = () =>{

  let index = generarAleatorios(nombresAleatorios.length , 0);

  return nombresAleatorios[index];
};
console.log(generarNombre());
console.log(generarNombre());
 */

 // *********************DATE***************

 //new Date(año,mes,dia,hora, minuto, segundo)
/* 
const navidad = new Date(2023,12,24,23,59,59);
console.log(navidad)
 */

//const hoy = new Date("octubre 22, 2023");

/* console.log(hoy.toDateString()); //sun oct 22 2023
console.log(hoy.toLocaleString()); // 22/10/2023, 00:00:00
console.log(hoy.toLocaleDateString());// 22/10/2023
console.log(hoy.toTimeString()); // 00:00:00 GMT-0300 (hora estandar de argentina) */

//datos especificos:

/* console.log(hoy.getFullYear()); //AÑO
console.log(hoy.getMonth()); //MES
console.log(hoy.getDay()); //DIA DE LA SEMANA (LUNES ES 1) 
console.log(hoy.getDate()); //DIA DEL MES */



//*****FUNCION QUE RETORNA EL MES AÑO Y DIA

/* const obtenerFecha = (ano,mes,dia) => {
  return new Date(ano, mes-1, dia);
};

console.log(obtenerFecha(2023 , 10 , 22)); */


//******RESTA DE DOS FECHAS: TIEMPO EN DIAS TOTAL DE DIFERENCIA

/* const papaNoel = new Date("December 24, 2023");

const ahora= new Date("october 22, 2023");

console.log(papaNoel - ahora);

const miliSegundosPorDia = 86400000;

console.log((papaNoel - ahora)/miliSegundosPorDia); */




























/* ***************EJEMPLO ROPA ******************** */
/* let opcion= prompt(`
ingrese la opcion requerida:

1. Ropa de Mujer.

2. Ropa de Hombre.

3. Ropa de niño.
`); */
/* while (opcion != "salir"){
  switch(opcion){
    case "1":
      alert(`Tenemos camisas y pantalones`)
      break;
    case "2":
      alert (`tenemos zapatos y pantalones`)
      break;
    case "3":
      alert(`tenemos ropa con dibujitos!!!`)
      break;
    default:
      alert(`opcion incorrecta!!!, porfavor vuelva a intentarlo.`)
      break;
  };
  opcion = prompt(`
  ingrese la opcion requerida:

  1. Ropa de Mujer.

  2. Ropa de Hombre.

  3. Ropa de niño.
  `);
} */
/* ************************FIN EJEMPLO ROPÁ *************************** */










/* ********************TRABAJO 1 PARTES-******************************* */

/* 
while (opcion === undefined|| opcion.toLocaleLowerCase() !== "salir") {
  opcion = prompt(`
  ingrese su edad:

  1. menor de 12 años.

  2. entre 13 y 17 años.

  3. ente 18 y 21 años.

  4. 22 años o mas.
  
  Salir para salir del programa
  `);

  if(opcion.toLocaleLowerCase() === "salir"){
    break;
  }

  switch (opcion) {
    case "1":
      alert("seleccione que juego quiere jugar en las siguientes opciones");
        juego1 = prompt(`
        1. Talking Tom: ¡A por el oro!.

        2. Stumble guys.

        3. Clash Royale.
        `);
        switch(juego1){
          case "1":
            alert ("eligio: Talking Tom: ¡A por el oro!");
            break;
          case "2":
            alert ("Eligio: Stumble guys.");
            break;
          case "3":
            alert ("Eligio: clash Royale");
            break;
          default:
            alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
            juego1();
        }
      
      
      switch (juego1) {
        case "1":
          alert("a continuacion elija la dificultad:");
          juego1();
          obtenerDificultad();
          edadJugador = "menor de 12 años";
          juegoElegido = juego1;
          break;
        case "2":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        case "3":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          
          break;
        default:
          alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
          obtenerDificultad();
          break;
      }
      break;
    case "2":
      alert("seleccione que juego quiere jugar en las siguientes opciones");
      juego2();
      switch (juego2) {
        case "1":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        case "2":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        case "3":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        default:
          alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
          break;
      }
      break;
    case "3":
      alert("seleccione que juego quiere jugar en las siguientes opciones");
      juego3();
      switch (juego3) {
        case "1":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        case "2":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        case "3":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        default:
          alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
          break;
      }
      break;
    case "4":
      alert("seleccione que juego quiere jugar en las siguientes opciones");
      juego4();
      
      switch (juego4) {
        case "1":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        case "2":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        case "3":
          alert("a continuacion elija la dificultad:");
          obtenerDificultad();
          break;
        default:
          alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
          break;
      }
      break;
    default:
      alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
      break;
  }
}

alert(`
Nombre: ${jugador};

Edad: ${edad};

Juego elegido: ${juegoElegido};

Dificultad: ${nivelDificultad};

`);
 */