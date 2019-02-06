import React from 'react';
import Cross from '@/assets/images/cross.svg';

const Dialog = ({onClose}) => {
  return(
    <div className="dialog-background">
      <div className="dialog-body">
        <div className="header">
          <h1>Certificado tipo X</h1>
          <Cross className="close-dialog" onClick={(e)=> onClose()}/>
        </div>
        <div className="dialog-content"/>
      </div>
    </div>
  );
}

export default Dialog;