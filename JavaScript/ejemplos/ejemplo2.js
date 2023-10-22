/* let inicio = alert(" Bienvenidos al incio del juego");
let inicio2 = alert(`a continuacion, vera una serie de preguntas para 
orientarlo a que juego seria el adecuado para usted`);
let incio3= alert(`Porfavor, preste mucha atencion!!!  
Si usted desea salir del juego escriba la palabra "salir"`);
let inicio4= alert(` ahora si, comenzemos!!`);
 */

/* (nombre === "EZE" || nombre === "eze" || nombre ==="alex" || nombre === "ALEX") && 
(apellido === "MUZABER" || apellido ==="muzaber") */
/* PODRIA CREAR UNA VARIABLE QUE SUME EL NUMERO DE JUGADOR, 
LO ALMACENE Y LO MUESTRE */
/* let nombre, apellido;
let datosCorrectos = false;
let jugador;
while (!datosCorrectos) {
  nombre = prompt("Porfavor ingrese su nombre: ");
  apellido = prompt("ingrese su apellido: ");

  if (nombre !== "" && apellido !== "") {
    datosCorrectos = true;
    jugador = nombre + " " + apellido;
    alert(`Hola, ${jugador}, le damos la bienvenida!!`);
  } else {
    alert(
      "Datos incorrectos. Por favor, ingrese su nombre y apellido nuevamente."
    );
  }
} */

let opcion;
let edadJugador;
let juegoElegido;
let nivelDificultad;

//-----------FUNCIONES--------------
/* function obtenerDificultad() {
  let dificultad = prompt(`
  1. Facil
  2. Medio
  3. Dificil
  `);
  switch (dificultad) {
    case "1":
      alert("Dificultad: FACIL");
      break;
    case "2":
      alert("Dificultad: MEDIO");
      break;
    case "3":
      alert("Dificultad: DIFICIL");
      break;
    default:
      alert("Dificultad incorreta. Vuelva a intentarlo");
      obtenerDificultad();
  }
} */

/* function obtenerJuego1() {
  switch (juego1) {
    case "1":
      alert("Eligio: Talking Tom: ¡A por el oro!");
      break;
    case "2":
      alert("Eligio: Stumble guys.");
      break;
    case "3":
      alert("Eligio: clash Royale");
      break;
    default:
      alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
      obtenerJuego1();
      break;
  }
}
function juego2() {
  juego2 = prompt(`
    1. Battle royale.

    2.Fornite.

    3. pokemon GO.
  `);
}
function juego3() {
  juego3 = prompt(`
    1. Star Wars: Knights of the Old Republic.

    2. GTA IV.

    3. Candy Crush.
  `);
} */
/* function juego4() {
  juego4 = prompt(`
    1. World of warships.

    2. Call of Duty Warzone.

    3. Black Desert Online.
  `);
} */
/* revisar que empieza de vuelta osea pide muchos jugadores, hay que buscar un freno.
tendria que a lo ultimo mostrar lo que eligio el jugador */
while (opcion === undefined || opcion.toLocaleLowerCase() !== "salir") {
  opcion = prompt(`
  ingrese su edad:

  1. menor de 12 años.

  2. entre 13 y 17 años.

  3. ente 18 y 21 años.

  4. 22 años o mas.
  
  Salir para salir del programa
  `);

  if (opcion.toLocaleLowerCase() === "salir") {
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
      obtenerJuego1();

      switch (dificultad) {
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
          obtenerDificultad();
          break;
      }
      break;
    case "2":
      alert("seleccione que juego quiere jugar en las siguientes opciones");
      juego2();
      
      switch (dificultad) {
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

      switch (dificultad) {
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

      switch (dificultad) {
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
/* alert(`
Nombre: ${jugador};

Edad: ${edad};

Juego elegido: ${juegoElegido};

Dificultad: ${nivelDificultad};

`); */

/* NECESITO UNA CREAR UNA VARIABLE QUE ALMACENE 
LOS DATOS DEL JUGADOR CUANDO TERMINEN TODAS LAS PREGUNTAS!!  */
