const request = async function(id){
    const response = await fetch('http://127.0.0.1:8000/smartsustain/perfil', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            id : id
        }),
    })
    const data = await response.json()
    const user = {
        nombre : data.nombre,
        apellido : data.apellido,
        email : data.email,
        password : data.password
    }
    return user
}

const perfil = async function(id){
    const usuario = await request(id)
    return usuario
}

export default perfil