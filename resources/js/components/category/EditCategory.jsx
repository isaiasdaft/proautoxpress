import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/category_update/'
const ruta2 = 'http://localhost:8000/api/category_show/'
const ruta3 = 'http://localhost:8000/api/store_index'

const defaultSelectValue = "---";

const EditCategory = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [idStore, setIdStore] = useState('')
    
    const navigate = useNavigate()
    const { id } = useParams()

    const [store, setStore] = useState([])

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            name: name,
            description: description,
            idStore: idStore
        })
        navigate.push('/showCategory')
    }


    useEffect(() => {
        const getCategoryById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setName(response.data.name)
            setDescription(response.data.description)
            setIdStore(response.data.idStore)
        }
        getCategoryById()

        const getAllStore = async () => {
            const response = await axios.get(ruta3)
            setStore(response.data)
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
                <h3 className='text-center'>Actualizar Categoria</h3>
                <form onSubmit={update}>
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
                                onChange={e => setArea(e.target.value)}
                            >
                                <option>{description}</option>
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
                                    store.map((store) => (
                                        <option key={store.id} value={store.id}>{store.name} </option>
                                    ))
                                }
                            </select>
                        </div>

                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showCategory">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditCategory