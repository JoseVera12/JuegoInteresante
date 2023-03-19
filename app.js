//identifico la etiqueta main y coloco el flexbox
let main = document.getElementsByTagName("main")[0];
let body = document.getElementsByTagName("body")[0];

//creamos el inicio del tablero
body.addEventListener("load", pintarTablero());

var div;
let numFilas = 10;
let numColumnas = 10;


function pintarTablero() {//bucle para crear filas y columnas
    let posicionObjetivo = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    let posicionInicio = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    let posicionInicio2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    console.log("has hecho click");
    for (let i = 0; i < 10; i++) {//se podria hacer una variable que fuese numFilas= 10 y aqui poner i <numFilas
        for (let j = 0; j < 10; j++) {
            div = document.createElement("div");
            div.classList.add("card");
            main.appendChild(div);
            //asigno la fila y la columna como clase en mi div
            div.classList.add(i + 'f');
            div.classList.add(j + 'c');
            //color de fondo para los divs
            if (i == posicionObjetivo[0] && j == posicionObjetivo[1]) {
                div.classList.add("objetivo");
                console.log(div.classList);
                console.log("Estamos en la fila" + parseInt(div.classList[1]));
                console.log("Estamos en la columna" + parseInt(div.classList[2]));
            }
            if (i == posicionInicio[0] && j == posicionInicio[1]) {
                div.classList.add("actual");
                console.log(div.classList);
                console.log("Estamos en la fila" + parseInt(div.classList[1]));
                console.log("Estamos en la columna" + parseInt(div.classList[2]));
            }
            if (i == posicionInicio2[0] && j == posicionInicio2[1]) {
                div.classList.add("actual2");
                console.log(div.classList);
                console.log("Estamos en la fila" + parseInt(div.classList[1]));
                console.log("Estamos en la columna" + parseInt(div.classList[2]));
            }
        }
    }
}



//evento para cualquier evento de tecla para poder mover la casilla
//donde:   el evento lo aplico sobre todo el documento
//evento:  el evento elegido es keydown
//funcion:  la funcion elegida es mover
//relacion evento, funcion y lugar : el metodo elegido es addEventListener

//creamos un evento de respuesta del teclado
document.addEventListener("keydown", mover);

//esta funcion mover recibe por parametro una cosa que va a ser el objeto event
//@param(Object) event info sobre el evento que se ha ejecutado

let numeroNuevo;

