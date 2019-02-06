import React from 'react';
import store from '@/store';
import { cambiarPaso } from '@/actions/cambiar-paso';
import Warning from '@/assets/images/warning.svg';
import Download from '@/assets/images/download.svg';

function handleDescarga() {
  window.confirm('Descargando');
}

const Certificado = ({}) => {
  return(
    <div className="descarga">
      <div className="descarga-wrapper">
        <button className="primary-btn" onClick={(e)=> handleDescarga()}>
          Descargar certificado aquí
        </button>
        <div className="warning">
          <Warning />
          <span>La clave para abrir tu certificado es el número de tu documento de identidad</span>
        </div>
      </div>

      <div className="zona-descarga">
        <Download onClick={(e)=> store.dispatch(cambiarPaso(1))}/>
        Descargar otro tipo de certificado
      </div>

      <div className="info">
        No tenemos registrado tu correo electrónico para enviarte una copia de este certificado.
        Para registrarlo ingresa, en la parte superior de esta página a:
        <strong>Mi Perfil > Editar mi perfil > Registrar correo.</strong>
      </div>
    </div>
  );
}

export default Certificado;