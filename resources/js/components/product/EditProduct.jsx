import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/product_update/';
const ruta2 = 'http://localhost:8000/api/product_show/';
const ruta3 = 'http://localhost:8000/api/brand_index';

const EditProduct = () => {
    const [nameProd, setNameProd] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [idCategory, setIdCategory] = useState('')
    const [idBrand, setIdBrand] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()

    const [brand, setBrand] = useState([])

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            nameProd: nameProd,
            description: description,
            price: price,
            idCategory: idCategory,
            idBrand: idBrand
        })
        navigate.push('/showProduct')
    }


    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setNameProd(response.data.nameProd)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setIdCategory(response.data.idCategory)
            setIdBrand(response.data.idBrand)

        }
        getProductById()

        const getAllProduct = async () => {
            const response = await axios.get(ruta3)
            setBrand(response.data)
            console.log(response.data);
        }

        getAllProduct()

    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);

        setIdBrand(option);
    }

    return (
        <Container>
            <div>
                <h3 className='text-center'>Actualizar Producto</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre</label>
                            <input
                                value={nameProd}
                                onChange={(e) => setNameProd(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Descripción</label>
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>precio inicial</label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'> categoria</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Marca</label>
                            <select name='brand' className='form-control text-center' onClick={handle}>
                                {
                                    brand.map((brand) => (
                                        <option key={brand.id} value={brand.id}>{brand.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showProduct">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditProduct