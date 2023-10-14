'use client';
import styles from './page.module.css'
import React from 'react';
import Inicio from './Inicio/page';
import 'bootstrap/dist/css/bootstrap.css'

const inicio = () => {
    return( 
        <div className={`${styles.fondo} row`}>
        
        <Inicio></Inicio>
        <div></div>

        </div>

    
    )
}

export default inicio;
