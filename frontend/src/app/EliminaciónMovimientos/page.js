'use client';
import Styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
<Route path="/eliminarmovimiento" component={EliminarMovimiento} />

const EliminarMovimiento = () => {
    // Definir un estado para almacenar los movimientos
    const [movimientos, setMovimientos] = useState([]);
    
    
    useEffect(() => {
      // acá se puede hacer una solicitud api o cargar los datos
   
      const movimientosData = [
        { id: 1, descripcion: 'Gasto 1', monto: 100 },
        { id: 2, descripcion: 'Ingreso 1', monto: 200 },
        { id: 3, descripcion: 'Gasto 2', monto: 50 },
      ];
  
      setMovimientos(movimientosData);
    }, []);
  
    // Función para eliminar un movimiento por su ID
    const eliminarMovimiento = (id) => {
      
      setMovimientos((movimientos) => movimientos.filter((movimiento) => movimiento.id !== id));
    };
  
    return (
      <div className={Styles.eliminarMovimiento}>
        <h1>Eliminar Movimiento Contable</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descripción</th>
              <th>Monto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map((movimiento) => (
              <tr key={movimiento.id}>
                <td>{movimiento.id}</td>
                <td>{movimiento.descripcion}</td>
                <td>${movimiento.monto}</td>
                <td>
                  <Button variant="danger" onClick={() => eliminarMovimiento(movimiento.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };
  
  export default EliminarMovimiento;