import React from 'react';
import SeleccionProducto from '@/components/seleccion-producto';
import SeleccionCertificado from '@/components/seleccion-certificado';
import Confirmacion from '@/components/confirmacion';
import Descarga from '@/components/descarga';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';


function getVista(paso, certificado) {
  switch(paso) {
    case 1:
      return <SeleccionProducto paso={paso}/>;
    case 2:
      return <SeleccionCertificado paso={paso}/>;
    case 3:
      return <Confirmacion certificado={certificado} paso={paso}/>;
    case 4:
      return <Descarga />;
    default:
      return <SeleccionProducto paso={paso}/>;

  }
}

const Contenido = ({paso, certificado}) => {
  return(
    <div className="tipo-producto">

        <CSSTransition
          key="page" 
          classNames="fade"
          appear={true}
          timeout={500}
        >
            {getVista(paso, certificado)}
        </CSSTransition>
    </div>
  );
}

export default Contenido;