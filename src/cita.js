const {
  default: CITASDK
} = require('@cryptape/cita-sdk')

const config = require('./config')

var cita;

if (typeof window.cita !== 'undefined') {
  cita = CITASDK(window.cita.currentProvider);
  cita.currentProvider.setHost(config.chain);
} else {
  console.log('No cita ? You should consider trying Cyton!')
  cita = CITASDK(config.chain);
}

module.exports = cita