'use client';

import barra from '../../components/barra/barra.jsx'
import styles from './styles.module.css'

const inicio = () => {
    return( 
        <div className={styles.fondo}>
        
            <barra></barra>

            <div className={styles.contenido}>

            </div>

        </div>

    
    )
}

export default inicio;