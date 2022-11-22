import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const defaultSelectValue = "---";

const ShowEmployee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees()
    }, [])

    const getAllEmployees = async () => {
        const response = await axios.get(`${ruta}/employee_index`)
        setEmployees(response.data)
        //console.log(response.data);
    }

    const deleteEmployees = async (id) => {
        await axios.post(`${ruta}/professor_delete/${id}`)
        getAllProfessors();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo Electronico</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Puesto</th>
                        <th>genero</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td> {employee.id} </td>
                            <td> {employee.firstName} </td>
                            <td> {employee.lastName} </td>
                            <td> {employee.email} </td>
                            <td> {employee.address} </td>
                            <td> {employee.phone} </td>
                            <td> {employee.position} </td>
                            <td> {employee.gender} </td>
                            <td>
                                <Link to={`/editEmployee/${employee.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteEmployees(employee.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createEmployee" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar nuevo Empleado</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowEmployee