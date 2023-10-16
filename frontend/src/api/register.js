const register = async function(nombre, apellido, mail, passw){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/register', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            nombre : nombre,
            apellido : apellido,
            email : mail,
            password : passw
        }),
    })
}

export default register