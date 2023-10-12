'use client';
import styles from './Barra.module.css'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'


/*const barra = () => { 
    return(
        <div  className={styles.fondo}>

         
            <div className={styles.nav}><a href="/Inicio">Inicio</a></div> 
            <div className={styles.nav}><a href="/Objetivos">Objetivos</a></div>  
            <div className={styles.nav}><a href="/Estadisticas">Estadisticas</a></div>  
            <div className={styles.nav}><a href="/Perfil">Perfil</a></div>
            <div className={styles.nav}><a href="/Movimientos">Movimientos</a></div>  
        </div>
    );
};*/

function Elemento(props){
         return <a href={props.enlace} className={`${styles.nav} col`}>{props.texto}</a>
}

function barra(){
    const enlaces = ['/', '/Objetivos', '/Estadisticas', '/Perfil', '/Movimientos']
    const textos = ['Inicio', 'Mis objetivos', 'Estadísticas', 'Mi perfil', 'Mis movimientos']
    const bar = []
    for (let i = 0; i < enlaces.length; i++) {
        bar.push(<Elemento enlace = {enlaces[i]} texto = {textos[i]}/>)
        
    }
    return <div className={`${styles.fondo} row`}>{bar}</div>
}

export default barra;