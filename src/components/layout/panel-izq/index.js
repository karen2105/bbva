import React from 'react';
import Check from '@/assets/images/check.svg';

const PanelIzq = ({data, paso}) => {

  const pasoFuturoDetalles = (
    paso < data.length ?
    <div className="paso-futuro">
      <Check className="paso-check"/>
      <div className="contador">
        Paso {paso + 1} de {data.length}
      </div>
      <div className="titulo">
        {data[paso].titulo}
      </div>
    </div>
    :
    <button className="primary-btn" disabled>
      Finalizar
    </button>
  );

  return(
    <div className="panel-izquierdo">
      <div className="paso-actual">
        <Check className="paso-check" />
        <div className="contador">
          Paso {paso} de {data.length}
        </div>
        <div className="titulo">
          {data[paso - 1].titulo}
        </div>
        <p>
          {data[paso  - 1].detalle}
        </p>
      </div>
      {pasoFuturoDetalles}
    </div>
  );
}

export default PanelIzq;
