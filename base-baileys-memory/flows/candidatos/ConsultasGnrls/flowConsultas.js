const {addKeyword} = require('@bot-whatsapp/bot')
const flowEstudioFA = require('./flowEstudioFA')
const flowProfesionales = require('./flowProfesionales')
const flowSoldadoVol = require('./flowSoldadoVol')
const flowOtras = require('./flowOtras')
module.exports = addKeyword('3')
.addAnswer(['Para poder ayudarte, escribí el número que corresponda a lo que necesitás:'])
.addAnswer(
    [
        '1. ¿Qúe se puede estudiar en la Fuerza Aérea?',
        '2. Ingreso de Profesionales ',
        '3. Incorporación como Soldado Voluntario.',
        '4. Otras consultas.',             
    ] ,
    null,
    null,
    [flowEstudioFA, flowProfesionales, flowSoldadoVol, flowOtras]     
)