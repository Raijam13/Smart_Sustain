'use client';
import styles from './styles.module.css'
import React from 'react';
import Barra from '../../components/barra/barra';
import MovApi from '../../api/movimientos.js';
import 'bootstrap/dist/css/bootstrap.css'
    
const peticion = async function(){
    const retorno = []
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/movimientos',
    {
        cache: "no-store",
        method: 'POST',
        body: JSON.stringify({
            usuario: 2
        })
    })
    const data = await response.json();
    const list = data.lista
    list.forEach(element => {
        let persona = element.usuario
        let categoria = element.categoria
        let cantidad = element.cantidad
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

const inicio = () => {
    
    let tabla = [<tr><td>Comida</td><td>30</td><td>Almuerzo en restaurante</td><td>05/10 13:00</td></tr>,
                <tr><td>Transporte</td><td>5</td><td>Pasajes</td><td>05/10 11:00</td></tr>,
                <tr><td>Entretenimiento</td><td>15</td><td>Suscripcion netflix</td><td>03/10 22:18</td></tr>]
    return( 
        <div className={styles.fondo}>
        
        <Barra/>
        <div><h1 className={`${styles.titulo} row`}>Movimientos</h1>
        <h2>Gastos netos este mes</h2>
        <p><b>$123</b></p>
        <h2>Lista de movimientos</h2>
        <table className={styles.tabla}>
            <tr>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>Descripcion</th>
                <th>Fecha</th>
            </tr>
            {tabla}
        </table></div>
        </div>

    
    )
}

export default inicio;