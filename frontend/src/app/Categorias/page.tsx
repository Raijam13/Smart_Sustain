'use client';
import 'bootstrap/dist/css/bootstrap.css'
import Styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react';
import background from "../Imagenes/background.jpg"
import Image from 'next/image';
import Barra_superior from '../../components/barra/barra_superior';
import Barra_inferior from '../../components/barra/barra_inferior';
import Card from 'react-bootstrap/Card';
import cargarCategoria from '../../api/categoria';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Crear_Categoria from '../../api/crearCategoria.js';
import { useRouter } from 'next/navigation';
import Crear from '../../api/crearCategoria';
import ModificarCategoria from '../../api/cambiarCategoria';
import cambiarCategoria from '../../api/cambiarCategoria';

let id = JSON.parse( localStorage.getItem('userData')).id

function EditarCategoria(props) {
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className ={Styles.title_cambio}>
          <Modal.Title>Cambiar categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={Styles.datos_modificar}>
              <Form.Label>Categoría: </Form.Label>
              <Form.Control
                placeholder="Escribir nombre de la categoría"  id="categoria"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Cerrar
          </Button>
          <Button className={Styles.botones_recuadro} 
          onClick={function(){
            const input = document.getElementById("categoria") as HTMLInputElement
            let nombres = input.value
            cambiarCategoria(id, nombres)
            props.onHide();
          }}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

function EliminarCategoria(props) {
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className ={Styles.title_cambio}>
          <Modal.Title>Eliminar categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={Styles.datos_modificar}>
              <Form.Label>¿Estas seguro de eliminar la categoría?</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Cerrar
          </Button>
          <Button className={Styles.botones_recuadro}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

function CrearCategoria(props) {
  const storedUserData = localStorage.getItem('userData');
  const datos = storedUserData ? JSON.parse(storedUserData) : null;

  const [nombreCategoria, setNombreCategoria] = useState("")

  const handleCrearCategoria  = () => {
    const usuario_id = datos.id
    Crear(usuario_id,nombreCategoria)
  };
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className ={Styles.title_cambio}>
          <Modal.Title>Creación de categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={Styles.datos_modificar}>
              <Form.Label>Nombre de Categoría: </Form.Label>
              <Form.Control
                placeholder="Escribir nombre de la categoría"  id="categoria"
                autoFocus
                onChange={event => setNombreCategoria(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subir imagen o icono:</Form.Label>
              <Form.Control type="file" id = "imagen"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Cerrar
          </Button>
          <Button className={Styles.botones_recuadro} onClick={handleCrearCategoria}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

const Categorias = () => {

  const [categoria, setCategoria] = useState("")

  //Editar categorías
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);

  //Eliminar categorías
  const [modalShow5, setModalShow5] = React.useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);
  const [modalShow7, setModalShow7] = React.useState(false);
  const [modalShow8, setModalShow8] = React.useState(false);
  
  //Crear categoría
  const [modalShow9, setModalShow9] = React.useState(false);

  let id

  useEffect(function(){
    const storedUserData = localStorage.getItem('userData');
    const datos = storedUserData ? JSON.parse(storedUserData) : null;
    id = datos.id
    cargarCategoria(id).then(user =>{
        setCategoria(user.nombre)
    }
    )
  })

  return(
        <Container  fluid className={Styles.Login}>
              <Image
                src={background}
                alt="fondo_login"
                layout='fill'
                objectFit='cover'
                />

              <Row className={Styles.barra_superior}>
                 <Barra_superior></Barra_superior>
              </Row>

              <Col md={{ span: 4, offset: 4 }} className={Styles.create_login}>    
                    <Row>
                        <Col className = {Styles.cabecera}>                   
                            <p>Mis categorías</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className= {Styles.texto_inicial}>
                            <p>Aquí podrás agregar, eliminar y editar todas las categorías</p>
                        </Col>
                    </Row>
                    <Row>
                          <Card className= {Styles.card_categoria}>
                          <Card.Body className={`d-flex justify-content-between align-items-center`}>
                            <i className={`bi bi-cookie ${Styles.icono_categoria}`}></i>
                            <span className="ml-2">{categoria}</span>
                            <i  
                            onMouseOver={(e) => e.currentTarget.style.cursor = "pointer"}
                            onMouseOut={(e) => e.currentTarget.style.cursor = "default"}
                            onClick={() => setModalShow(true)} 
                            className={`bi bi-pencil-square ${Styles.icono_editar}`}></i>
                            <i 
                            onMouseOver={(e) => e.currentTarget.style.cursor = "pointer"}
                            onMouseOut={(e) => e.currentTarget.style.cursor = "default"}
                            onClick={() => setModalShow5(true)} 
                            className={`bi bi-trash ${Styles.icono_eliminar}`}></i>
                          </Card.Body>
                          </Card>
                    </Row>
                    <Row>
                    <Card className= {Styles.card_categoria}>
                          <Card.Body className={`d-flex justify-content-between align-items-center`}>
                            <i className={`bi bi-handbag ${Styles.icono_categoria}`}></i>
                            <span className="ml-2">Ropa y calzado</span>
                            <i 
                            onMouseOver={(e) => e.currentTarget.style.cursor = "pointer"}
                            onMouseOut={(e) => e.currentTarget.style.cursor = "default"}
                            onClick={() => setModalShow2(true)} 
                            className={`bi bi-pencil-square ${Styles.icono_editar}`}></i>
                            <i 
                            onMouseOver={(e) => e.currentTarget.style.cursor = "pointer"}
                            onMouseOut={(e) => e.currentTarget.style.cursor = "default"}
                            onClick={() => setModalShow6(true)} 
                            className={`bi bi-trash ${Styles.icono_eliminar}`}></i>
                          </Card.Body>
                          </Card>
                    </Row>
                    <Row>
                    <Card className= {Styles.card_categoria}>
                          <Card.Body className={`d-flex justify-content-between align-items-center`}>
                            <i className={`bi bi-bus-front ${Styles.icono_categoria}`}></i>
                            <span className="ml-2">Transporte</span>
                            <i 
                            onMouseOver={(e) => e.currentTarget.style.cursor = "pointer"}
                            onMouseOut={(e) => e.currentTarget.style.cursor = "default"}
                            onClick={() => setModalShow3(true)} 
                            className={`bi bi-pencil-square ${Styles.icono_editar}`}></i>
                            <i 
                            onMouseOver={(e) => e.currentTarget.style.cursor = "pointer"}
                            onMouseOut={(e) => e.currentTarget.style.cursor = "default"}
                            onClick={() => setModalShow7(true)}
                            className={`bi bi-trash ${Styles.icono_eliminar}`}></i>
                          </Card.Body>
                          </Card>
                    </Row>
                    <Row>
                    <Card className= {Styles.card_categoria}>
                          <Card.Body className={`d-flex justify-content-between align-items-center`}>
                            <i className={`bi bi-droplet ${Styles.icono_categoria}`}></i>
                            <span className="ml-2">Agua</span>
                            <i 
                            onMouseOver={(e) => e.currentTarget.style.cursor = "pointer"}
                            onMouseOut={(e) => e.currentTarget.style.cursor = "default"}
                            onClick={() => setModalShow4(true)}
                            className={`bi bi-pencil-square ${Styles.icono_editar}`}></i>
                            <i 
                            onMouseOver={(e) => e.currentTarget.style.cursor = "pointer"}
                            onMouseOut={(e) => e.currentTarget.style.cursor = "default"}
                            onClick={() => setModalShow8(true)}
                            className={`bi bi-trash ${Styles.icono_eliminar}`}></i>
                          </Card.Body>
                          </Card>
                    </Row>
                    <Row>
                        <Col>
                            <Button  onClick={() => setModalShow9(true)} size="lg"  className={Styles.botoncrearfamilia}>Crear una nueva categoría</Button>
                        </Col>
                    </Row>
              </Col>
              <Row className={Styles.barra_inferior}>
                  <Barra_inferior></Barra_inferior>
              </Row>

              <EditarCategoria
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />
              <EditarCategoria
                  show={modalShow2}
                  onHide={() => setModalShow2(false)}
                  />
              <EditarCategoria
                  show={modalShow3}
                  onHide={() => setModalShow3(false)}
                  />    
              <EditarCategoria
                  show={modalShow4}
                  onHide={() => setModalShow4(false)}
                  />
              <EliminarCategoria
                  show={modalShow5}
                  onHide={() => setModalShow5(false)}
                  />     
              <EliminarCategoria
                  show={modalShow6}
                  onHide={() => setModalShow6(false)}
                  />
              <EliminarCategoria
                  show={modalShow7}
                  onHide={() => setModalShow7(false)}
                  />
              <EliminarCategoria
                  show={modalShow8}
                  onHide={() => setModalShow8(false)}
                  />
              <CrearCategoria
                  show={modalShow9}
                  onHide={() => setModalShow9(false)}
                  />      
        </Container>

        

        
    );
  
}
export default Categorias