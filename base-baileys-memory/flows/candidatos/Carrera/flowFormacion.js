const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('2')
.addAnswer(
    [ 
        '1. Plan de estudios-Listado de asignaturas http://www.eam.iua.edu.ar/eam/wp-content/uploads/2021/01/PLAN-DE-ESTUDIOS.pdf',
        '2. Resolución Ministerial-Validez del Título http://www.eam.iua.edu.ar/eam/wp-content/uploads/2017/10/RM-524-2013-LICRAD.pdf',
    ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    