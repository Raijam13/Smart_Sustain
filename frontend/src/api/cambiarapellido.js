const cambiarapellido = async function(id, apellido){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/modapellidos', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            id : id,
            apellido : apellido,
        }),
    })
}

export default cambiarapellido