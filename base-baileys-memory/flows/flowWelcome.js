
const {addKeyword, EVENTS} = require('@bot-whatsapp/bot')
const flowCandidato = require('./candidatos/flowCandidato')
const flowConsultora = require('./consultoraOV-academia/flowConsultora')
const flowOEPersonalFAA = require('./oficialEnlace/flowOE-PersonalFAA')


module.exports = addKeyword(EVENTS.WELCOME).addAction(async (ctx, { provider }) => {
  const jid = ctx?.key?.remoteJid;

  // Simula escritura durante 2 segundos
  await provider.vendor.sendPresenceUpdate("composing", jid);
  await new Promise(resolve => setTimeout(resolve, 2000));
  await provider.vendor.sendPresenceUpdate("paused", jid);
})
  
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
    [flowCandidato, flowConsultora,flowOEPersonalFAA])