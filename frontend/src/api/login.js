const peticion = async function(){
    const retorno = []
    const response = await fetch (`http://127.0.0.1:8000/smartsustain/movimientos`,
    {
        method: 'POST',
        body: JSON.stringify({
            usuario: 1
        })
    })
    
}