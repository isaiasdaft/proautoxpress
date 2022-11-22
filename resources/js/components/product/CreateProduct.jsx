import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/product_insert';
const ruta3 = 'http://localhost:8000/api/brand_index';


const CreateProduct = () => {
    const [nameProd, setNameProd] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [idCategory, setIdCategory] = useState('')
    const [idBrand, setIdBrand] = useState('')
    const navigate = useNavigate()

    const [brand, setBrand] = useState([])

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            nameProd: nameProd,
            description: description,
            price: price,
            idCategory: idCategory,
            idBrand: idBrand
        })
        navigate.push('/showProduct')
    }

    useEffect(() => {
        const getAllBrand = async () => {
            const response = await axios.get(ruta3)
            setBrand(response.data)
            console.log(response.data);
        }
        getAllBrand()
    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);

        setIdBrand(option);
    }


    return (
        <Container>
            <div>
                <h3 className='text-center'>Nuevo Producto</h3>
                <form onSubmit={store}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre de producto</label>
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
                            <label className='form-label'>precio</label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>brand</label>
                            <select name='brand' className='form-control text-center' onClick={handle}>
                                {
                                    brand.map((brand) => (
                                        <option key={brand.id} value={brand.id}>{brand.nameProd} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                        <Link to="/showProduct">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>


    )
}

export default CreateProduct