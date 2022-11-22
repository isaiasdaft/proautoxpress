import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowCategory = () => {
    const [caterories, setCaterories] = useState([])

    useEffect(() => {
        getAllCaterories()
    }, [])

    const getAllCaterories = async () => {
        const response = await axios.get(`${ruta}/category_index`)
        setCaterories(response.data)
        //console.log(response.data);
    }

    const deleteCategories = async (id) => {
        await axios.post(`${ruta}/category_delete/${id}`)
        getAllCaterories();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>DEscripción</th>
                        <th>IDSucursal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {caterories.map((category) => (
                        <tr key={category.id}>
                            <td> {category.id} </td>
                            <td> {category.name} </td>
                            <td> {category.description} </td>
                            <td> {category.idStore} </td>
                            <td>
                                <Link to={`/editCategory/${category.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteCategories(category.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createCategory" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Nueva categoria de la sucursal</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowCategory