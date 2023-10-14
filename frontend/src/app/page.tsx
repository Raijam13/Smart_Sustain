'use client';
import styles from './page.module.css'
import React from 'react';
import Barra from '../components/barra/barra_superior';
import 'bootstrap/dist/css/bootstrap.css'

const inicio = () => {
    return( 
        <div className={`${styles.fondo} row`}>
        
        <Barra></Barra>
        <div></div>
            
           

        </div>

    
    )
}

export default inicio;
