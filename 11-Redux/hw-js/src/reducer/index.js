const { INCREMENTO, DECREMENTO, INCREIMP, ASYNC } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

const contador = (state = initialState, action) => {
  // podemos usar condicionales if o podemos usar switch
  // el contador debera siempre retornar un objeto, ese objeto va a ser nuestro nuevo estado
  // contador va a actuar como reducer:
  console.log(state , action)
  switch(action.type){
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + 1
    };
    case DECREMENTO: 
      return {
        ...state,
        contador: state.contador - 1
    };
    case INCREIMP:
      return{
        ...state,
        contador: state.contador%2 === 1? state.contador + 2: state.contador
      };
    case ASYNC:
      return{
        ...state,
        contador: state.contador +1
      }
      default:
          return state
      };
}

module.exports= contador