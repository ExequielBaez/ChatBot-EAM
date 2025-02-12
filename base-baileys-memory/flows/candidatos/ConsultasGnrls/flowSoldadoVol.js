const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('3')
.addAnswer(
    [ 'Para consultas sobre el ingreso como Soldado Voluntario, conocé los contactos de los centros de incorporación más cercanos a tu zona de residencia ubicados al final de esta página https://www.argentina.gob.ar/fuerzaaerea/educacion-e-incorporacion/soldados-y-reserva o comunicate por teléfono al (011) 4317-6000 INT. 15577.',

     ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    