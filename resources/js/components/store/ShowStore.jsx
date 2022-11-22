import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const ruta = 'http://localhost:8000/api';

const ShowStore = () => {
    const [stores, setStores] = useState([])

    useEffect(() => {
        getAllStores()
    }, [])

    const getAllStores = async () => {
        const response = await axios.get(`${ruta}/store_index`)
        setStores(response.data)
        //console.log(response.data);
    }

    const deleteStores = async (id) => {
        await axios.post(`${ruta}/store_delete/${id}`)
        getAllSchools();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>id</th>
                        <th>Clave</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Encargado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store) => (
                        <tr key={store.id}>
                            <td> {store.id} </td>
                            <td> {store.clave} </td>
                            <td> {store.name} </td>
                            <td> {store.address} </td>
                            <td> {store.phone} </td>
                            <td> {store.email} </td>
                            <td> {store.manager} </td>
                            <td>
                                <Link to={`/editStore/${store.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteStores(store.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createStore" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Nueva Escuela</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>


    )
}

export default ShowStore