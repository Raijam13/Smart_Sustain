'use client';
import Styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import logoDinero from "../Imagenes/logo_dinero.jpg";
import background from "../Imagenes/background.jpg"
import Link from 'next/link';
import Barra_superior from '../../components/barra/barra_superior';
import Barra_inferior from '../../components/barra/barra_inferior';



const Inicio = () => {

    return(
        <Container fluid className={Styles.Registro}>
            <Image
                src={background}
                alt="fondo_login"
                layout='fill'
                objectFit='cover'
                />
            <Row className={Styles.barra_superior}>
                  <Barra_superior></Barra_superior>
              </Row>
            <Col md={{ span: 2, offset: 2 }} className={Styles.create_inicio}>
                    <Col className={Styles.title_login}>
                        <p>¡Bienvenido a Smart Sustain!</p>
                    </Col>

                    <Col>
                        <Image className= {Styles.imagen_inicio_pag}
                            src={logoDinero}
                            alt="logo_Dinero"
                        /> 
                    </Col>

                    <Col className={Styles.title2_login}>
                        <p>Es momento de empezar a planificar mejor tus gastos ...</p>
                    </Col>
                    
                    <Col md={{ span: 0, offset: 0 }}>
                        <Link href='/Movimientos'> <Button type="submit" className= {Styles.ingresar}>Ir a mis movimientos</Button></Link>
                    </Col>
            </Col>
            <Row className={Styles.barra_inferior}>
                  <Barra_inferior></Barra_inferior>
            </Row>

        </Container>
    )
}

export default Inicio