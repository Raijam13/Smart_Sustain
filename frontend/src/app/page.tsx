'use client';
import styles from './page.module.css'
import React from 'react';
import Login from './Login/page';
import 'bootstrap/dist/css/bootstrap.css'

const inicio = () => {
    return( 
        <div className={`${styles.fondo} row`}>
        
        <Login></Login>
        <div></div>

        </div>

    
    )
}

export default inicio;
