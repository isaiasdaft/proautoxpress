import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/customer_update/'
const ruta2 = 'http://localhost:8000/api/customer_show/'

const defaultSelectValue = "---";

const EditCustomer = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate()

    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            email: email,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone: phone,
            gender: gender
        })
        navigate.push('/showCustomer')
    }

    useEffect(() => {
        const getCustomerById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setEmail(response.data.email)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setAddress(response.data.address)
            setPhone(response.data.phone)
            setGender(response.data.gender)
        }
        getCustomerById()

    }, [])

    return (
        <Container>
            <div>
                <h3 className='text-center'>Nuevo Cliente</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <label className='form-label'>Correo Electronico</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Apellido Materno</label>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Apellido Paterno</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Direccion</label>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Telefono</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                        <label className='form-label'>Sexo</label>
                            <select className='form-control text-center'
                                id="gender"
                                name="gender"
                                defaultValue={gender}
                                style={{ color: gender === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setGender(e.target.value)}
                            >
                                <option>{gender}</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showCustomer">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditCustomer