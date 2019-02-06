import React from 'react';
import store from '@/store';
import { cambiarPaso, setCertificado } from '@/actions/cambiar-paso';
import Cross from '@/assets/images/cross.svg';

function handleClick(paso, certificado) {
  store.dispatch(cambiarPaso(paso))

  if(certificado) {
    store.dispatch(setCertificado(certificado));
  }
}

const Botones = ({disabled, paso, certificado}) => {
  return(
    <div className="seleccion-botones">
      <button className="btn-cancelar" onClick={(e)=> handleClick(1)}>
        <Cross />
        Cancelar
      </button>
      <button
        className="primary-btn"
        onClick={(e)=> handleClick(paso + 1, certificado)}
        disabled={disabled}>
        Continuar
      </button>
    </div>
  );
}

export default Botones;
