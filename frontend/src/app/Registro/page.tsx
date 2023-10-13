'use client';
import styles from './styles.module.css'
import React from 'react';
import Barra from '../../components/barra/barra';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';

const Registro = () => {


        const [nombres, setNombres] = useState('');
        const [apellidos, setApellidos] = useState('');
        const [correo, setCorreo] = useState('');
        const [contrasena, setContrasena] = useState('');

        const handleRegistrar = () => {
            if (isEmpty(nombres) || isEmpty(apellidos) || isEmpty(correo) || isEmpty(contrasena)) {
              alert('Por favor, completa todos los campos.');
            } else {
              // Realiza la lógica de registro o cualquier otra acción aquí
              console.log('Nombres:', nombres);
              console.log('Apellidos:', apellidos);
              console.log('Correo:', correo);
              console.log('Contraseña:', contrasena);

              window.location.href = '/Login';
            }
          };


          const isEmpty = (str) => {
            return str.trim() === '';
          };
        
          useEffect(() => {
            // Restablece los valores de los campos cuando el componente se monta
            setNombres('');
            setApellidos('');
            setCorreo('');
            setContrasena('');
          }, []); 

    return( 
        <div className={styles.fondo}>
         <div className={styles.cointainer}>

            <h1>Registro</h1>

            <div className={styles.columna}>
                 <div className={styles.items}>
                     <div className={styles.label}><label>Nombres</label> </div>
                     <Form.Control id='inputs' type="text" size="sm" placeholder="" className={styles.inputs} onChange={(e) => setNombres(e.target.value)} />
                 </div>

                <div className={styles.items}>
                 <div className={styles.label}><label>Apellidos</label> </div>
                    <Form.Control type="text" size="sm" placeholder="" className={styles.inputs} onChange={(e) => setApellidos(e.target.value)}/>
                </div>
            </div>

            <div className={styles.columna}>
                 <div className={styles.items}>
                     <div className={styles.label}><label>Correo</label> </div>
                     <Form.Control id='inputs' type="text" size="sm" placeholder="" className={styles.inputs} onChange={(e) => setCorreo(e.target.value)}/>
                 </div>

                <div className={styles.items}>
                 <div className={styles.label}><label>Contraseña</label> </div>
                    <Form.Control type="text" size="sm" placeholder="" className={styles.inputs} onChange={(e) => setContrasena(e.target.value)}/>
                </div>
            </div>
            
            <div className={styles.space}>

            </div>

            <div className={styles.boton}>
                <Button variant="warning" onClick={handleRegistrar} >Registrar</Button>{' '}
                
            </div>

         </div>
        </div>

    
    )
}

export default Registro;