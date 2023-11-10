//declaracion de variables

let datosCorrectos = false;
let jugador;
let opcionElemento;

//funcion para mostrar mensajes en el DOM

const mensajeUsuario = mensaje => {
    const arranque =document.getElementById("arranque");
    arranque.innerHTML = mensaje;
};

//funcion para manejar el inicio de la aplicacion:

const inicioPrograma = () => {
    if(!datosCorrectos){
        const nombreInput = document.getElementById("nombre");
        const apellidoInput = document.getElementById("apellido");

        jugador = nombreInput.value !== "" && apellidoInput.value !== ""
        ?(datosCorrectos = true, mensajeUsuario(`Hola, ${jugador}, le damos la bienvenida!!!!`),inicioMenu())
        :mensajeUsuario("Datos incorrectos. por favor, ingrese su nombre y su apellido nuevamente.");

        
        localStorage.setItem("nombreJugador",jugador);
        /*jugador = nombreInput.value + " " + apellidoInput.value;

        if(nombreInput.value !== "" && apellidoInput.value !== ""){
            datosCorrectos=true;
            mensajeUsuario(`Hola, ${jugador}, le damos la bienvenida!!!!`);
            inicioMenu();
        }else{
            mensajeUsuario("Datos incorrectos. por favor, ingrese su nombre y su apellido nuevamente.");
        } */
    }
};

//mostrar el menu principal:
const inicioMenu = () => {
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
}