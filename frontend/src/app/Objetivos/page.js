'use client';
import Styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/esm/Container';
import Barra_superior from '../../components/barra/barra_superior';
import Barra_inferior from '../../components/barra/barra_inferior';
import Image from 'next/image';
import background from '../Imagenes/background.jpg'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useEffect, useState } from 'react';
import peticion from '../../api/Objetivos.js'
import MovTotal from '../../api/MovimientosTotal.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faMoneyCheckDollar, faFileInvoiceDollar} from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import logo_movimientos from "../Imagenes/logo_movimientos.jpg";

const movimientos = () => {
    /*let usuarioCache= cache()
    let tabla = await peticion()*/
    const [tabla, setTabla] = useState([])

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        const datos = storedUserData ? JSON.parse(storedUserData) : null;
        setTabla(peticion(datos.id))

    }, []);
 
    return( 
        <Container fluid className={Styles.Login}>
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
                         <p><FontAwesomeIcon icon={faChartSimple}/>  Mis Objetivos</p>
                    </Col>
                    <Col>
                        <Image className= {Styles.imagen_movimientos_pag}
                            src={logo_movimientos}
                            alt="logo_movimientos"
                        /> 
                    </Col>
                    <Col>
                        <Table className={Styles.tabla_datos}>
                            <tr>
                                <th>Nombre</th>
                                <th>Deseado</th>
                                <th>Alcanzado</th>
                                <th>Desde</th>
                                <th>Hasta</th>
                            </tr> 
                            {tabla} 
                        </Table>
                    </Col>
                    <Col className={Styles.modificar_movimiento}>
                            <Button className= {Styles.modificar_boton}>Modificar objetivo</Button>{' '}
                        </Col>
                        <Col className={Styles.eliminar_movimiento}>
                            <Button  className= {Styles.eliminar_boton}>Eliminar objetivo</Button>{' '}
                    </Col>
            </Col>
            <Row className={Styles.barra_inferior}>
                  <Barra_inferior></Barra_inferior>
            </Row>
        </Container>

    
    )
}

export default movimientos;