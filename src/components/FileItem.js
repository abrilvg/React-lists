import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Icon, Button } from 'semantic-ui-react'

import {deletePatient, savePatient} from '../actions/actions';

/**
 * File item, each row with its values
 * @param {object} props
 */
const FileItem = ({patient, savePatient, deletePatient}) => {

    useEffect(() => {
        setPatient(patient.paciente);
        setOdontologo(patient.odontologo);
        setPlaca(patient.placas);
        setInicio(patient.inicioTratamiento);
        setFin(patient.finTratamiento);
    }, [patient.paciente, patient.odontologo, patient.placas, patient.inicioTratamiento, patient.finTratamiento])

    const [editMode, setEditMode] = useState(false);
    const [paciente, setPatient] = useState(patient.paciente);
    const [odontologo, setOdontologo] = useState(patient.odontologo);
    const [placas, setPlaca] = useState(patient.placas);
    const [inicioTratamiento, setInicio] = useState(patient.inicioTratamiento);
    const [finTratamiento, setFin] = useState(patient.finTratamiento);

    /**
     * Deletes patient using patient.id
     */
    const handleRemovePatient = () => deletePatient(patient.id);

    /**
     * Sets editMode to true
     */
    const handleEditRow = () => setEditMode(true);

    /**
     * Calls savePatient action with updatedPatient, and set editMode to false
     */
    const handleSaveRow = () => {
        const updatedPatient = {
            paciente: paciente,
            odontologo: odontologo,
            placas: placas,
            inicioTratamiento: inicioTratamiento,
            finTratamiento: finTratamiento,
            id: patient.id
        };
        savePatient(updatedPatient);
        setEditMode(false);
    };

    /**
     * Sets editMode to false
     */
    const handleCancel = () => setEditMode(false);

    /**
     * Changes pacient value
     * @param {object} event
     */
    const handleChangePatient = (event) => {
        const newValue = event.target.value;
        setPatient(newValue);
    }

    /**
     * Changes odontologo value
     * @param {object} event
     */
    const handleChangeOdontologo = (event) => {
        const newValue = event.target.value;
        setOdontologo(newValue);
    }

    /**
     * Changes placa value
     * @param {object} event
     */
    const handleChangePlacas = (event) => {
        const newValue = event.target.value;
        setPlaca(newValue);
    }

    /**
     * Changes inicio tratamiento value
     * @param {object} event
     */
    const handleChangeInicio = (event) => {
        const newValue = event.target.value;
        setInicio(newValue);
    }

    /**
     * Changes fin tratamiento value
     * @param {object} event
     */
    const handleChangeFin = (event) => {
        const newValue = event.target.value;
        setFin(newValue);
    }

    let row;
    if (editMode) {
        row = (
            <Table.Row>
                <Table.Cell><input type="text" value={paciente} onChange={handleChangePatient} /></Table.Cell>
                <Table.Cell><input type="text" value={odontologo} onChange={handleChangeOdontologo} /></Table.Cell>
                <Table.Cell><input type="number" value={placas} onChange={handleChangePlacas}/></Table.Cell>
                <Table.Cell><input type="date" value={inicioTratamiento} onChange={handleChangeInicio}/></Table.Cell>
                <Table.Cell><input type="date" value={finTratamiento} onChange={handleChangeFin}/></Table.Cell>
                <Table.Cell><Button positive onClick={handleSaveRow}>Guardar</Button></Table.Cell>
                <Table.Cell><Button onClick={handleCancel}>Cancelar</Button></Table.Cell>
            </Table.Row>
        );
    } else {
        row = (
            <Table.Row>
                <Table.Cell>{paciente}</Table.Cell>
                <Table.Cell>{odontologo}</Table.Cell>
                <Table.Cell>{placas}</Table.Cell>
                <Table.Cell>{inicioTratamiento}</Table.Cell>
                <Table.Cell>{finTratamiento}</Table.Cell>
                <Table.Cell><Icon color='blue' name='edit' onClick={handleEditRow} /></Table.Cell>
                <Table.Cell><Icon color='red' name='remove circle' onClick={handleRemovePatient}/></Table.Cell>
            </Table.Row>
        );
    }

    return (
        <>
            {row}
        </>
    );
};

FileItem.propTypes = {
    pacients: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
    deletePatient: (id) => deletePatient(dispatch, id),
    savePatient: (paciente) => savePatient(dispatch, paciente)
});

export default connect(null, mapDispatchToProps)(FileItem);
