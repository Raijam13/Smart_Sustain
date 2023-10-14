'use client';
import styles from './Barra.module.css'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEarthAmericas, faList} from "@fortawesome/free-solid-svg-icons";

function Elemento(props){
         return <a href={props.enlace} className={`${styles.nav_superior} col`}>{props.icono}{props.texto}</a>
}

function barra_superior(){
    const enlaces = ['/Perfil', '/Notificaciones' , '/Categorias' ]
    const textos = ['   Mi perfil', '   Notificaciones', '   Mis categorías',]
    const iconos = [<FontAwesomeIcon icon={faUser} />, <FontAwesomeIcon icon={faEarthAmericas} />, <FontAwesomeIcon icon={faList} /> ]
    const bar = []
    for (let i = 0; i < enlaces.length; i++) {
        bar.push(<Elemento enlace = {enlaces[i]} icono = {iconos[i]} texto = {textos[i]}/>)
        
    }
    return <div className={`${styles.fondo} row`}>{bar}</div>
}

export default barra_superior;