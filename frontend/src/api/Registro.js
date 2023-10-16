let respuesta = {
    nombre: "no_nombre",
    apellido: "no_apellido",
    email:"no_correo",
    password:""}
    
const Registro = async function(name,apell,mail,contra){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/login', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido : apell,
            email : mail,
            password : contra
        }),
    })
    const data = await response.json()
     respuesta = data

   
   alert(respuesta);
}

export default Registro;