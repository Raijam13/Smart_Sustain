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
import logo_perfil from "../Imagenes/Perfil.png";
import cargarperfil from '../../api/perfil.js'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useRouter } from 'next/navigation';
import Crear from '../../api/crearfamilia.js'

function CrearFamilia(props) {
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const router = useRouter();
    const storedUserData = localStorage.getItem('userData');
    const datos = storedUserData ? JSON.parse(storedUserData) : null;

    const [nombre, setNombre] = useState("")
    const [desc, setDesc] = useState("")
    
    const handleCrearFamilia  = () => {
        const id = datos.id
        Crear(id, nombre, desc)
        
        setMostrarAlerta(true);
        setTimeout(() => {
        setMostrarAlerta(false);
        router.push('/Familia');
      // Redirige a otra pestaña después de mostrar la alerta y cerrar el modal
        }, 1300);
      };

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className ={Styles.title_cambio}>
            <Modal.Title>Creando una familia</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className={Styles.grupo_datos}>
                <Form.Label className={Styles.datos_modificar} >Apodo de familia </Form.Label>
                <Form.Control
                    className={Styles.boton_datos_modificar}
                  placeholder="Escribir apodo"  
                  id="apodo"
                  autoFocus
                  onChange={event => setNombre(event.target.value)}
                />
              </Form.Group>
              <Form.Group >
              <Form.Label className={Styles.datos_modificar}>Descripción</Form.Label>
              <Form.Control 
              className={Styles.boton_datos_modificar}
              as="textarea" 
              placeholder="Escribir una pequeña descripción "  
              id="descripcion"
              rows={3} onChange={event => setDesc(event.target.value)}/>
            </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className={Styles.boton_cerrar} onClick={props.onHide}>
              Cerrar
            </Button>
            <Button className={Styles.boton_crear} onClick={handleCrearFamilia}>
              Crear familia
            </Button>
          </Modal.Footer>
           {/* Renderiza la alerta si mostrarAlerta es true */}
           {mostrarAlerta && (
                    <Alert variant="success">
                        <Alert.Heading>¡Éxito!</Alert.Heading>
                        <p>Has creado una familia con éxito.</p>
                    </Alert>
                    )}
        </Modal>
    );
  }



  function UnirFamilia(props) {
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const router = useRouter();
    
    const handleUnirFamilia  = () => {
        
        
        setMostrarAlerta(true);
        setTimeout(() => {
        setMostrarAlerta(false);
        router.push('/Familia');
      // Redirige a otra pestaña después de mostrar la alerta y cerrar el modal
        }, 1300);
      };

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className ={Styles.title_cambio}>
            <Modal.Title>Uniendose a una familia</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className={Styles.grupo_datos}>
                <Form.Label className={Styles.datos_modificar} >Apodo de familia </Form.Label>
                <Form.Control
                    className={Styles.boton_datos_modificar}
                  placeholder="Escribir apodo"  
                  id="apodo"
                  autoFocus
                />
            </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className={Styles.boton_cerrar} onClick={props.onHide}>
              Cerrar
            </Button>
            <Button className={Styles.boton_crear} onClick={handleUnirFamilia}>
              Crear familia
            </Button>
          </Modal.Footer>
           {/* Renderiza la alerta si mostrarAlerta es true */}
           {mostrarAlerta && (
                    <Alert variant="success">
                        <Alert.Heading>¡Éxito!</Alert.Heading>
                        <p>Has creado una familia con éxito.</p>
                    </Alert>
                    )}
        </Modal>
    );
  }





const CrearyunirFamilia = () => {

  const [nombre, setNombre] = useState("")
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  let id

  useEffect(function(){
    const storedUserData = localStorage.getItem('userData');
    const datos = storedUserData ? JSON.parse(storedUserData) : null;
    id = datos.id
    cargarperfil(id).then(user =>{
        setNombre(user.nombre)
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
                        <Col xs={2}> 
                            <Image  className= {Styles.imagen_logo_perfil}
                                    src={logo_perfil}
                                    alt="logo_perfil"
                                />
                        </Col>
                        <Col  xs={9} className = {Styles.cabecera}>                   
                            <p>Bienvenido, {nombre}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className= {Styles.texto_inicial}>
                            <p>No estás inscrito a ningún grupo familiar, puedes crear uno o unirte a alguno ya existente:</p>
                        </Col>
                    </Row>
                    <Row>
                    
                        <Col>
                            <Button  onClick={() => setModalShow(true)} size="lg"  className={Styles.botoncrearfamilia}>Crear una familia</Button>
                            <Button  onClick={() => setModalShow2(true)} size="lg"  className={Styles.botonunirFamilia}>Unirse a una Familia</Button>
                        </Col>
                    </Row>
                    <CrearFamilia
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                    <UnirFamilia
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                    />
                    

              </Col>
              <Row className={Styles.barra_inferior}>
                  <Barra_inferior></Barra_inferior>
              </Row>
        </Container>

        

        
    );
  
}
export default CrearyunirFamilia