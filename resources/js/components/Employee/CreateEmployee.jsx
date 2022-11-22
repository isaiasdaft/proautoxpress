import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'



const ruta = 'http://localhost:8000/api/employee_insert';
const defaultSelectValue = "---";

const CreateEmployee = () => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [position, setPosition] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {

            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            phone: phone,
            position: position,
            gender: gender
        })
        navigate.push('/showEmployee')
    }

    return (
        <Container>
            <h3 className='text-center'>Nuevo Empleado</h3>
            <form onSubmit={store}>
                <div className='text-center'>
                    <div className='mb-3'>
                        <label className='form-label'>Nombres:</label>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type='text'
                            className='form-control text-center'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Apellidos</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type='text'
                            className='form-control text-center'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Correo Electronico</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
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
                        <label className='form-label'>Puesto:</label>
                        <input
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
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
                            <option>{defaultSelectValue}</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </div>

                    <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                    <Link to="/showEmployee">
                        <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                    </Link>
                </div>
            </form>
        </Container>
    )
}

export default CreateEmployee;