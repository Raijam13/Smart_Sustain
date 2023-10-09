'use client';
import styles from './Barra.module.css'
import React, {Component} from 'react';


const barra = () => { 
    return(
        <div  className={styles.fondo}>

         
            <div className={styles.nav}><a href="/Inicio">Inicio</a></div> 
            <div className={styles.nav}><a href="/Objetivos">Objetivos</a></div>  
            <div className={styles.nav}><a href="/Estadisticas">Estadisticas</a></div>  
            <div className={styles.nav}><a href="/Familia">Familia</a></div>  
        </div>
    );
};

export default barra;