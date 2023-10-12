'use client';
import styles from './styles.module.css'
import React from 'react';
import Barra from '../../components/barra/barra';

const inicio = () => {
    
    let tabla = [<tr><td>Comida</td><td>30</td><td>Almuerzo en restaurante</td><td>05/10 13:00</td></tr>,
                <tr><td>Transporte</td><td>5</td><td>Pasajes</td><td>05/10 11:00</td></tr>,
                <tr><td>Entretenimiento</td><td>15</td><td>Suscripcion netflix</td><td>03/10 22:18</td></tr>]
    return( 
        <div className={styles.fondo}>
        
        <Barra></Barra>
        <div><h1 className={styles.titulo}>Movimientos</h1>
        <h2>Mi balance</h2>
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