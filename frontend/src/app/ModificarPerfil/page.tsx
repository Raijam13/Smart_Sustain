'use client';
import 'bootstrap/dist/css/bootstrap.css'
import Styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useRouter } from 'next/navigation';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import background from "../Imagenes/background.jpg"
import Barra_superior from '../../components/barra/barra_superior';
import Barra_inferior from '../../components/barra/barra_inferior';
import logo_perfil from "../Imagenes/Perfil.png";

function CambiarNombres(props) {

  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className ={Styles.title_cambio}>
          <Modal.Title>Cambiar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={Styles.datos_modificar} controlId="Nombres">
              <Form.Label>Nombres: </Form.Label>
              <Form.Control
                placeholder="Escribir nombres"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Cerrar
          </Button>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Guardar cambios
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
        <Modal.Header closeButton className ={Styles.title_cambio}>
          <Modal.Title>Cambiar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={Styles.datos_modificar}controlId="apellidos">
              <Form.Label>Apellidos: </Form.Label>
              <Form.Control
                placeholder="Escribir apellidos"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Cerrar
          </Button>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Guardar cambios
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
        <Modal.Header closeButton className ={Styles.title_cambio}>
          <Modal.Title>Cambiar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={Styles.datos_modificar} controlId="correo">
            <Form.Label>Correo electrónico: </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Cerrar
          </Button>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

function Cambiarcontraseña(props) {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const [showPassword3, setShowPassword3] = useState(false);

  const togglePasswordVisibility3 = () => {
    setShowPassword3(!showPassword3);
  };
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className ={Styles.title_cambio}>
          <Modal.Title>Cambiar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className={Styles.form} >
           <Form.Group className={Styles.datos_modificar} controlId="contra">
             <FloatingLabel controlId="floatingInput" label="Contraseña actual"> 
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Contraseña actual"
                  className={Styles.form_label}
                  autoFocus
                />
                <div className={Styles.staticIcon} onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
                 </div>             
              </FloatingLabel>
            <FloatingLabel controlId="floatingPassword2" label="Contraseña nueva">
            <Form.Control
                  type={showPassword2 ? 'text' : 'password'}
                  placeholder="Contraseña nueva"
                  className={Styles.form_label}
                  autoFocus
                />
                <div className={Styles.staticIcon} onClick={togglePasswordVisibility2}>
                {showPassword2 ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
                 </div> 
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword3" label="Confirmar contraseña">
            <Form.Control
                  type={showPassword3 ? 'text' : 'password'}
                  placeholder="Confirmar contraseña"
                  className={Styles.form_label}
                  autoFocus
                />
                <div className={Styles.staticIcon} onClick={togglePasswordVisibility3}>
                {showPassword3 ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
                 </div> 
            </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
              Cerrar
          </Button>
          <Button className={Styles.botones_recuadro} onClick={props.onHide}>
              Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

const ModificarPerfil = () => {

  const router = useRouter();

  const handlePerfil = () => {
    router.push('./Perfil'); 
  };

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);

  return(
      <Container fluid className={Styles.Login}>
            <Image
                src={background.src}
                alt="fondo_login"
              />

              <Row className={Styles.barra_superior}>
                  <Barra_superior></Barra_superior>
              </Row>
          <Col md={{ span: 4, offset: 4 }} className={Styles.create_login}>
                    <Col>
                        <Image className= {Styles.imagen_logo_perfil}
                            src={logo_perfil.src}
                            alt="logo_perfil"
                        /> 
                    </Col>  
                    <Col className={Styles.title_login}>
                        <p>Modificar perfil</p>
                    </Col>
              
                  <Row >
                    <button onClick={() => setModalShow(true)} className= {Styles.col3}> Nombres: Rosa María <span  className= {Styles.col3icono}> <i className="bi bi-chevron-right"></i> </span></button>
                  </Row> 
                  <Row>
                    <button  onClick={() => setModalShow2(true)} className= {Styles.col3}> Apellidos: Torres Díaz <span  className= {Styles.col3icono}> <i className="bi bi-chevron-right"></i> </span></button>
                  </Row>
                  <Row>
                    <button onClick={() => setModalShow3(true)} className= {Styles.col3}> Correo electrónico: rtorres@gmail.com <span  className= {Styles.col3icono}> <i className="bi bi-chevron-right"></i> </span></button>
                  </Row>
                  <Row>
                    <button onClick={() => setModalShow4(true)} className= {Styles.col3}> Contraseña: ******** <span  className= {Styles.col3icono}> <i className="bi bi-chevron-right"></i> </span></button>
                  </Row>

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

                <Cambiarcontraseña
                show={modalShow4}
                onHide={() => setModalShow4(false)}/>


                <Col className='eliminar'>
                  <Button className= {Styles.eliminar_boton_modif}>Eliminar cuenta</Button>{' '}
                </Col>
                <Row className={Styles.barra_inferior}>
                  <Barra_inferior></Barra_inferior>
              </Row>
        </Col>
      </Container>
      

    )
    
}

export default ModificarPerfil