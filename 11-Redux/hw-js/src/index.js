const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento,incrementoImp, incrementoAsync } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
console.log(contador)
var store = createStore(contador)// se debe llamar el createStore con el reducer
// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor');
// este dato se obtiene del la etiqueta que contiene el Id="valor" del HTLM, accediendo al DOM con getElmentById
// en este caso me va a traer 0

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const state = store.getState() // este me va a traer el estado inicial, realmente viene de state = initiaState
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.textContent = state.contador  
}

// Ejecutamos la funcion 'renderContador':



// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(() => {
  console.log('Subscription: ', store.getState());
  renderContador();
});


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

document.getElementById("incremento").onclick = () => store.dispatch(incremento());
document.getElementById("decremento").onclick = () => store.dispatch(decremento());
document.getElementById("incrementoImpar").onclick = () => store.dispatch(incrementoImp());
document.getElementById('incrementoAsync').onClick = () => 
  setTimeout(() => {
		store.dispatch(incrementoAsync())
  }, 3000);