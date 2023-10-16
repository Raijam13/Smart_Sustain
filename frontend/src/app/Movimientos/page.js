'use client';
import Styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/esm/Container';
import React from 'react';
import Barra_superior from '../../components/barra/barra_superior';
import Barra_inferior from '../../components/barra/barra_inferior';
import Image from 'next/image';
import background from '../Imagenes/background.jpg'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useEffect, useState } from 'react';
import peticion from '../../api/Movimientos.js'
import MovTotal from '../../api/MovimientosTotal.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faMoneyCheckDollar, faFileInvoiceDollar} from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import logo_movimientos from "../Imagenes/logo_movimientos.jpg";


/*

const peticion = async function(){
    const retorno = []
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/movimientos',
    {

        
        cache: "no-store",
        method: 'POST',
        body: JSON.stringify({
            usuario: 1
        })
    })
    const data = await response.json();
    const list = data.lista
    total = 0
    list.forEach(element => {
        let persona = element.usuario
        let categoria = element.categoria
        let cantidad = element.cantidad
        total = total+cantidad
        let fecha = element.fecha
        let elemento = <tr>
            <td>{persona}</td>
            <td>{categoria}</td>
            <td>{cantidad}</td>
            <td>{fecha}</td>
        </tr>
        retorno.push(elemento)
    });
    return retorno
}
*/

/*
const cache  = () => {
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;
    console.log(userrData.id)
}
*/


const movimientos = () => {
    /*let usuarioCache= cache()
    let tabla = await peticion()*/
    const [tabla, setTabla] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        
        const storedUserData = localStorage.getItem('userData');
        const datos = storedUserData ? JSON.parse(storedUserData) : null;
        setTabla(peticion(datos.id))
        setTotal(MovTotal(datos.id))

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
                         <p><FontAwesomeIcon icon={faChartSimple}/>  Mis movimientos</p>
                    </Col>
                    <Col className={Styles.title2_login}>
                         <p><FontAwesomeIcon icon={faMoneyCheckDollar}/><strong>  Gastos netos del mes: </strong></p>
                    </Col>
                    <Col className={Styles.title3_login}>
                        <p>${total}</p>     
                    </Col>
                    <Col>
                        <Image className= {Styles.imagen_movimientos_pag}
                            src={logo_movimientos}
                            alt="logo_movimientos"
                        /> 
                    </Col>
                    <Col className={Styles.title2_login}>
                         <p><FontAwesomeIcon icon={faFileInvoiceDollar} /><strong>  Lista de movimientos: </strong></p>
                    </Col>
                    <Col>
                        <Table className={Styles.tabla_datos}>
                            <tr>
                                <th>Persona</th>
                                <th>Cantidad</th>
                                <th>Fecha</th>
                            </tr> 
                            {tabla} 
                        </Table>
                    </Col>
                    <Col className={Styles.modificar_movimiento}>
                            <Button className= {Styles.modificar_boton}>Modificar movimiento</Button>{' '}
                        </Col>
                        <Col className={Styles.eliminar_movimiento}>
                            <Button  className= {Styles.eliminar_boton}>Eliminar movimiento</Button>{' '}
                    </Col>
            </Col>
            <Row className={Styles.barra_inferior}>
                  <Barra_inferior></Barra_inferior>
            </Row>
        </Container>

    
    )
}

export default movimientos;