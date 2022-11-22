import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import logo from '../../css/logo-proauto.png';

const HomePage = () => {
    return (
        <Container>
           <Row>
            <div className='text-center page-header'>
            </div>
            <br></br>
            <div className='text-center container'>
                <div className="row">
                    <div className="col">
                        <Card style={{ width: '14em' }}>
                            <Card.Img variant="top" src="https://cdn.icon-icons.com/icons2/1572/PNG/512/3592855-business-man-employee-general-human-member-office-tie_107745.png" height={'180px'}/>
                            <Card.Body>
                            <Card.Title>Empleados</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Gestionar empleados</Button>
                            </Card.Body>
                        </Card>
                   <br></br>
                    </div>
                     <div className="col">
                     <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2051/2051943.png" height={'180px'}/>
                            <Card.Body>
                            <Card.Title>Clientes</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Registras Cliente</Button>
                            </Card.Body>
                    </Card>
                    <br></br>
                    </div>
                    <div className="col">
                       
                          <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/003/766/414/original/auto-parts-blue-flat-design-long-shadow-glyph-icon-car-mechanic-wheel-instruments-repair-service-maintenance-e-commerce-department-online-shopping-categories-silhouette-illustration-vector.jpg" height={'180px'}/>
                                <Card.Body>
                                <Card.Title>Autopartes</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Button variant="primary">Control de invetario</Button>
                                </Card.Body>
                         </Card>
                         <br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://xsalesmobility.com/es/wp-content/uploads/sites/4/xsales-vendedor-driver-detail-illustration@2x.png" height={'180px'}/>
                            <Card.Body>
                            <Card.Title>Control de ventas</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Ventas empleado</Button>
                            </Card.Body>
                    </Card>
                    <br></br>
                    </div>
                    <div className="col">
                    <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/007/007/094/non_2x/invoice-illustration-on-a-background-premium-quality-symbols-icons-for-concept-and-graphic-design-vector.jpg" height={'180px'}/>
                            <Card.Body>
                            <Card.Title>Facturas</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Facturas de clientes</Button>
                            </Card.Body>
                    </Card>
                    <br></br>
                    </div>
                    <div className="col">
                         <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/260/279/original/set-icon-cars-service-free-vector.jpg" height={'180px'}/>
                            <Card.Body>
                            <Card.Title>Categorias</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">categorías productos</Button>
                            </Card.Body>
                        </Card>
                        <br></br>
                    </div>
                </div>
     
                <div className="row">
                    <div className="col">
                    <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/424/492/original/vector-users-icon.jpg" height={'160px'}/>
                            <Card.Body>
                            <Card.Title>Usuarios</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Administrar usuarios</Button>
                            </Card.Body>
                    </Card>
                    <br></br>
                    </div>
                    <div className="col">
                        
                    <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={logo} height={'160px'}/>
                            <Card.Body>
                            <Card.Title>Sucursales</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Ver sucursales</Button>
                            </Card.Body>
                    </Card>
                    <br></br>
                    </div>
                    <div className="col">

                    </div>
                    
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body>
                        Este sistema es para 
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Dudas sobre el funcionamiento</Accordion.Header>
                        <Accordion.Body>
                            Toda duda o pregunta sobre las funcionalidades del sistema 
                        </Accordion.Body>
                    </Accordion.Item>
                 </Accordion>
         <br></br>
            </div>
            </Row>
        </Container>
    )
}
export default HomePage;