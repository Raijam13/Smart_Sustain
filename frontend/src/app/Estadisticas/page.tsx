'use client';
import 'bootstrap/dist/css/bootstrap.css'
import Styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react';
import background from "../Imagenes/background.jpg"
import Image from 'next/image';
import Barra_superior from '../../components/barra/barra_superior';
import Barra_inferior from '../../components/barra/barra_inferior';
import logo_perfil from "../Imagenes/Perfil.png";
import cargarperfil from '../../api/perfil.js'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useRouter } from 'next/navigation';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  width: 1, // Ajusta el ancho según tus necesidades
  height: .5 // Puedes ajustar esto según tus preferencias
};

export const data = {
  labels: ['Alimentos', 'Ropa y Calzado', 'Transporte', 'Agua'],
  datasets: [
    {
      label: 'Monto Gastado',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const Familia = () => {

  const [nombre, setNombre] = useState("")
  const [modalShow, setModalShow] = React.useState(false);
  const [eliminarMiembroModalShow, setEliminarMiembroModalShow] = React.useState(false);
  let id

  useEffect(function () {
    const storedUserData = localStorage.getItem('userData');
    const datos = storedUserData ? JSON.parse(storedUserData) : null;
    id = datos.id
    cargarperfil(id).then(user => {
      setNombre(user.nombre)
    }
    )
  })

  return (
    <Container fluid className={Styles.Login}>
      <Image
        src={background}
        alt="fondo_login"
        layout='fill'
        objectFit='cover'
      />

      <Row className={Styles.barra_superior}>
        <Barra_superior></Barra_superior>
      </Row>
      <Row>
      <Col md={{ span: 4, offset: 2 }} className={Styles.create_login}>

        <Row>
          <Col className={Styles.cabecera}>
            <p>Gastos personales por categoría</p>
          </Col>
        </Row>
        <Row>
        </Row>
        <Col className={Styles.PieChart}>
        <Pie data={data}  options = {options}/>
        </Col>
      </Col>
      <Col md={{ span: 4, offset: 6 }} className={Styles.create_login}>

      <Row>
        <Col className={Styles.cabecera}>
          <p>Gastos familiares por categoría</p>
        </Col>
      </Row>
      <Row>
      </Row>
      <Col className={Styles.PieChart}>
      <Pie data={data}  options = {options}/>
      </Col>
      </Col>
      </Row>

      <Row className={Styles.barra_inferior}>
        <Barra_inferior></Barra_inferior>
      </Row>
    </Container>




  );

}
export default Familia