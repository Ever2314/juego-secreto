//let titulo = document.querySelector('h1');
//titulo.innerHTML='Juego del numero secreto';

//let parrafo= document.querySelector('p')
//parrafo.innerHTML='Indica un numero del 1 al 10';

let numerosecreto= 0;
let intentos= 0;
let listaNumerosSorteados=[];  
let numeroMaximo= 10;

function asignartextoelemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML=texto;
return;

}
//function intentoDeUsuario(){
  //  alert('click desde el boton');
    //return;
//}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
   if ( numeroDeUsuario === numerosecreto){
    asignartextoelemento( 'p', `Acertaste el numero en ${intentos} ${(intentos ===1)? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

   } else {
    // el usuario no acerto
     if( numeroDeUsuario> numerosecreto){
        asignartextoelemento( 'p', ' El numero secreto es menor');

     } else {
        asignartextoelemento( 'p', 'El numero secreto es mayor');
     }
     intentos++;
     limpiarcaja();

   }
    
    return;
}
function limpiarcaja(){
    document.querySelector('#valorUsuario').value='';

}


function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if( listaNumerosSorteados.length == numeroMaximo){
        asignartextoelemento('p', 'Ya se sortearon todos los numeros');
    } else {
    //si el nuemero esta incluido en lista
    if( listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
}
}
function condicionesiniciales(){
    asignartextoelemento('h1','juego del secreto');
    asignartextoelemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numerosecreto= generarNumeroSecreto();
    intentos=1;
}

function reiniciarjuego(){
    //limpiar caja
    limpiarcaja();
    // indicar mensaje de intervalo de numeros
    //generar numero aletorio
    //inicializar el numero de intento
    condicionesiniciales();
    //deshabilitar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesiniciales();
