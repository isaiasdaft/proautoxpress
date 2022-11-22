import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/customer_insert';

const defaultSelectValue = "---";

const CreateCustomer = () => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            email: email,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone: phone,
            gender: gender
        })
        navigate.push('/showCustomer')
    }

    return (
        <Container>
            <div className='text-center'>
                <h3 className='text-center'> <b>Nuevo Cliente</b> </h3>
                <form onSubmit={store}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <b><label className='form-label'>Correo Electronico</label></b>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Apellido Materno</label></b>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Apellido Paterno</label></b>
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
                            <b><label className='form-label'>Sexo</label></b>
                            <select className='form-control text-center'
                                id="gender"
                                name="gender"
                                defaultValue={gender}
                                style={{ color: gender === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setGender(e.target.value)}
                            >
                                <option>{defaultSelectValue}</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Cliente</button>
                        <Link to="/showCustomer">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default CreateCustomer;