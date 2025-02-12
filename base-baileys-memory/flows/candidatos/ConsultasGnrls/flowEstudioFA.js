const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('1')
.addAnswer(
    [ 'Para conocer las diferentes opciones a las cuales te podes incorporar, te dejamos el siguiente link:https://www.argentina.gob.ar/fuerzaaerea/educacion-e-incorporacion/ingreso-la-fuerza-aerea-argentina',

     ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    