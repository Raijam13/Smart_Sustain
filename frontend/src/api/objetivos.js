const Objetivos = async function(id){
    const retorno = []

    let total = 0;

    const response = await fetch ('http://127.0.0.1:8000/smartsustain/visualizar_objetivos',
    {

        cache: "no-store",
        method:'POST',
        body: JSON.stringify({
            usuario:id
        })
              

    })

    const data = await response.json();
    const list = data.list
    total= 0
    list.forEach(element =>{
            let nombre = element.nombre
            let monto = cantidad_deseada
            let alcanzado = element.cantidad_alcanzada
            let fechainicio= fecha_inicio
            let fechafin = fecha_fin
            let elemento = <tr>
                <td>{nombre}</td>
                <td>{monto}</td>
                <td>{alcanzado}</td>
                <td>{fechainicio}</td>
                <td>{fechafin}</td>
            </tr>
            retorno.push(elemento)
    });
    return retorno
}

export default Objetivos;