const crearCategoria = async function(usuario_id, nombre_categoria){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/crear_categoria', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            usuario_id : usuario_id,
            nombre_categoria : nombre_categoria,
        }),
    })
}

export default crearCategoria