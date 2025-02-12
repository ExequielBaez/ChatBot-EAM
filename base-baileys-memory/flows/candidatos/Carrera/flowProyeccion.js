const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('6')
.addAnswer(
    [ 'Proyección Profesional: finalizados los 4 años como Cadete en la Escuela de Aviación Militar y con el grado de Alférez de la nación, se debe elegir una de las 17 especialidades para continuar con la formación. La elección va a depender de la cantidad de vacantes existentes para cada una de ellas y del orden de mérito obtenido durante los años anteriores. Si quieres conocer el Plan de Carrera que brinda la Fuerza Aérea Argentina para sus Oficiales ingresa en el siguiente link. http://www.eam.iua.edu.ar/eam/proyeccion-profesional/',
     ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    