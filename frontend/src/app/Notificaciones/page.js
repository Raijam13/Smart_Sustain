'use client';
import Styles from './styles.module.css'
import React, {Component} from 'react';
import barra_superior from '../../components/barra/barra_superior.tsx'
import Barra_inferior from '../../components/barra/barra_inferior';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import background from '../Imagenes/background.jpg';
import { useState } from 'react';


const notificaciones = () => {


const[celdas,setCeldas] = useState();

const agregarFila = () => {
    setCeldas(celdas + 1);
  };


    return(
        <div className={Styles.render}>
      {/* Barra superior (puedes incluir aquí tu componente 'barra_superior') */}
      <div className={Styles.barra_superior}>
        {/* Aquí puedes incluir tu componente 'barra_superior' */}
      </div>

      <div className={Styles.content}>
        <div className={Styles.panel}>
          <div className={Styles.Titulo}>
            <h1>Notificaciones</h1>
          </div>

          <div className={Styles.bandeja}>
            {/* Tabla con encabezado y filas generadas dinámicamente */}
            <table>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>

            {/* Botón para agregar una fila cuando se hace clic */}
            <button onClick={agregarFila}>Agregar Fila</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default notificaciones;