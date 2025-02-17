const {addKeyword} = require('@bot-whatsapp/bot')
const flowIncorporacion = require('./Incorporacion/flowIncorporacion')
const flowCarrera = require('./Carrera/flowCarrera')
const flowConsultas = require('./ConsultasGnrls/flowConsultas')

module.exports = addKeyword('1')
.addAnswer(['📄 Para guiarte mejor, indicanos el número que corresponda:'])
.addAnswer(
    [
        '1- Consultas sobre la incorporación.',
        '2- Consultas sobre la Carrera.',
        '3- Consultas generales.'
    ] ,
    null,
    null,
    [flowIncorporacion, flowCarrera, flowConsultas]     
)