const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('5')
.addAnswer(
    [ 'Plan de Instrucción: Dentro de las actividades realizadas por los Cadetes, para dar cumplimiento a la parte práctica de la capacitación profesional recibida, se realizan ejercicios de supervivencia en montaña, selva, desierto y mar. Para conocer las asignaturas militares correspondientes a cada año ingresa al siguiente link: http://www.eam.iua.edu.ar/eam/formacion-de-cadete/#instruccion',
        '--Volovelismo: Es el primer contacto que tiene el Cadete con la actividad aérea. y las materias son:',
        ' INSTRUCCIÓN ACADÉMICA: (Aspectos generales del vuelo a vela, Introducción al material de vuelo (IMA) TWIN ASTIR, Navegación Aérea Aplicada al Vuelo a Vela (NAV), Meteorología Aplicada al Vuelo a Vela (MET) 15, Teoría del Vuelo de competición. (TVC)  INSTRUCCIÓN ÁREA: Pilotaje General.',
        'Deportes: para conocer más sobre las escuadras deportivas ingresa al siguiente link: http://www.eam.iua.edu.ar/eam/formacion-de-cadete/#sports',
    ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    