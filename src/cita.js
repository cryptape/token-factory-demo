const {
  default: AppChain
} = require('@appchain/base')

const config = require('./config')

var cita;

if (typeof window.cita !== 'undefined') {
  cita = AppChain(window.cita.currentProvider);
  cita.currentProvider.setHost(config.chain);
} else {
  console.log('No cita ? You should consider trying Cyton!')
  cita = AppChain(config.chain);
}

module.exports = cita