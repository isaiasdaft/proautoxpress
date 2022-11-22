import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";

const ruta = 'http://localhost:8000/api/category_insert';
const ruta3 = 'http://localhost:8000/api/store_index'


const defaultSelectValue = "---";

const CreateCategory = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [idStore, setIdStore] = useState('')
    const navigate = useNavigate();

    const [stored, setStored] = useState([])

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            name: name,
            description: description,
            idStore: idStore
        })
        navigate.push('/showCategory')
    }

    useEffect(() => {
        const getAllStore = async () => {
            const response = await axios.get(ruta3)
            setStored(response.data)
            //console.log(response.data);
        }

        getAllStore()

    }, [])

    const handle = function (e) {
        const option = e.target.value;
        //console.log(option);

        setIdStore(option);
    }


    return (
        <Container>
            <div>
                <h3 className='text-center'>Categoria nueva</h3>
                <form onSubmit={store}>
                    <div className='text-center'>
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
                            <label className='form-label'>Descripción:</label>
                            <select className='form-control text-center'
                                id="description"
                                name="description"
                                defaultValue={description}
                                style={{ color: description === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setDescription(e.target.value)}
                            >
                                <option>{defaultSelectValue}</option>
                                <option>Arquitectura</option>
                                <option>Artes</option>
                                <option>Ciencias Biológicas</option>
                                <option>Ciencias Físico Matemáticas</option>
                                <option>Ciencias Sociales</option>
                                <option>Económico Administrativas</option>
                                <option>Educación</option>
                                <option>Humanidades</option>
                                <option>Ingeniería</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Sucursal</label>
                            <select name='Users' className='form-control text-center' onClick={handle}>
                                {
                                    stored.map((stored) => (
                                        <option key={stored.id} value={stored.id}>{stored.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                        <Link to="/showCategory">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default CreateCategory