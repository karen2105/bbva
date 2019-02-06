import { connect } from "react-redux";
import Layout from "@/components/layout";

const infoProducto = {
  saldo: '1.000.000',
  nombre: 'Karen Alonso'
}

const detallePasos = [
  {
    vista: 'SeleccionProducto',
    titulo: 'Producto',
    detalle: 'Selecciona el producto sobre el cual quieres generar tu certificado.',
  },
  {
    vista: 'SeleccionCertificado',
    titulo: 'Tipo de certificado',
    detalle: 'Estos son los tipos de certificados disponibles para este producto, podrás ver un modelo de cada uno.',
  },
  {
    vista: 'Confirmacion',
    titulo: 'Detalle',
    detalle: 'A continuación podrás ver el resumen de la operación y confirmar o editar características.',
  },
  {
    vista: 'Descarga',
    titulo: 'Descarga',
    detalle: '¡Ahora puedes descargar tu certificado!',
  }
];

function mapStateToProps(state) {
  return {
    infoProducto,
    detallePasos,
    certificado: state.getIn(['selecciones', 'certificado']),
    paso: state.getIn(['estado', 'paso']),
  }
}

export default connect(mapStateToProps)(Layout)