import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ruta = 'http://localhost:8000/api/store_insert';

const CreateStore = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('@gmail.com')
    const [manager, setManager] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            clave: clave,
            name: name,
            address: address,
            phone: tephonel,
            email: email,
            manager: manager
        })
        navigate.push('/showStore')
    }

    return (
        <div>
            <h3 className='text-center'>Nueva Sucursal</h3>
            <form onSubmit={store}>
                <div className='text-center'>
                    <div className='mb-3'>
                        <label className='form-label'>Clave</label>
                        <input
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                            type='text'
                            className='form-control text-center'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        <label className='form-label '>Telefono</label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type='text'
                            className='form-control text-center'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Correo</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            className='form-control text-center'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Encargado</label>
                        <input
                            value={manager}
                            onChange={(e) => setManager(e.target.value)}
                            type='text'
                            className='form-control text-center'
                        />
                    </div>
                    <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                    <Link to="/showStore">
                        <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CreateStore