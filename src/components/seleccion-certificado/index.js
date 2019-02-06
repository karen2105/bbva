import React from 'react';
import Papel from '@/assets/images/papel.svg';
import RadioOn from '@/assets/images/radio-on.svg';
import RadioOff from '@/assets/images/radio-off.svg';
import Botones from '@/assets/botones';
import Dialog from '@/assets/dialog';

export default class SeleccionProducto extends React.Component {
   constructor(props) {
    super(props);

    this.state = { 
      certSeleccionado: null,
      detalleSeleccionado: null,
      deshabilitarBoton: true,
      dialog: false,
    };

    this.getRadio = this.getRadio.bind(this);
    this.getList = this.getList.bind(this);
    this.displayDialogo = this.displayDialogo.bind(this);
    this.handleCertificados = this.handleCertificados.bind(this);
  }

  getList(tipo, detalle, idRadio, descripcion){
    return (
      <li id={idRadio} onClick={(e) => this.handleCertificados(e, detalle)}>
      <Papel className="svg-list"/>
      <div className="certificado-nombre">
        {tipo}
        <strong>{detalle}</strong>
        {descripcion ? <p>{descripcion}</p> : null}
        <button 
          className="btn-ver-mas" 
          onClick={(e)=> this.displayDialogo()}
        >
          ver modelo >
        </button>
        {this.state.dialog ? <Dialog onClose={(e) => this.displayDialogo()} /> : null}
      </div>
      {this.getRadio(idRadio)}
    </li>
    );
  }

  displayDialogo(){
    this.setState({
      dialog: !this.state.dialog,
    });
  }

  handleCertificados(e, detalle) {
    this.setState({
      certSeleccionado: e.currentTarget.id,
      deshabilitarBoton: false,
      detalleSeleccionado: detalle,
    });
  }

  getRadio(opcionSeleccionada) {
    if(this.state.certSeleccionado === opcionSeleccionada){
      return <RadioOn className="radio"/>
    }
    return <RadioOff className="radio"/>
  }

  render() {
    const certificados = (
      <ul className="certificados-lista">
        {
          this.getList(
            'Tipo 1',
            'Básico',
            'certificado1',
            '(incluye: datos básicos personales, número de producto y fecha de apertura).',
          )
        }
        {
          this.getList(
            'Tipo 2',
            'Básico + Saldo medio',
            'certificado2'
          )
        }
        {
          this.getList(
            'Tipo 3',
            'Básico + Saldo a la fecha',
            'certificado3'
          )
        }
        {
          this.getList(
            'Tipo 4',
            'Básico + Saldos + Cupo de sobregiro',
            'certificado4'
          )
        }
  
      </ul>
    );
    return(
      <div className="seleccion-certificado">
        <h2 className="contenido-titulo">
          ¿Qué tipo de certificado necesitas?
        </h2>
        <p className="contenido-descripcion">
          Selecciona un tipo de certificado, podrás solicitar solo un (1) tipo de certificado por operación.
        </p> 
        <div className="certificados">
          {certificados}
        </div>
        <Botones disabled={this.state.deshabilitarBoton} certificado={this.state.detalleSeleccionado} paso={this.props.paso}/> 
      </div>
    );
  }
}
