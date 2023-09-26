'use client';
import styles from './Barra.module.css'
import React, {Component} from 'react';


const barra = () => { 
    return(
        <div  className={styles.fondo}>

         
            <div className={styles.home}></div>  
            <div className={styles.tarjet}></div>  
            <div className={styles.stats}></div>   
            <div className={styles.fam}></div>   
                
        </div>
    );
};

export default barra;