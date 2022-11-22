import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


const ruta = 'http://127.0.0.1:8000/api/store_update/'
const ruta2 = 'http://127.0.0.1:8000/api/store_show/'

const EditStore = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [manager, setManager] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            clave: clave,
            name: name,
            address: address,
            phone: phone,
            email: email,
            manager: manager
        })
        navigate.push('/showStore')
    }


    useEffect(() => {
        const getStoreById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setClave(response.data.clave)
            setName(response.data.name)
            setAddress(response.data.address)
            setPhone(response.data.phone)
            setEmail(response.data.email)
            setManager(response.data.manager)
        }
        getStoreById()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    return (
        <div>
            <h3 className='text-center'>Nueva Sucursal</h3>
            <form onSubmit={update}>
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
                        <label className='form-label'>Telefono</label>
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
                    <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                    <Link to="/showStore">
                        <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default EditStore