
import styles from './styles.module.css'
import React from 'react';
import Barra from '../../components/barra/barra';
import MovApi from '../../api/movimientos.js';
    

const movimientos = () => {
    
    let tabla = MovApi.peticion()
    return( 
        <div className={styles.fondo}>
        
        <Barra></Barra>
        <div><h1 className={styles.titulo}>Movimientos</h1>
        <h2>Gastos netos este mes</h2>
        <p><b>$123</b></p>
        <h2>Lista de movimientos</h2>
        <table className={styles.tabla}>
            <tr>
                <th>Persona</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>Fecha</th>
            </tr>
            {tabla}
        </table></div>
        </div>

    
    )
}

export default movimientos;