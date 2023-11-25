'use client'
import Styles from './styles.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Barra_superior from '../../components/barra/barra_superior';
import Barra_inferior from '../../components/barra/barra_inferior';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import React from 'react'

function  CrearObjetivos  (props)  {
    return(
        <Modal
             {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
                <Modal.Header>
                    <Modal.Title>Agregar un Objetivo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre del Objetivo</Form.Label>
                            <Form.Control
                            id='nombreObjetivo'
                            autoFocus
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Monto de la Meta</Form.Label>
                            <Form.Control
                            id='monto'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                 <Button onClick={props.onHide}>
                         Cerrar
                          </Button>
                 <Button className={Styles.boton_crear}>
                          Crear Objetivo
                 </Button>
                </Modal.Footer>
        </Modal>

    );
}



const objetivos  = () => {

    const [modalShow, setModalShow] = React.useState(false);


    return(
        <div className={Styles.render}>
            
                 <Barra_superior></Barra_superior>
            
            <div className={Styles.content}>

                <div className={Styles.panel}>

                      
                         <h1 className={Styles.titulos}> Objetivos Financieros </h1>
                        

                        <div className={Styles.navegacion}>

                            <div className={Styles.contador}>
                                <h5>
                                    Objetivos Completados
                                </h5>
                                <h5>
                                    0% 
                                </h5>
                            </div>

                             <div className={Styles.botonGroup}>
                                <Button onClick={() => setModalShow(true)}  className={Styles.botones}>Crear Objetivos</Button>
                            </div>  
                            
                            <CrearObjetivos
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />
                            



                        </div>

                        <div className={Styles.tabla_Container}>
                         <Table className={Styles.tabla}>
                            <tr>
                                <th>Nombre Meta</th>
                                <th>Monto</th>
                                <th>Cantidad Alcanzada</th>
                                <th>Fecha de Inicio</th>
                                <th>Fecha de Fin</th>
                            </tr>
                          
                            
                         </Table>
                        </div>
                        
                </div>

            </div>




        </div>
    )

    
}

export default objetivos;