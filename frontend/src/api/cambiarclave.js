const cambiarclave = async function(id, clave){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/modclave', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            id : id,
            clave : clave,
        }),
    })

}

export default cambiarclave