'use client';
import 'bootstrap/dist/css/bootstrap.css'
import Styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useRouter } from 'next/navigation';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CambiarNombres(props) {

  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cambiar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Nombres">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                placeholder="Escribir nombres"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}


function Cambiarpellidos(props) {
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cambiar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Nombres">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                placeholder="Escribir apellidos"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

function Cambiarcorreo(props) {
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cambiar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Nombres">
            <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}


const Perfil = () => {

  const router = useRouter();

  const handlePerfil = () => {
    router.push('./Perfil'); 
  };

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);

  return(
      <Container fluid className={Styles.container}>
        <Row >
        <Col  sm = {1} className={Styles.arrow}>
          <i className="bi bi-arrow-left icono" onClick={handlePerfil}  ></i>
        </Col>
        <Col sm = {5} className={Styles.col}>
        Perfil
        </Col>  
      </Row>

      <Row className= "flex-column" >
        <Col className= {Styles.col2}>
          <Image src="/perfil1.jpg"
          alt = "No se encuentra"
          width={250}
          height={250} 
          roundedCircle />
        </Col> 
        <Col >
         <button onClick={() => setModalShow(true)} className= {Styles.col3}> Nombres: Angelo Humberto <span  className= {Styles.col3icono}> <i className="bi bi-chevron-right"></i> </span></button>
        </Col> 
        <Col>
        <button  onClick={() => setModalShow2(true)} className= {Styles.col3}> Apellidos: Medina Garnique <span  className= {Styles.col3icono}> <i className="bi bi-chevron-right"></i> </span></button>
        </Col>
        <Col>
        <button onClick={() => setModalShow3(true)} className= {Styles.col3}> Correo electrónico: Angelo Medina <span  className= {Styles.col3icono}> <i className="bi bi-chevron-right"></i> </span></button>
        </Col>
        <Col>
        <button onClick={() => setModalShow(true)} className= {Styles.col3}> Contraseña: 123456789 <span  className= {Styles.col3icono}> <i className="bi bi-chevron-right"></i> </span></button>
        </Col>

        <CambiarNombres
        show={modalShow}
        onHide={() => setModalShow(false)}
        />

        <Cambiarpellidos
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        />

       <Cambiarcorreo
       show={modalShow3}
       onHide={() => setModalShow3(false)}/>

      </Row>

      <Row className="text-center">
        <Col>
        <Button className= {Styles.col5}variant="outline-danger">Eliminar cuenta</Button>{' '}
        </Col>
      </Row>

      </Container>
      

    )
    
}

export default Perfil