'use client';
import Styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import logoInicio from "../Imagenes/logoInicio.jpg";
import background from "../Imagenes/background.jpg"
import Link from 'next/link';


const PaginaInicial = () => {

    return(
        <Container fluid className={Styles.Registro}>
            <Image
                src={background}
                alt="fondo_login"
                layout='fill'
                objectFit='cover'
                />
            <Row>
                <Col md={{ span: 2, offset: 2 }} className={Styles.create_inicio}>
                    <Col className={Styles.title_login}>
                        <p>¿No sabes cómo administrar tus ingresos y gastos?</p>
                    </Col>
                    <Col className={Styles.title2_login}>
                        <p>Smart Sustain es la plataforma ideal para ti ...</p>
                    </Col>
                    <Col>
                        <Image className= {Styles.imagen_inicio}
                            src={logoInicio}
                            alt="logo_Inicio"
                        /> 
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                        <Link href='/Login'> <Button type="submit" className= {Styles.ingresar}>Ingresar</Button></Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default PaginaInicial