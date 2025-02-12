const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('4')
.addAnswer(
    [ 'Modalidad de cursado: Apenas se ingresa como Cadete de Primer Año, el alumno cursa bajo un régimen de internado, es decir que se aloja en el instituto de lunes a viernes, saliendo de franco generalmente los viernes a la tarde y regresando los domingos por la noche. La salida de franco no es optativa.',
      ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    