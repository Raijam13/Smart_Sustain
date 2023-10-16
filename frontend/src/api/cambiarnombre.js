const cambiarnombre = async function(id, nombre){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/modnombres', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            id : id,
            nombre : nombre,
        }),
    })
}

export default cambiarnombre