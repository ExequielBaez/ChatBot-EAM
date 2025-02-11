const {addKeyword, gotoFlow} = require('@bot-whatsapp/bot')
const flowCandidato = require('./flowCandidato')

module.exports = addKeyword('1')
.addAnswer(['📄 Los Requisitos de Ingreso son:'])
.addAnswer(
    [
        'La Carrera de Oficial de la Fuerza Aérea Argentina es de Nivel Universitario, en tanto para poder ingresar, es necesario haber finalizado el colegio secundario.',
'1. Ser argentino/a nativo/a o por opción.',
'2. Ser de estado civil soltero/a.',
'3. Tener entre 16 años como mínimo y 24 como máximo al 01 de marzo.',
'4. No haber sido dado de baja por mala conducta o aplazado en aptitudes militares, en alguno de los Institutos de las Fuerzas Armadas, o haber sido condenado en sede civil o militar, por delitos de cualquier índole.',
'5. Tener aprobado y finalizado el ciclo de enseñanza secundaria.',
'6. Poseer DNI actualizado y en buenas condiciones.',
'7. Contar con consentimiento de sus padres o representante legal si es menor a 18 años.',
'8. Ser sano y tener aptitud psicofisiológica que le permita el cumplimiento de las actividades que impone el servicio de las armas, de acuerdo a lo establecido en la Reglamentación vigente.',
'9. Poseer el Plan Nacional de Vacunación completo, incluido el esquema completo anti-hepatitis A y B, debiendo presentar el certificado de vacunación original de dicho plan.',
'10. Aprobar los exámenes académico y definitivo (físico, psicotécnico y adaptación a la vida militar) estipulados en el Cuadernillo de Ingreso.',
'11. Completar y presentar los formularios y la documentación exigida para la inscripción.'
        
    ] , null,
    async (_,{gotoFlow}) =>
        {
            return gotoFlow(require('./flowCandidato'))
                 
    }
    
)