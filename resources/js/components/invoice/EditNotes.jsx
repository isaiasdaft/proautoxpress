import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ruta = 'http://localhost:8000/api/numbuy_update/'
const ruta2 = 'http://localhost:8000/api/numbuy_show/'
const ruta3 = 'http://localhost:8000/api/product_index'
const ruta4 = 'http://localhost:8000/api/customer_index'

const EditNotes = () => {
    const [idProduct, setIdProduct] = useState('')
    const [idCustomer, setIdCustomer] = useState('')
    const [total, setTotal] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [customer, setCustomer] = useState([])

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            idProduct: idProduct,
            idCustomer: idCustomer,
            total: total,
            description: description
        })
        navigate.push('/showNotes')
    }

    useEffect(() => {
        const getNotesById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setIdProduct(response.data.idProduct)
            setIdCustomer(response.data.idCustomer)
            setTotal(response.data.total)
            setDescription(response.data.description)
        }
        getNotesById()

        const getAllProduct = async () => {
            const response = await axios.get(ruta3)
            setProduct(response.data)
            //console.log(response.data);
        }
        getAllProduct()

        const getAllCustomer = async () => {
            const response = await axios.get(ruta4)
            setCustomer(response.data)
            //console.log(response.data);
        }
        getAllCustomer()

    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);
        setIdProduct(option);
    }

    const handle2 = function (e) {
        const option = e.target.value;
        console.log(option);
        setIdCustomer(option);
    }


    return (
        <Container>
            <div className='text-center'>
                <h3 className='text-center'>Actualizar factura</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <b><label className='form-label'>Producto</label></b>
                            <select name='product' className='form-control text-center' onClick={handle}>
                                {
                                    product.map((product) => (
                                        <option key={product.id } defaultValue={idProduct} value={product.id}>{product.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Cliente</label></b>
                            <select name='customer' className='form-control text-center' onClick={handle2}>
                                {
                                    customer.map((customer) => (
                                        <option key={customer.id} value={customer.id}>{customer.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Total</label></b>
                            <input
                                value={total}
                                onChange={(e) => setTotal(e.target.value)}
                                type='text'
                                className='form-control text-center'

                            />
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Descripción</label></b>
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type='text'
                                className='form-control text-center'

                            />
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar Factura</button>
                        <Link to="/showNotes">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>

            </div>
        </Container>

    )
}

export default EditNotes