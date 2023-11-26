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

function validarCorreo(correo){
    let formatoCorreo1 = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let formatoCorreo2 = /^[a-zA-Z0-9._%+-]+@hotmail\.com$/;

    if (formatoCorreo1.test(correo) || formatoCorreo2.test(correo) ){
        return true;
    }
    else{
        return false;
    }
}

function validarContraseña(contraseña){
    let caracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let mayuscula = /[A-Z]/;

    if (caracterEspecial.test(contraseña) || mayuscula.test(contraseña) ){
        return true;
    }
    else{
        return false;
    }
}


const Registro = () => {


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
                            <input type="text" maxLength = "50" className={Styles.form_control} name="Nombres" placeholder="Nombres:" id="registro_nombres" />
                        </Row>
                        <Row>
                            <input type="text" maxLength = "50" className={Styles.form_control} name="Apellidos"  placeholder="Apellidos:" id="registro_apellidos" />
                        </Row>
                        <Row>
                            <input type="text" maxLength = "100" className={Styles.form_control} name="correo"  placeholder="Correo electrónico:" id="registro_correo" />
                        </Row>
                        <Row>
                            <input type="password" maxLength = "50" className={Styles.form_control} name="contraseña"  placeholder="Contraseña:" id="registro_contraseña" />
                        </Row>
                    </Col>

                    <Col md={{ span: 0, offset: 0 }}>
                        <Link href='/Login'> <Button type="submit" className= {Styles.registrarse} onClick={function(){
                            let nombres = document.getElementById("registro_nombres").value
                            let apellidos = document.getElementById("registro_apellidos").value
                            let correo = document.getElementById("registro_correo").value
                            let contraseña = document.getElementById("registro_contraseña").value

                         
                            if (nombres === '' || apellidos === '' || correo === '' || contraseña === '') {
                             alert('Por favor, complete todos los campos.');
                             return;
                           }

                            if (nombres.length<2 || nombres.length > 50){
                                alert('El nombre debe de contar entre 2 a 50 caracteres');
                                return;
                            }
                            if (apellidos.length <2 || apellidos.length > 50){
                                alert('El apellido debe de contar entre 2 a 50 caracteres');
                                return;
                            }
                            if (correo.length <11 || correo.length > 100 ){
                                alert('El correo debe de contar entre 11 a 100 caracteres');
                                return;
                            }
                            if (validarCorreo(correo) === false){
                                alert('El correo debe de ser gmail o hotmail');
                            }
                            if (contraseña.length < 8){
                                alert('La contraseña debe de ser mayor de 8 caracteres');
                                return;
                            }
                            if (validarContraseña(contraseña) === false){
                                alert('La contraseña debe de contener un caracter especial y una mayuscula');
                            }
                            else{
                                registro(nombres,apellidos,correo,contraseña)
                           }
                            
                         
                        }}  >Registrarme</Button></Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Registro