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
                            <input type="text" className={Styles.form_control} name="Nombres" placeholder="Nombres:" />
                        </Row>
                        <Row>
                            <input type="text" className={Styles.form_control} name="Apellidos"  placeholder="Apellidos:" />
                        </Row>
                        <Row>
                            <input type="text" className={Styles.form_control} name="correo"  placeholder="Correo electrónico:" />
                        </Row>
                        <Row>
                            <input type="password" className={Styles.form_control} name="contraseña"  placeholder="Contraseña:" />
                        </Row>
                    </Col>

                    <Col md={{ span: 0, offset: 0 }}>
                        <Link href='/Login'> <Button type="submit" className= {Styles.registrarse}>Registrarme</Button></Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Registro