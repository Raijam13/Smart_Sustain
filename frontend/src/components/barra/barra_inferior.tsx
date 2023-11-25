'use client';
import styles from './Barra.module.css'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faBullseye, faChartSimple, faPeopleRoof, faChartPie} from "@fortawesome/free-solid-svg-icons";

function Elemento(props){
         return <a href={props.enlace} className={`${styles.nav_inferior} col`}>{props.icono}{props.texto}</a>
}

function barra_inferior(){
    const enlaces = ['/Inicio', '/Objetivos', '/Movimientos' , '/CrearyunirFamilia', '/Estadisticas' ]
    const textos = ['   Inicio', '   Mis objetivos', '   Mis movimientos', '   Mi grupo familiar', '   Estadísticas']
    const iconos = [ <FontAwesomeIcon icon={faHouseChimney} />, <FontAwesomeIcon icon={faBullseye} />, <FontAwesomeIcon icon={faChartSimple} />, <FontAwesomeIcon icon={faPeopleRoof}/>, <FontAwesomeIcon icon={faChartPie}/>]
    const bar = []
    for (let i = 0; i < enlaces.length; i++) {
        bar.push(<Elemento enlace = {enlaces[i]} icono = {iconos[i]} texto = {textos[i]}/>)
        
    }
    return <div className={`${styles.fondo} row`}>{bar}</div>
}

export default barra_inferior;