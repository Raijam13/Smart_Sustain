'use client';
import styles from './page.module.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import PaginaInicial from './PaginaInicial/page';

const inicio = () => {
    return( 
        <div className={`${styles.fondo} row`}>
        
        <PaginaInicial></PaginaInicial>
        <div></div>

        </div>

    
    )
}

export default inicio;
