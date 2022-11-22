import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ruta = 'http://localhost:8000/api/brand_insert';



const defaultSelectValue = "---";

const CreateBrand = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const [brand, setBrand] = useState([])

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            name: name,
        })
        navigate.push('/showBrand')
    }

    useEffect(() => {
        const getAllBrand = async () => {
            const response = await axios.get(ruta3)
            setBrand(response.data)
            //console.log(response.data);
        }

        getAllBrand()


    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);

        setIdCareer(option);
    }

    return (
        <Container>
            <div>
                <h3 className='text-center'>Nueva marca</h3>
                <form onSubmit={store}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <b><label className='form-label'>marca</label></b>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre de marca</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                         </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                        <Link to="/showBrand">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>

    )
}

export default CreateBrand
