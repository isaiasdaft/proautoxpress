import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const ruta = 'http://localhost:8000/api';
const ShowCustomer = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getAllCustomers()
    }, [])

    const getAllCustomers = async () => {
        const response = await axios.get(`${ruta}/customer_index`)
        setCustomers(response.data)
        //console.log(response.data);
    }

    const deleteCustomer = async (id) => {
        await axios.post(`${ruta}/customer_delete/${id}`)
        getAllCustomers();
    }


    return (

        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Numero de Control</th>
                        <th>Correo Electronico</th>
                        <th>Nombre</th>
                        <th>Apellido Materno</th>
                        <th>Apellido Paterno</th>
                        <th>Sexo</th>
                        <th>CURP</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td> {customer.id} </td>
                            <td> {customer.email} </td>
                            <td> {customer.firstName} </td>
                            <td> {customer.lastName} </td>
                            <td> {customer.address} </td>
                            <td> {customer.phone} </td>
                            <td> {customer.gender} </td>
                            <td>
                                <Link to={`/editCustomer/${customer.id}`} className='btn btn-secondary'>Editar</Link>
                                <button onClick={() => deleteCustomer(customer.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createCustomer" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Nuevo Cliente</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowCustomer;