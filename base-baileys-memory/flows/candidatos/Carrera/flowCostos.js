const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('3')
.addAnswer(
    [ 'Costos de la carrera: La carrera de Oficial de Fuerza Aérea es gratuita y becada por el Estado Nacional, lo que significa que desde que se ingresa como Cadete se cobra un sueldo equivalente al salario mínimo vital y móvil vigente en el país. De ese sueldo se descuenta una pequeña cuota correspondiente a gastos de equipamiento y capacitación, quedando el resto para utilización personal de cada Cadete  (por ejemplo alojamiento los fines de semana). Para consultar el monto actual, ingrese al siguiente link de la RESOL-2021-4-APN-CNEPYSMVYM#MT: https://www.boletinoficial.gob.ar/detalleAviso/primera/243973/20210505',

     ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    