import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${ruta}/product_index`)
        setProducts(response.data)
        //console.log(response.data);
    }

    const deleteProducts = async (id) => {
        await axios.post(`${ruta}/product_delete/${id}`)
        getAllProducts();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>DESCRIPCIÓN</th>
                        <th>PRECIO</th>
                        <th>Id categoria</th>
                        <th>Id Marca</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td> {product.id} </td>
                            <td> {product.nameProd} </td>
                            <td> {product.description} </td>
                            <td> {product.price} </td>
                            <td> {product.idCategory} </td>
                            <td> {product.idBrand} </td>
                            <td>
                                <Link to={`/editProduct/${product.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteProducts(product.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createSubject" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar nueva Materia</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>


    )
}

export default ShowProduct