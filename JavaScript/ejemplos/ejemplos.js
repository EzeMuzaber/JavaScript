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

// function saludar(){
//   console.log("Hola");
// }

// saludar();

// function pedirDatos(){
//   let  nombre =prompt("ingrese el nombre");
//   alert(`Su nombre es ${nombre}`);
// }
// pedirDatos();

//  EJEMPLO DE CALCULADORA

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

let opcion= prompt(`
ingrese la opcion requerida:

1. Ropa de Mujer.

2. Ropa de Hombre.

3. Ropa de niño.
`);
while (opcion != "salir"){
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
}

