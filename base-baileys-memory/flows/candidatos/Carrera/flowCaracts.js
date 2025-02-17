const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('1')
.addAnswer(
    [ 'Información general: La Carrera de Oficial de la Fuerza Aérea Argentina consta de un Plan de Enseñanza de 4 años, durante los cuales los alumnos se forman como Cadetes, recibiendo una educación profesional articulada con actividades académicas, militares y deportivas, lo que propicia una FORMACIÓN INTEGRAL. ',
     'Finalizado dicho ciclo, los Cadetes egresan como Oficiales con el grado de Alférez, obteniendo además la «Licenciatura en Conducción de Recursos Aeroespaciales para la Defensa» (LICRAD).', 

     ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    