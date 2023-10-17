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

const productos = [
  { id:1 , nombre: "camisa", precio: 1000 },
  { id:2 , nombre: "gorra", precio: 750 },
  { id:3 , nombre: "zapato", precio: 377 },
  { id:4 , nombre: "media", precio: 150 },
];

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

let precio = Number(prompt("ingrese el precio minimo: "));

const filtrados =productos.filter((item) => item.precio > precio);

filtrados.forEach((producto) => {
  alert(`
    Nombre: ${producto.nombre}
    Precio: ${producto.precio}
    `);
});




































 
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