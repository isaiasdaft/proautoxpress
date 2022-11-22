import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowBrand = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        getAllBrands()
    }, [])

    const getAllBrands = async () => {
        const response = await axios.get(`${ruta}/brand_index`)
        setBrands(response.data)
        //console.log(response.data);
    }

    const deleteBrands = async (id) => {
        await axios.post(`${ruta}/brand_delete/${id}`)
        getAllBrands();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand) => (
                        <tr key={brand.id}>
                            <td> {brand.id} </td>
                            <td> {brand.name} </td>
                            <td>
                                <Link to={`/editBrand/${brand.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteBrands(brand.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createBrand" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar nueva Marca</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>


    )
}

export default ShowBrand