function mover(event) {
    //identificamoscon el objeto keyboardevent cual es la tecla que estoy pulsando
    console.log(event['key']);

    let actual = document.getElementsByClassName('actual')[0];
    let actual2 = document.getElementsByClassName('actual2')[0];
    let objetivo = document.getElementsByClassName('objetivo')[0];
    let filaActual = parseInt(actual.classList[1]);
    let columnaActual = parseInt(actual.classList[2]);
    let filaActual2 = parseInt(actual2.classList[1]);
    let columnaActual2 = parseInt(actual2.classList[2]);
    let contadorJugador1=0;
    let contadorJugador2=0;
    let contador1;
    let contador2;

    //con estos if lo que hacemos es mostrar por pantalla quien es el ganador y actuaizar el contador
    if (filaActual == parseInt(objetivo.classList[1]) && columnaActual === parseInt(objetivo.classList[2])) {
        alert("¡Jugador 1 ha ganado!");
        contadorJugador1++;
        contador1= document.getElementsByClassName('contador1')[0];
        contador1.textContent=`contadorJugador1:${contadorJugador1} `;
        contador1.style.fontSize ="25px";
        contador1.style.paddingLeft ="70px";
        contador1.style.paddingRight ="70px";
        removeEventListener(mover);
    }
    
    if (filaActual2 == parseInt(objetivo.classList[1]) && columnaActual2 === parseInt(objetivo.classList[2])) {
        alert("¡Jugador 2 ha ganado!");
        contadorJugador2++;
        contador2= document.getElementsByClassName('contador2')[0];
        contador2.textContent=`contadorJugador2:${contadorJugador2} `;
        contador2.style.fontSize ="25px";
        contador2.style.paddingLeft ="70px";
        contador2.style.paddingRight ="70px";
        remove.removeEventListener(mover);
    }

    //switch para los movimientos.
    switch (event['key']) {
        case 'ArrowUp':
            console.log("has pulsado la tecla hacia arriba");
            if (filaActual > 0) {
                actual.classList.remove('actual');
                let nuevaPosicion = document.getElementsByClassName((filaActual - 1) + 'f ' + columnaActual + 'c')[0];
                nuevaPosicion.classList.add('actual');
            }
            break;
        case 'ArrowDown':
            console.log("has pulsado la tecla hacia abajo");
            if (filaActual < numFilas - 1) {
                actual.classList.remove('actual');
                let nuevaPosicion = document.getElementsByClassName((filaActual + 1) + 'f ' + columnaActual + 'c')[0];
                nuevaPosicion.classList.add('actual');
            }
            break;
        case 'ArrowLeft':
            console.log("has pulsado la tecla hacia la izquierda");
            if (columnaActual > 0) {
                actual.classList.remove('actual');
                let nuevaPosicion = document.getElementsByClassName(filaActual + 'f ' + (columnaActual - 1) + 'c')[0];
                nuevaPosicion.classList.add('actual');
            }
            break;
        case 'ArrowRight':
            console.log("has pulsado la tecla hacia la derecha");
            if (columnaActual < numColumnas - 1) {
                actual.classList.remove('actual');
                let nuevaPosicion = document.getElementsByClassName(filaActual + 'f ' + (columnaActual + 1) + 'c')[0];
                nuevaPosicion.classList.add('actual');
            }
            break;
        case 'w':
            console.log("has pulsado la tecla 'w'");
            if (filaActual2 > 0) {
                actual2.classList.remove('actual2');
                let nuevaPosicion = document.getElementsByClassName((filaActual2 - 1) + 'f ' + columnaActual2 + 'c')[0];
                nuevaPosicion.classList.add('actual2');
            }
            break;
        case 's':
            console.log("has pulsado la tecla 's'");
            if (filaActual2 < numFilas - 1) {
                actual2.classList.remove('actual2');
                let nuevaPosicion = document.getElementsByClassName((filaActual2 + 1) + 'f ' + columnaActual2 + 'c')[0];
                nuevaPosicion.classList.add('actual2');
            }
            break;
        case 'a':
            console.log("has pulsado la tecla 'a'");
            if (columnaActual2 > 0) {
                actual2.classList.remove('actual2');
                let nuevaPosicion = document.getElementsByClassName(filaActual2 + 'f ' + (columnaActual2 - 1) + 'c')[0];
                nuevaPosicion.classList.add('actual2');
            }
            break;
        case 'd':
            console.log("has pulsado la tecla 'd'");
            if (columnaActual2 < numColumnas - 1) {
                actual2.classList.remove('actual2');
                let nuevaPosicion = document.getElementsByClassName(filaActual2 + 'f ' + (columnaActual2 + 1) + 'c')[0];
                nuevaPosicion.classList.add('actual2');
            }
            break;
        default:
            console.log("Tecla no válida");
    }
}





/*creamos dos clases distintias 
    -objetivo:      corresponde al punto donde tengo que llegar
    -actual:            correponde al punto actual
*/


/*En cada div necesitamos tener el valor de cada fila y cada columna en la clase
para ello lo que tengo es que introducir la i y la j en la funcion quee crea el tablero (i es fila j es columna) 
para recoger estas filas y columnas de cada div, utilizamos classlist para recoger el valor
para mover las casillas compruebo el valor de estas filas y columnas y opero*/

/*PENDIENTE:
Mover casillas
que hago con los limites de la pantalla
Opcional: colision entre dos jugadores, no sabemos hacerlo
Que hago cuando gano
Contador cuando gano
Boton reinicio para ejecutar de nuevo con la funcion inicio.
Una vez llegue a la meta el otro no puede llegar(quitar el evento cuando hay un ganador)
CSS bien
*/