'use client';
import styles from './styles.module.css';
import logo from '../../../logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



const login = () => {

    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');

    const handleValidar = () => {
        // Puedes acceder a los valores de los campos a través del estado
        

        if( correo ==  " "){
            console.log("ingrese un correo valido");
        }

        
        
        // Realiza la lógica de validación o cualquier otra acción aquí
      };
    
    return(
        <div className={styles.fondo}>
            <div className={styles.form}>
                <div className={styles.titulo}>
                    <h1>Login</h1>
                </div>
                <div className={styles.logo}></div>
                <div className={styles.container}>  
                      <Form.Control type="text" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)}  className={styles.inputs} id='correo' />

                      <Form.Control type="text" placeholder="Contraseña" value={contra} onChange={(e) => setContra(e.target.value)} className={styles.inputs} id='contra'/>
                </div>
                
                <div className={styles.boton}>
                     <Button variant="warning" onClick={handleValidar} >Warning</Button>{' '}
                     
                </div>
            </div>
        </div>
    )
}

export default login
