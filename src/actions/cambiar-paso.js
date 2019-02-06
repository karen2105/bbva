import * as actionType from '@/constants/cambiar-paso';

export function cambiarPaso(paso) {
  return {
    type: actionType.SET_PASO, 
    paso,
  }
}

export function setCertificado(certificado) {
  return {
    type: actionType.SET_CERTIFICADO, 
    certificado,
  }
}
