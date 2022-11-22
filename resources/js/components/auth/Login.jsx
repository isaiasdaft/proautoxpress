import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const ruta = 'http://localhost:8888/proautoxpress/public/api/login';

const Login = () => {

  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  })


  let navigate = useNavigate();

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    const formData = new FormData();
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    axios.post(ruta,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'aplication/json'
        }
      }
    ).then(response => {
      console.log('response');
      console.log(response);
      navigate.push({
        pathname: "/HomePage",
        state: { token: response.data.token }
      
        }
      )
      
    }).catch(error => {
      console.log(error);
      swal({
        title: "Unauthorized",
        text: "Error al iniciar Session",
        icon: "error",
        buttons: "Aceptar"
      });
    });
  };



  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="text-center">
          <h2>BIENVENIDO</h2>

          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png" height={'150px'}
          />
        </div>
      <br></br>
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <h4><label>Email</label></h4>
          <Form.Control
            className='text-center'
            type="email"
            placeholder="Ingrese su correo electronico"
            name="email"
            value={formValue.email}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
          <h4><label>Contraseña</label></h4>
          <Form.Control
            className='text-center'
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            value={formValue.password}
            onChange={onChange}
            required />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit" className="btn btn-secondary btn-lg">Iniciar Session</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;

