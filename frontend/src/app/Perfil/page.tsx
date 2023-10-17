'use client';
import 'bootstrap/dist/css/bootstrap.css'
import Styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import background from "../Imagenes/background.jpg"
import Image from 'next/image';
import Barra_superior from '../../components/barra/barra_superior';
import Barra_inferior from '../../components/barra/barra_inferior';
import logo_perfil from "../Imagenes/Perfil.png";
import cargarperfil from '../../api/perfil.js'
import deleteacc from '../../api/deleteacc.js'

const Perfil = () => {

  const router = useRouter();

  const handleModificarPerfil = () => {
    router.push('./ModificarPerfil'); 
  };

  const handleInicio = () => {
    router.push('./Inicio'); 
  };

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  let id

  useEffect(function(){
    const storedUserData = localStorage.getItem('userData');
    const datos = storedUserData ? JSON.parse(storedUserData) : null;
    id = datos.id
    cargarperfil(id).then(user =>{
        setNombre(user.nombre)
        setApellido(user.apellido)
        setEmail(user.email)
        setPw(user.password)
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
                    <Col>
                        <Image className= {Styles.imagen_logo_perfil}
                            src={logo_perfil}
                            alt="logo_perfil"
                        /> 
                    </Col>

                    <Col className={Styles.title_login}>
                        <p>Mi perfil</p>
                    </Col>
                    <Col >  
                        <Row className={Styles.form_control}>
                            Nombre: {nombre}
                        </Row>
                        <Row className={Styles.form_control}>
                           Apellidos: {apellido}
                        </Row>
                        <Row className={Styles.form_control}>
                             Correo electrónico: {email}
                        </Row>
                        <Row className={Styles.form_control}>
                            Contraseña: {pw}
                        </Row>
                        
                    </Col>
                    <Row fluid>
                        <Col className={Styles.modificar}>
                            <Button  onClick={handleModificarPerfil} className= {Styles.modificar_boton}>Modificar datos</Button>{' '}
                        </Col>
                    </Row>
              </Col>
              <Row className={Styles.barra_inferior}>
                  <Barra_inferior></Barra_inferior>
              </Row>
              

        </Container>
        
    );
  
}
export default Perfil