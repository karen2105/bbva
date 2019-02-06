import React, { Component } from 'react';
import Header from '@/components/layout/header';
import PanelIzq from '@/components/layout/panel-izq';
import Contenido from '@/components/layout/contenido';

 export default class Layout extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header infoProducto={this.props.infoProducto} paso={this.props.paso}/>
        <div className="main-content">
          <PanelIzq data={this.props.detallePasos} paso={this.props.paso} />
          <Contenido 
            paso={this.props.paso}
            vista={this.props.detallePasos[this.props.paso - 1].vista}
            certificado={this.props.certificado}
          />
        </div>
      </div>
    );
  }
}
