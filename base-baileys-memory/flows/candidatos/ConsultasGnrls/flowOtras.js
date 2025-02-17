const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('4')
.addAnswer(
    [ ' Otras consultas. En el siguiente link vas a poder encontrar una sección completa de las preguntas más frecuentes con sus respectivas respuestas.http://www.eam.iua.edu.ar/eam/preguntas-frecuentes/',

     ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    