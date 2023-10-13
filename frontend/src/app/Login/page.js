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


const login = () => {
    /*
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
    */
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
                            <input type="text" className={Styles.form_control} name="correo" id="login" placeholder="Correo electrónico" />
                        </Row>
                        <Row>
                            <input type="password" className={Styles.form_control} name="contraseña" id="login" placeholder="Contraseña" />
                        </Row>
                    </Col>
                    <Col  className={Styles.text_help1}>
                        <p>¿Olvidaste tu contraseña?</p>
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Button type="submit" class= {Styles.ingresar}>Iniciar sesión</Button>
                    </Col>
                    <Col  className={Styles.text_help2}>
                        <p>¿No estás registrado?</p>
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Link href='/Registro'> <Button type="submit" class= {Styles.registrarse}>Registrarme</Button></Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default login