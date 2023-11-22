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


function AgregarMiembro(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={Styles.title_cambio}>
        <Modal.Title>Creando una familia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className={Styles.grupo_datos}>
            <Form.Label className={Styles.datos_modificar}>Nombres del familiar </Form.Label>
            <Form.Control
              id="nombresFamiliar"
              autoFocus
            />
          </Form.Group>
          <Form.Group className={Styles.grupo_datos}>
            <Form.Label className={Styles.datos_modificar}>Apellidos del familiar </Form.Label>
            <Form.Control
              id="apellidosFamiliar"
              autoFocus
            />
          </Form.Group>
          <Form.Group >
            <Form.Label className={Styles.datos_modificar}>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              id="descripcion"
              rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className={Styles.boton_cerrar} onClick={props.onHide}>
          Cerrar
        </Button>
        <Button className={Styles.boton_crear}>
          Agregar miembro
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function EliminarMiembro(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={Styles.title_cambio}>
        <Modal.Title>Eliminar miembro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas eliminar a este miembro?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className={Styles.boton_cerrar} onClick={props.onHide}>
          Cerrar
        </Button>
        <Button className={Styles.boton_crear}>
          Eliminar Miembro
        </Button>
      </Modal.Footer>
    </Modal>
  );

}

const Familia = () => {

  const [nombre, setNombre] = useState("")
  const [modalShow, setModalShow] = React.useState(false);
  const [eliminarMiembroModalShow, setEliminarMiembroModalShow] = React.useState(false);
  let id

  useEffect(function () {
    const storedUserData = localStorage.getItem('userData');
    const datos = storedUserData ? JSON.parse(storedUserData) : null;
    id = datos.id
    cargarperfil(id).then(user => {
      setNombre(user.nombre)
    }
    )
  })

  return (
    <Container fluid className={Styles.Login}>
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
            <Image className={Styles.imagen_logo_perfil}
              src={logo_perfil}
              alt="logo_perfil"
            />
          </Col>
          <Col xs={9} className={Styles.cabecera}>
            <p>Bienvenido, {nombre}</p>
          </Col>
        </Row>
        <Row>
          <Col className={Styles.cabecera2}>
            <p>Eres integrante de la Familia: (Ingresar Apodo)</p>
          </Col>
        </Row>
        <Row >
          <Row className={Styles.cabecera3}>
            Integrantes
          </Row>
          <Row className={Styles.form_control}>
          </Row>
          <Row className={Styles.form_control}>
          </Row>
          <Row className={Styles.form_control}>
          </Row>
        </Row>
        <Row >
          <Row className={Styles.cabecera3}>
            Descripción
          </Row>
          <Row className={Styles.form_control_desc}>

          </Row>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => setModalShow(true)} size="lg" className={Styles.botoncrearfamilia}>Añadir miembro</Button>
          </Col>
          <Col>
            <Button onClick={() => setEliminarMiembroModalShow(true)} size="lg" className={Styles.boton_eliminar_miembro}>Eliminar Miembro</Button> 
          </Col>
        </Row>
        <AgregarMiembro
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <EliminarMiembro
        show={eliminarMiembroModalShow}
        onHide={() => setEliminarMiembroModalShow(false)}
        />
      </Col>
      <Row className={Styles.barra_inferior}>
        <Barra_inferior></Barra_inferior>
      </Row>
    </Container>




  );

}
export default Familia