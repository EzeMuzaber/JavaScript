let nombre, apellido;
let datosCorrectos = false;
let jugador;
let opcion;
let edadSeleccionada = "";
let juegoSeleccionado = "";
let dificultadSeleccionada = "";

/* let inicio = alert(" Bienvenidos al inicio del juego");
let inicio2 = alert(`a continuacion, vera una serie de preguntas para 
orientarlo a que juego seria el adecuado para usted`);
let incio3= alert(`Porfavor, preste mucha atencion!!!  
Si usted desea salir del juego escriba la palabra "salir"`);
let inicio4= alert(` ahora si, comenzemos!!`); */

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
}
/* ACA TENDRIA QUE IR UNA OPCION QUE NOS DIGA 
SI QUEREMOS VER LOS JUEGOS O SI QUEREMOS COMPRAR,
SEGUN LA OPCION ES PARA DONDE VA.
SI EL USUARIO VA A COMPRAR:
PODER PONER UNA OPCION CON LO QUE HAY Y EL PRECIO 
Y QUE TAMBIEN LO PUEDA BUSCAR SI DESEA

 */
while (opcionPrincipal.toLowerCase() !== "salir" ){
    
    opcionPrincipal= prompt (`
    que desea hacer?

    a: Buscar un producto.

    b: Realizar una compra.

    c: ver los juegos segun edades.

    `)

    switch(opcionPrincipal){
        case "a":
            nombreProducto = prompt("ingrese el producto a buscar: ");
            
            let productos = [
                { id: 1, nombre: "Fornite", precio: 1500 },
                { id: 2, nombre: "Pokemon GO", precio: 2200 },
                { id: 3, nombre: "Clash royale", precio: 950 },
                { id: 4, nombre: "battle royale", precio: 920 },
                { id: 5, nombre: "Star wars: knights of the old republic", precio: 2500 },
                { id: 6, nombre: "GTA IV", precio: 4000 },
                { id: 7, nombre: "Candy crush", precio: 1100 },
            ];
            while (productos != "salir") {
                let producto = encontrarProductos(nombre);
                mostrarProducto(producto);

                nombreProducto = prompt("ingrese el producto a buscar: ");
            };
    }
}


while (opcion === undefined || opcion.toLocaleLowerCase() != "salir") {

    opcion = prompt(`
        ingrese su edad:

        1. menor de 12 años.

        2. entre 13 y 18 años.

        3. 19 años o mas.
        
        Escriba "salir" para salir del programa
    `);
    switch (opcion) {
        case "1":
            edadSeleccionada = "Menor de 12 años";
            juegoSeleccionado = solicitarOpcion1();

            alert("a continuacion elija la dificultad:");
            dificultadSeleccionada = obtenerDificultad();
            break;
        case "2":
            edadSeleccionada = "Entre 13 y 18 años";
            juegoSeleccionado = solicitarOpcion2();

            alert("a continuacion elija la dificultad:");
            dificultadSeleccionada = obtenerDificultad();
            break;
        case "3":
            edadSeleccionada = "19 años o  mas"
            juegoSeleccionado = solicitarOpcion3();

            alert("a continuacion elija la dificultad:");
            dificultadSeleccionada = obtenerDificultad();
            break;

        case "salir":
            alert("Saliendo del programa. ¡Hasta luego!");
            break;

        default:
            alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
            break;
        }
        
        alert(`
        Nombre: ${jugador};

        Edad: ${edadSeleccionada};

        Juego elegido: ${juegoSeleccionado};

        Dificultad: ${dificultadSeleccionada};
        `);
        juegoSeleccionado = "";
    
    }
    if (opcion.toLocaleLowerCase() !== "salir") {
            
        }

    /* --------------------   FUNCIONES  ----------------------------------*/
    
    const mostrarProducto = (producto) => {
        if (producto) {
            alert(`
        Id: ${producto.id}.
        Nombre: ${producto.nombre}.
        Precio: $${producto.precio}. 
        `);
        } else {
            alert("Producto no encontrado");
        }
    
    };
    
    const encontrarProductos = nombre => {
        return productos.find(item => item.nombre === nombre);
    };
    
    
    
    
    
    function solicitarOpcion1() {
        let opcion1 = prompt(`seleccione el juego en las opciones: 

        1. Talking Tom: ¡A por el oro!.

        2. Stumble guys.

        3. Clash Royale.
        ` );
        switch (opcion1) {
            case "1":
                return "Talking Tom: ¡A por el oro!";
            case "2":
                return "Stumble guys";
            case "3":
                return "Clash Royale";
            default:
                alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
                solicitarOpcion1();
                break;
        }
    }
    function solicitarOpcion2() {
        let opcion2 = prompt(`
        1. Battle royale.

        2.Fornite.

        3. pokemon GO.
        `);
        switch (opcion2) {
            case "1":
                return "Battle royale";
            case "2":
                return "Fornite";

            case "3":
                return "Pokemon GO";
            default:
                alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
                solicitarOpcion2();
                break;

        }
    }
    
    function solicitarOpcion3() {
        let opcion3 = prompt(`
        1. Star Wars: Knights of the Old Republic.

        2. GTA IV.

        3. Candy Crush.
        `);
        switch (opcion3) {
            case "1":
                return "Star Wars: Knights of the Old Republic";

            case "2":
                return "GTA IV";

            case "3":
                return "Candy Crush";

            default:
                alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
                solicitarOpcion3();
                break;
        }
    }
    function obtenerDificultad() {
        let dificultad = prompt(`
        1. Facil
        2. Medio
        3. Dificil
        `);
        switch (dificultad) {
            case "1":
                return "FACIL";
            case "2":
                return "MEDIO";
            case "3":
                return "DIFICIL";
            default:
                alert("Dificultad incorreta. Vuelva a intentarlo");
                obtenerDificultad();
                break;
        }
    }

