import React from 'react';
import store from '@/store';
import { cambiarPaso } from '@/actions/cambiar-paso';
import Lapiz from '@/assets/images/lapiz.svg';
import Botones from '@/assets/botones';

function handleEdit() {
  store.dispatch(cambiarPaso(2))
}

const Confirmacion = ({certificado, paso}) => {
  return(
    <div className="seleccion-certificado">
      <h2 className="contenido-titulo">
        Revisa los detalles del proceso y confirma la operación
      </h2>
      <p className="contenido-descripcion">
        Haciendo clic en el ícono "editar", podrás editar el grupo de datos seleccionado.      
      </p> 
      <div className="opciones">
        <ul>
          <li>
            <div className="tabla-confirmacion">
              <span className="titulo">Tipo de certificado</span>
              <span className="seleccion">{certificado}</span>
              <button className="balloon-wrapper" onClick={(e) => handleEdit()}>
                <Lapiz className="edit" />
                <div className="balloon">
                  Edit
                </div>
              </button>
            </div>
            <div className="tabla-confirmacion">
              <span className="titulo">Costo</span>
              <span className="seleccion">Sin costo</span>
            </div>
          </li>
        </ul>
      </div>
      <Botones disabled={false} paso={paso} certificado={null}/> 
    </div>
  );
}

export default Confirmacion;