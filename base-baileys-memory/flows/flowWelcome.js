
const {addKeyword, EVENTS} = require('@bot-whatsapp/bot')
const flowCandidato = require('./candidatos/flowCandidato')


module.exports = addKeyword(EVENTS.WELCOME)
    .addAnswer('🙌 ¡Hola! Te damos la bienvenida a la Escuela de A M.')
    .addAnswer('Por favor ingresa el número que corresponda a tu consulta:')
    .addAnswer(
        [
            '1- Soy interesado/candidato a la Carrera de Oficial de la Fuerza Aérea.',
            '2- Soy Consultora de Orientación Vocacional/ Academia de preparación para el ingreso/Colegio Secundario/Aeroclub/ExpoCarrera/Otros eventos',
            '3- Soy Oficial de Enlace de Difusión de la Fuerza Aérea.'
        ]        
    )
    .addAnswer(['Te recordamos que nuestra atención vía WhatsApp es de lunes a viernes,',
                'de 8.00 hs a 14.00 hs. y que esta línea no admite llamadas,',
                'videollamadas ni mensajes de audio.']
    ,
    null,
    null,
    [flowCandidato])