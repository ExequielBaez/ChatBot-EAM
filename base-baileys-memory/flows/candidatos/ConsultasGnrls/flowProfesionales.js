const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('2')
.addAnswer(
    [ 'Si sos profesional, tenés espíritu de servicio y gran vocación militar, esta es tu oportunidad de darle un giro a tu carrera. La Fuerza Aérea Argentina busca egresados de distintas carreras que quieran asimilarse a la Institución y desarrollarse profesionalmente en un ambiente único. En el siguiente link podrás obtener más información:https://www.argentina.gob.ar/fuerzaaerea/educacion-e-incorporacion/ingreso-la-fuerza-aerea-argentina/ingreso-como-profesional',

     ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    