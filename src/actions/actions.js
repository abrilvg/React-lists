const data = [{
    id: 1,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 2,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"

},{
    id: 3,
    paciente: 'paciente2',
    odontologo: 'odontologo2',
    placas: 2,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 4,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 5,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 6,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 7,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 8,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 9,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 10,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 11,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 12,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 13,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 14,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 15,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 16,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 17,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 18,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 19,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
},{
    id: 20,
    paciente: 'paciente1',
    odontologo: 'odontologo1',
    placas: 3,
    inicioTratamiento: "2020-04-10",
    finTratamiento:"2020-05-10"
}];

/**
 * Get all patients
 * @param {function} dispatch 
 */
const getPatientData = (dispatch) =>{
    dispatch({
        type: 'SUCCESS_GET_PATIENTS',
        patients: data
    })
};

/**
 * updates updatedPatient in patients list in store
 * @param {function} dispatch
 * @param {object} updatedPatient
 */
const savePatient = (dispatch, updatedPatient) => {
    dispatch({
        type: 'SUCCESS_SAVE_PATIENT',
        updatedPatient: updatedPatient
    });
};

/**
 * Deletes patient with id in store
 * @param {function} dispatch 
 * @param {number} id 
 */
const deletePatient = (dispatch, id) =>{
    dispatch({
        type: 'DELETE_PATIENT',
        id: id
    })
};

export  {
    getPatientData,
    deletePatient,
    savePatient
}
