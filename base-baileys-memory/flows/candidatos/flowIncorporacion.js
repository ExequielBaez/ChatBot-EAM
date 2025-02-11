const {addKeyword} = require('@bot-whatsapp/bot')
const flowReqIngreso = require('./flowReqIngreso')

module.exports = addKeyword('1')
.addAnswer(['📄 Para poder ayudarte, escribí el número que corresponda a lo que necesitás:'])
.addAnswer(
    [
        '1- Requisitos de ingreso.',
        '2- Pasos para ingresar.'        
    ] ,
    null,
    null,
    [flowReqIngreso]     
)