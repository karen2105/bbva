import React from 'react';
import BBVALogo from '@/assets/images/logo_bbva_v1.svg';

const Header = ({infoProducto, paso}) => {
  return(
    <div className="header">
      {
        paso !== 1 && paso !== 4 ? 
        <div className="header-info-producto">
          <span className="info-producto-nombre"><strong>{infoProducto.nombre}</strong></span>
          <span>Saldo disponible: <strong>{infoProducto.saldo}</strong></span>
        </div>
        : null
      }
      <div className="header-titulo">
        <strong>Generación de certificados</strong>
      </div>
      {paso === 1 && paso === 4 ? <BBVALogo className="header-logo" /> : null}
    </div>
  );
}

export default Header;