
const Movimientos = async function(id){
    const retorno = []
    
    let total= 0;
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/movimientos',
    {

        
        cache: "no-store",
        method: 'POST',
        body: JSON.stringify({
            usuario: id
        })
    })
    const data = await response.json();
    const list = data.lista
    total = 0
    list.forEach(element => {
        let persona = element.usuario
        let cantidad = element.cantidad
        total = total+cantidad
        let fecha = element.fecha
        let elemento = <tr>
            <td>{persona}</td>
            <td>{cantidad}</td>
            <td>{fecha}</td>
        </tr>
        retorno.push(elemento)
    });
    return retorno
}

export default Movimientos;