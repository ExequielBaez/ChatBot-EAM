const {addKeyword} = require('@bot-whatsapp/bot')
const flowWelcome = require('../flowWelcome')


module.exports = addKeyword('3')
.addAnswer(['Gracias por ponerse en contacto con la División Difusión de la EAM. Estamos a su disposición para el envío del material necesario relacionado al ingreso e información de la Carrera de Oficial de la Fuerza Aérea Argentina. '])
.addAnswer(
    ['Por favor le solicitamos nos escriba detallando su requerimiento a difusioneam@gmail.com o difusion@eam.iua.edu.ar',
    'Además, cuenta con información permanente en los siguientes ',
    '👇 ENLACES IMPORTANTES: ',
    '👉 5 Videos Tutoriales sobre PASOS PARA EL INGRESO: https://youtube.com/playlist?list=PLeLiGGcwJs2MQ-AWNvS4L7xSBmUXKFuIm',
    '👉 Enlace a Preguntas Frecuentes: http://www.eam.iua.edu.ar/eam/preguntas-frecuentes/ ',
    '👉 Medios de contacto con la EAM:',
    '🌐 Formulario de contacto web: http://www.eam.iua.edu.ar/eam/contacto/',
    '📧 Mail: incorporacion@eam.iua.edu.ar ',
    '🤳 Redes Sociales: ',
    'En Facebook: @escuela.aviacion.militar https://www.facebook.com/escuela.aviacion.militar',
    'En Twitter: @EAviacionMil https://twitter.com/eaviacionmil ',
    'En Instagram: @oficialeam https://www.instagram.com/oficialeam ',
    'En YouTube: EAMArgentina https://t.co/Q6v8UQz3ms?amp=1  '],
    null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowWelcome'))
                 
    }
)