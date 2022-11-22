import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ruta = 'http://localhost:8000/api/brand_update/';
const ruta2 = 'http://localhost:8000/api/brand_show/';
//eliminar ruata const ruta3 = 'http://localhost:8000/api/career_index';

const defaultSelectValue = "---";

const EditBrand = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()


    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            name: name,
        })
        navigate.push('/showBrand')
    }


    useEffect(() => {
        const getBrandById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setName(response.data.name)
        }
        getBrandById()

    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);

        setIdCareer(option);
    }

    return (
        <Container>
            <div>
                <h3 className='text-center'>Actualizar Marca</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre de marca</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                         </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showBrand">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditBrand