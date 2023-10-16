'use client';
import Styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import logo from "../Imagenes/logo.jpg";
import background from "../Imagenes/background.jpg"
import Link from 'next/link';
import registro from '../../api/Registro.js'
import { useState } from 'react';




const Registro = () => {



  

   const enviarRegistro = () => {
   let nombres = document.getElementById("registro_nombres".value);
   let apellidos = document.getElementById("registro_apellidos".value);
   let correo = document.getElementById("registro_correo".value);
   let contraseña = document.getElementById("registro_contraseña".value);

   if (nombres === '' || apellidos === '' || correo === '' || contraseña === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Verifica si la contraseña es un número entero
  if (!Number.isInteger(Number(contraseña))) {
    alert('La contraseña debe ser un número entero.');
    return;
  }
    
    registro(nombres,apellidos,correo,contraseña)

   }
        



    return(
        <Container fluid className={Styles.Registro}>
            <Image
                src={background}
                alt="fondo_login"
                layout='fill'
                objectFit='cover'
                />
            <Row>
                <Col md={{ span: 4, offset: 4 }} className={Styles.create_login}>
                   
                    <Col>
                        <Image className= {Styles.imagen_logo}
                            src={logo}
                            alt="logo_login"
                        /> 
                    </Col>
                    <Col className={Styles.title_login}>
                        <p>Registro de usuario</p>
                    </Col>
                    <Col >  
                        <Row>
                            <input type="text" className={Styles.form_control} name="Nombres" placeholder="Nombres:" id="registro_nombres" />
                        </Row>
                        <Row>
                            <input type="text" className={Styles.form_control} name="Apellidos"  placeholder="Apellidos:" id="registro_apellidos" />
                        </Row>
                        <Row>
                            <input type="text" className={Styles.form_control} name="correo"  placeholder="Correo electrónico:" id="registro_correo" />
                        </Row>
                        <Row>
                            <input type="password" className={Styles.form_control} name="contraseña"  placeholder="Contraseña:" id="registro_contraseña" />
                        </Row>
                    </Col>

                    <Col md={{ span: 0, offset: 0 }}>
                        <Link href='/Login'> <Button type="submit" className= {Styles.registrarse} onClick={enviarRegistro()}  >Registrarme</Button></Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Registro