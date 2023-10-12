'use client';
import styles from './styles.module.css'
import React from 'react';
import Barra from '../../components/barra/barra';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const Registro = () => {
    return( 
        <div className={styles.fondo}>
         <div className={styles.cointainer}>

            <h1>Registro</h1>

            <div className={styles.columna}>
                 <div className={styles.items}>
                     <div className={styles.label}><label>Nombres</label> </div>
                     <Form.Control id='inputs' type="text" size="sm" placeholder="" className={styles.inputs} />
                 </div>

                <div className={styles.items}>
                 <div className={styles.label}><label>Apellidos</label> </div>
                    <Form.Control type="text" size="sm" placeholder="" className={styles.inputs} />
                </div>
            </div>

            <div className={styles.columna}>
                 <div className={styles.items}>
                     <div className={styles.label}><label>Correo</label> </div>
                     <Form.Control id='inputs' type="text" size="sm" placeholder="" className={styles.inputs} />
                 </div>

                <div className={styles.items}>
                 <div className={styles.label}><label>Contraseña</label> </div>
                    <Form.Control type="text" size="sm" placeholder="" className={styles.inputs} />
                </div>
            </div>
            
            <div className={styles.space}>

            </div>

            <div className={styles.boton}>
                <Button variant="warning" href='/Login' >Registrar</Button>{' '}
                
            </div>

         </div>
        </div>

    
    )
}

export default Registro;