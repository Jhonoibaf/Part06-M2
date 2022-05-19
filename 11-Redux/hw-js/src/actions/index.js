const { INCREMENTO, DECREMENTO,INCREIMP, ASYNC } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = function(){
  return{
    type: INCREMENTO
  }
};

const decremento = function(){
  return{
    type: DECREMENTO
  }
};

const incrementoImp = function(){
  return{
    type: INCREIMP
  }
};

const incrementoAsync = function(){
  return{
    type: ASYNC
  }
};

// Desde JS, lanzamos acciones para utilizar en el reducer a travez de las action creator.

module.exports = {
  incremento,
  decremento,
  incrementoImp,
  incrementoAsync,
}