'use client';
import styles from './styles.module.css'
import React from 'react';
import Barra from '../../components/barra/barra_superior';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import peticion from '../../api/Movimientos.js'


let total = 0


/*

const peticion = async function(){
    const retorno = []
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/movimientos',
    {

        
        cache: "no-store",
        method: 'POST',
        body: JSON.stringify({
            usuario: 1
        })
    })
    const data = await response.json();
    const list = data.lista
    total = 0
    list.forEach(element => {
        let persona = element.usuario
        let categoria = element.categoria
        let cantidad = element.cantidad
        total = total+cantidad
        let fecha = element.fecha
        let elemento = <tr>
            <td>{persona}</td>
            <td>{categoria}</td>
            <td>{cantidad}</td>
            <td>{fecha}</td>
        </tr>
        retorno.push(elemento)
    });
    return retorno
}
*/

/*
const cache  = () => {
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;
    console.log(userrData.id)
}
*/


const movimientos = () => {
    /*let usuarioCache= cache()
    let tabla = await peticion()*/

    let tabla

    useEffect(() => {
        
        const storedUserData = localStorage.getItem('userData');
        const datos = storedUserData ? JSON.parse(storedUserData) : null;
         alert(datos.id)
         let tabla=  peticion(datos.id)
        
        


    }, []);


    
    return( 
        <div className={styles.fondo}>
        
        <Barra/>
        <div><h1 className={`${styles.titulo} row`}>Movimientos</h1>
        <h2>Gastos netos este mes</h2>
        <p><b>${total}</b></p>
        <h2>Lista de movimientos</h2>
        <table className={styles.tabla}>
            <tr>
                <th>Persona</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>Fecha</th>
                {tabla}
            </tr>
           
        </table></div>
        </div>

    
    )
}

export default movimientos;