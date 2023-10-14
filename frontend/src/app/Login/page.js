'use client';
import Styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import logo from "../Imagenes/logo.jpg";
import background from "../Imagenes/background.jpg";
import Link from 'next/link';
import DAO from '../../patrones/DAO.ts' 
import { useState, useEffect } from 'react';

let userdata = {id: "N/A",
                resp: "no_login"}

const peticion = async function(mail, passw){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/login', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            email : mail,
            password : passw
        }),
    })
    const data = await response.json()
    userdata = data
}

const login = () => {
    
    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');


    const isEmpty = (str) => {
        return str.trim() === '';
      };

    const handleValidar = () => {
        if (isEmpty(correo) || isEmpty(contra)) {
          alert('Porfavor ingrese unas credenciales validas');
        } else {
          // Realiza la lógica de validación o cualquier otra acción aquí
          console.log('Correo:', correo);
          console.log('Contraseña:', contra);
        }
      };    

    return(
        <Container fluid className={Styles.Login}>
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
                        <p>¡Bienvenido a Smart Sustain!</p>
                    </Col>
                    <Col >  
                    <Row>
                            <input type="email" className={Styles.form_control} name="correo" id="login_mail" placeholder="Correo electrónico" />
                        </Row>
                        <Row>
                            <input type="password" className={Styles.form_control} name="contraseña" id="login_pw" placeholder="Contraseña" />
                        </Row>
                    </Col>
                    <Col  className={Styles.text_help1}>
                        <p>¿Olvidaste tu contraseña?</p>
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Button type="submit" class= {Styles.ingresar} onClick={function()
                            {   let mail = document.getElementById("login_mail").value
                                let pw = document.getElementById("login_pw").value
                                peticion(mail, pw)
                                }}>Iniciar sesión</Button>
                    </Col>
                    <Col  className={Styles.text_help2}>
                        <p>¿No estás registrado?</p>
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Link href='/Registro'> <Button type="submit" className= {Styles.registrarse} >Registrarme</Button></Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default login