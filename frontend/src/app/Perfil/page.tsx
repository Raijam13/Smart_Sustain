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
import Barra from '../../components/barra/barra';
import logo_perfil from "../Imagenes/Perfil.png";

const Perfil = () => {

  const router = useRouter();

  const handleModificarPerfil = () => {
    router.push('./ModificarPerfil'); 
  };

  const handleInicio = () => {
    router.push('./Inicio'); 
  };

  return(
        <Container  fluid className={Styles.Login}>
              <Image
                src={background}
                alt="fondo_login"
                layout='fill'
                objectFit='cover'
                />

              <Row className={Styles.barra}>
                  <Barra></Barra>
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
                        <Row>
                            <input type="text" className={Styles.form_control} name="Nombre" placeholder="Nombre: Rosa María" />
                        </Row>
                        <Row>
                            <input type="text" className={Styles.form_control} name="apellido" placeholder="Apellidos: Torres Díaz"/>
                        </Row>
                        <Row>
                            <input type="text" className={Styles.form_control} name="correo" placeholder="Correo electrónico: rtorres@gmail.com" />
                        </Row>
                        <Row>
                            <input type="password" className={Styles.form_control} name="contraseña" placeholder="Contraseña: *********" />
                        </Row>
                        <Row>
                            <input type="texto" className={Styles.form_control} name="usuario" placeholder="Usuario: rTorres" />
                        </Row>
                        <Row>
                            <input type="texto" className={Styles.form_control} name="parentesco" placeholder="Parentesco: Titular  " />
                        </Row>
                    </Col>
                    <Row fluid>
                        <Col className={Styles.modificar}>
                            <Button  onClick={handleModificarPerfil} className= {Styles.modificar_boton}>Modificar datos</Button>{' '}
                        </Col>
                        <Col className={Styles.eliminar}>
                            <Button  className= {Styles.eliminar_boton}>Eliminar cuenta</Button>{' '}
                        </Col>
                    </Row>
              </Col>

              

        </Container>
        
    );
  
}
export default Perfil