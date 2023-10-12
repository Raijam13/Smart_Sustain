const peticion = async function(){
    const retorno = []
    const response = await fetch (`http://127.0.0.1:8000/smartsustain/movimientos`,
    {
        method: 'POST',
        body: JSON.stringify({
            usuario: 1
        })
    })
    const data = await response.json();
    const list = data.lista
    list.forEach(element => {
        let persona = element.usuario
        let categoria = element.categoria
        let cantidad = element.cantidad
        let fecha = element.fecha
        let elemento = <tr>
            <td>{persona}</td>
            <td>{categoria}</td>
            <td>{cantidad}</td>
            <td>{fecha}</td>
        </tr>
        retorno.push(elemento)
    });
    return retorno
}

const MovApi = {peticion}

export default MovApi