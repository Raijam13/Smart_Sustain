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
import { useEffect, useState } from 'react';

const Perfil = () => {

  const router = useRouter();

  const handleModificarPerfil = () => {
    router.push('./ModificarPerfil'); 
  };

  const handleInicio = () => {
    router.push('./Inicio'); 
  };

      return(
        <Container fluid className={Styles.container}>
          <Row >
          <Col sm = {1} className={Styles.arrow}>
            <i className="bi bi-arrow-left" onClick={handleInicio}></i>
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
          <Col className= {Styles.col3}>
            Nombres: Rosa Maria
          </Col>
          <Col className= {Styles.col3}>
            Apellidos: Torres Díaz
          </Col>
          <Col className= {Styles.col3}>
            Usuario: rTorres
          </Col>
          <Col className= {Styles.col3}>
            Contraseña: 12346789
          </Col>
          <Col className= {Styles.col3}>
            Correo electrónico: rtorres@gmail.com
          </Col>
          <Col className= {Styles.col3}>
            Parentesco: Titular
          </Col>
        </Row>
  
        <Row className="text-center" >
          <Col>
          <Button  onClick={handleModificarPerfil} className= {Styles.col4} variant="outline-secondary">Modificar datos</Button>{' '}
          </Col>
          <Col>
          <Button  className= {Styles.col5}variant="outline-danger">Eliminar cuenta</Button>{' '}
          </Col>
          
        </Row>
  
        </Container>
    );
  
}
export default Perfil