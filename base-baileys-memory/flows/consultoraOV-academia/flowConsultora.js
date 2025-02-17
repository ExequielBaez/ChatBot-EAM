const {addKeyword} = require('@bot-whatsapp/bot')
const flowWelcome = require('../flowWelcome')


module.exports = addKeyword('2')
.addAnswer(['Si su interés es contactarse con la EAM para enviar una invitación a evento u otro motivo, le pedimos nos escriba a difusioneam@gmail.com o difusion@eam.iua.edu.ar '],
    null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowWelcome'))
                 
    }
)