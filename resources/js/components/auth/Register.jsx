import { Container } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const ruta = 'http://localhost:8888/proautoxpress/public/api/register';

const Register = () => {

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
          navigate.push("/HomePage")
        }
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function signUp() {
        let item = { name, email, password }
        console.warn(item)

        let result = await fetch(ruta, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'multipart/form-data',
                "Accept": 'application/json'
            }
        });

        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/HomePage")
    }


    return (
        <Container>
            <div className="text-center">
                <h2>Crear Nueva Cuenta</h2>
                <img
                    src="https://www.kindpng.com/picc/m/366-3669911_download-app-and-create-your-free-account-account.png" height={'150px'}
                />
            </div>
            <br></br>
            <div className="mb-3 text-center">
                <h4><label>Nombre</label></h4>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control text-center"
                    placeholder="Ingrese su nombre"
                />
            </div>
            <div className="mb-3 text-center">
                <h4><label>Correo Electronico</label></h4>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control text-center"
                    placeholder="Ingrese su correo electronico"
                />
            </div>
            <div className="mb-3 text-center">
                <h4><label>Contraseña</label></h4>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control text-center"
                    placeholder="Ingrese su contraseña"
                />
            </div>
            <div className="d-grid">
                <button onClick={signUp} type="submit" className="btn btn-secondary btn-lg"> Registrarse</button>
            </div>
            <p className="forgot-password text-right">
                Ya estas Registrado <b><Link to="/login">Inicia Session?</Link></b>
            </p>

        </Container>
    )
}
export default Register
