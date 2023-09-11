import Image from 'next/image'
import styles from './page.module.css'
import barra from '../components/barra/Barra.jsx';

export default function Home() {
  return (
    <main className={styles.main}>
        <barra> si</barra>
    </main>
  )
}
