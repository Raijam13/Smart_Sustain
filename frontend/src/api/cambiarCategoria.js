const cambiarCategoria = async function(categoria_id, nuevo_nombre){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/actualizar_categoria', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            categoria_id : categoria_id,
            nuevo_nombre : nuevo_nombre,
        }),
    })
}

export default cambiarCategoria