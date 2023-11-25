const Recomendacion = async function(){
    const response = await fetch('http://127.0.0.1:8000/smartsustain/obtenerrecomendacion')
    const data = await response.json()
    const rec = data.rec
    return rec
}

export default Recomendacion