const {addKeyword} = require('@bot-whatsapp/bot')
const flowCaracts = require('./flowCaracts')
const flowCursado = require('./flowCursado')
const flowFormacion = require ('./flowFormacion')
const flowCostos = require('./flowCostos')
const flowInstruccion = require('./flowInstruccion')
const flowProyeccion = require('./flowProyeccion')

module.exports = addKeyword('2')
.addAnswer(['Por favor escribí el número de opción que corresponda a tu consulta: '])
.addAnswer(
    [
        '1-Características de la Carrera',
        '2-Formación Académica',
        '3-Costos de la Carrera',
        '4-Modalidad de cursado',
        '5-Plan de Instrucción',
        '6-Proyección Profesional',
              
    ] ,
    null,
    null,
    [flowCaracts, flowFormacion,flowCostos ,flowCursado, flowInstruccion, flowProyeccion]     
)