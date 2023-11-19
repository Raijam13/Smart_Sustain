'use client';
import Styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import logOut from "../Imagenes/LogOut.png";
import background from "../Imagenes/background.jpg"


let userdata = {
    resp: "no_login",
    id: "N/A",
    user:"no_login"}

    localStorage.setItem('userData', JSON.stringify(userdata));
const CerrarSesion = () => {

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
                        <Image className= {Styles.imagen_logo_out}
                            src={logOut}
                            alt="logo_out"
                        /> 
                    </Col>
                    <Col className={Styles.title_login}>
                        <p>¡Gracias por utilizar Smart Sustain!</p>
                    </Col>
                    <Col className={Styles.title2_login}>
                        <p>Cuenta cerrada exitosamente</p>
                    </Col>
                    <Col className={Styles.title2_login}>
                        <p>¡Vuelva pronto!</p>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default CerrarSesion