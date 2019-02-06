import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import * as actionType from '@/constants/cambiar-paso';

const initialState1 = Map({
  paso: 1,
});

const initialState2 = Map({
  certificado: '1. Básico',
});

function paso(state = initialState1, action) {
  switch(action.type) {
    case actionType.SET_PASO:
      return state.set('paso', action.paso);
    default:
      return state;
  }
};

function certificado(state = initialState2, action) {
  switch(action.type) {
    case actionType.SET_CERTIFICADO:
      return state.set('certificado', action.certificado);
    default:
      return state;
  }
};


const appReducer = combineReducers({estado: paso, selecciones: certificado});

export default appReducer;