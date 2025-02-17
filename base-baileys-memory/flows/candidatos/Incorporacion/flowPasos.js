const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('../flowCandidato')

module.exports = addKeyword('2')
.addAnswer(['📄 Para poder ayudarte, escribí el número que corresponda a lo que necesitás:'])
.addAnswer(
    [ '1.Descargar Cuadernillo de ingreso: Se habilita su descarga desde el momento en que se abren las inscripciones.',' (Link Cuadernillo)  Tutorial:  https://youtube.com/embed/v4dTqgSss5s?autoplay=1',
        '2.Inscribirse: Cuenta con 3 pasos importantes.Tutorial: https://youtube.com/embed/bHraM0s9gEM?autoplay=1 👉 Infografía en PDF de los Anexos y Documentación Personal para la inscripción: http://www.eam.iua.edu.ar/eam/wp-content/uploads/2020/09/Infografia-ingreso-a-la-EAM-FAA.pdf ',
        '3.Carga de Anexo 5 online y envío de documentación:  Los datos tendrán que estar completos y ser verídicos ya que se corroborará con la documentación recibida. ',
        '4.Examen Intelectual: Las fechas estarán determinadas en el Cuadernillo de Ingreso.Se habilita su ingreso a partir de la apertura de inscripciones.Introducción Aula Virtual: Aula Virtual: (https://www.youtube.com/watch?v=cTAEia95-Mo) Tutorial: https://youtube.com/embed/-zwadp56bOo?autoplay=1 ',
        '5.Examen definitivo: Aptitud Física, Pruebas de Adaptación a la Vida Militar, Entrevistas Personales y la decisión final de la Junta de Incorporación. Tutorial: https://youtube.com/embed/t_4sBR2BCvc?autoplay=1 ',
        'Todas las consultas de índole físico y médico deben hacerse únicamente por email a incorporacion@eam.iua.edu.ar explicando la duda lo más detallada posible (también se puede adjuntar un informe o estudio médico). De esta forma se deriva dicha consulta al Área Médica correspondiente y se le devuelve la respuesta brindada por los médicos abocados al ingreso. Otra opción es comunicarse con el Servicio Médico del Escuadrón Sanidad de la EAM, al (0351) 433-3900, interno 37486, de 8 a 14hs.',
     ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('../flowCandidato'))
                 
    }
    )
    