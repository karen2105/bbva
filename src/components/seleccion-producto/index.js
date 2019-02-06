import React from 'react';
import CuentaIcono from '@/assets/images/tarjeta.svg';
import RadioOn from '@/assets/images/radio-on.svg';
import RadioOff from '@/assets/images/radio-off.svg';
import Botones from '@/assets/botones';

export default class SeleccionProducto extends React.Component {
   constructor(props) {
    super(props);

    this.state = { 
      cuentaAhorro: false,
      cuentaCorriente: false,
      cuentaSeleccionada: null,
      deshabilitarBoton: true,
    };

    this.getRadio = this.getRadio.bind(this);
    this.hideCuentasAhorro = this.hideCuentasAhorro.bind(this);
    this.handleSeleccionarTipoCuenta = this.handleSeleccionarTipoCuenta.bind(this);
    this.handleCuentas = this.handleCuentas.bind(this);
  }

  handleSeleccionarTipoCuenta(e, tipo) {
    if(tipo === 'ahorros') {
      this.setState({
        cuentaAhorro: true,
        cuentaCorriente: false,
      });
    }
 }

  hideCuentasAhorro() {
    this.setState({
      cuentaAhorro: false,
      cuentaCorriente: false,
      cuentaSeleccionada: null,
      deshabilitarBoton: true,
    });
  }

  handleCuentas(e, id) {
    this.setState({
      cuentaSeleccionada: e.currentTarget.id,
      deshabilitarBoton: false,
    });
  }

  getRadio(opcionSeleccionada) {
    if(this.state.cuentaSeleccionada === opcionSeleccionada){
      return <RadioOn className="radio" />
    }
    return <RadioOff className="radio" />
  }

  render() {  
  const cuentasAhorro = (
    <ul className="cuentas-ahorro-lista">
      <li id="cuenta1" onClick={(e) => this.handleCuentas(e)}>
        <CuentaIcono className="svg-list"/>
        <div className="cuenta-nombre">Cuenta de ahorros •••• •••• 3456</div>
        {this.getRadio('cuenta1')}
      </li>
      <li id="cuenta2" onClick={(e) => this.handleCuentas(e)}>
        <CuentaIcono className="svg-list"/>
        <div className="cuenta-nombre">Cuenta de Ahorros 2 •••• •••• 6789</div>
        {this.getRadio('cuenta2')}
      </li>
      <li id="cuenta3" onClick={(e) => this.handleCuentas(e)}>
        <CuentaIcono className="svg-list"/>
        <div className="cuenta-nombre">Nómina Brinks •••• •••• 6789</div>
        {this.getRadio('cuenta3')}
      </li>
    </ul>
  );

    return(
      <div className="seleccion-producto">
        <div className="seleccion-bubble">
          <h2 className="contenido-titulo">
            Selecciona un tipo de producto
          </h2>
          <div className="cuentas">
            <div 
              className={this.state.cuentaAhorro ? 'cuenta-ahorro selected':'cuenta-ahorro'} 
              onClick={(e)=> this.handleSeleccionarTipoCuenta(e,'ahorros')}
            >
              <CuentaIcono className="cuenta-icono"/>
              <span>Cuenta de Ahorros</span>
            </div>
            <div className="cuenta-corriente">
              <CuentaIcono className="cuenta-icono"/>
              <span>Cuenta de Corriente</span>
            </div>      
          </div>
        </div>
        { 
          this.state.cuentaAhorro ?
          <React.Fragment>
            <div className="seleccion-lista">
              {cuentasAhorro}
            </div>    
            <Botones disabled={this.state.deshabilitarBoton} paso={this.props.paso} certificado={null}/>
          </React.Fragment>
          : null 
        }    
      </div>
    );
  }
}
