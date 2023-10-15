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


let total = 0


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
                        <p>Mis movimientos</p>
                    </Col>

                <h2>Gastos netos este mes</h2>
                <p><b>${total}</b></p>
                <h2>Lista de movimientos</h2>
                <table className={Styles.tabla}>
                    <tr>
                        <th>Persona</th>
                        <th>Cantidad</th>
                        <th>Fecha</th>
                    </tr>
                    {tabla} 
                </table>
            </Col>
            <Row className={Styles.barra_inferior}>
                  <Barra_inferior></Barra_inferior>
            </Row>
        </Container>

    
    )
}

export default movimientos;