'use client';
import styles from './styles.module.css';
import logo from '../../../logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const login = () => {
    return(
        <div className={styles.fondo}>
            <div className={styles.form}>
                <div className={styles.titulo}>
                    <h1>Login</h1>
                </div>
                <div className={styles.logo}></div>
                <div className={styles.container}>  
                      <Form.Control type="text" placeholder="Usuario" className={styles.inputs} />

                      <Form.Control type="text" placeholder="Contraseña" className={styles.inputs} />
                </div>
                
                <div className={styles.boton}>
                     <Button variant="warning">Warning</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default login
