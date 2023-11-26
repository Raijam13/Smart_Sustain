
const Movimientos = async function(id){
    const retorno = []
    
    let total= 0;
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/visualizar_objetivos/',
    {

        
        cache: "no-store",
        method: 'POST',
        body: JSON.stringify({
            usuario_id: id
        })
    })
    const data = await response.json();
    const list = data.objetivos
    list.forEach(element => {
        let titulo = element.nombre
        let cant_des = element.cantidad_deseada
        let cant_alc = element.cantidad_alcanzada
        let fecha_inicio = element.fecha_inicio
        let fecha_fin = element.fecha_fin
        let elemento = <tr>
            <td>{titulo}</td>
            <td>{cant_des}</td>
            <td>{cant_alc}</td>
            <td>{fecha_inicio}</td>
            <td>{fecha_fin}</td>
        </tr>
        retorno.push(elemento)
    });
    return retorno
}

export default Movimientos;