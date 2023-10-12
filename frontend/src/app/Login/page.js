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


    const isEmpty = (str) => {
        return str.trim() === '';
      };

    const handleValidar = () => {
        if (isEmpty(correo) || isEmpty(contra)) {
          alert('Porfavor ingrese unas credenciales validas');
        } else {
          // Realiza la lógica de validación o cualquier otra acción aquí
          console.log('Correo:', correo);
          console.log('Contraseña:', contra);
        }
      };


    return(
        <div className={styles.fondo}>
            <div className={styles.form}>
                <div className={styles.titulo}>
                    <h1>Login</h1>
                </div>
                <div className={styles.logo}></div>
                <div className={styles.container}>  
                      <Form.Control type="text" placeholder="Correo" className={styles.inputs} onChange={(e) => setCorreo(e.target.value)} />

                      <Form.Control type="text" placeholder="Contraseña" className={styles.inputs} onChange={(e) => setContra(e.target.value)} />
                </div>
                
                <div className={styles.boton}>
                     <Button variant="warning" onClick={handleValidar}>Warning</Button>{' '}
                     
                </div>
            </div>
        </div>
    )
}

export default login
