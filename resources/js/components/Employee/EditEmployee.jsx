import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/employee_update/'
const ruta2 = 'http://localhost:8000/api/employee_show/'
const defaultSelectValue = "---";

const EditEmployee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [position, setPosition] = useState('')
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
            position: position,
            gender: gender
        })
        navigate.push('/showEmployee')
    }
    useEffect(() => {
        const getEmployeeById = async () => {
            const response = await axios.get(`${ruta2}${id}`)

            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            setAddress(response.data.address)
            setPhone(response.data.phone)
            setPosition(response.data.position)
            setGender(response.data.gender)
        
        }
        getEmployeeById()

    }, [])

    return (

        <Container>
            <div>
                <h3 className='text-center'>Actualizar Datos de empleado</h3>
                <form onSubmit={update}>
                    <div className='text-center'>

                        <div className='mb-3'>
                            <label className='form-label'>Nombres</label>
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
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>CURP</label>
                            <input
                                value={curp}
                                onChange={(e) => setCurp(e.target.value)}
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
                            <label className='form-label'>Cedula Profesional</label>
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
                                <option>{sex}</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showEmployee">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>

    )
}

export default EditEmployee