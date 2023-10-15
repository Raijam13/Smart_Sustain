/*
const peticion = async function(){
    const retorno = []
    const response = await fetch (`http://127.0.0.1:8000/smartsustain/movimientos`,
    {
        method: 'POST',
        body: JSON.stringify({
            email : mail,
            password : passw
        })
    })
    
}
*/

let userdata = {
    resp: "no_login",
    id: "N/A",
    user:"no_login"}

const login = async function(mail, passw){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/login', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            email : mail,
            password : passw
        }),
    })
    const data = await response.json()
    userdata = data

    localStorage.setItem('userData', JSON.stringify(userdata));
    press() 
    return userdata;
}

const press = () => {


    const storedUserData = localStorage.getItem('userData');
    const datos = storedUserData ? JSON.parse(storedUserData) : null;
    alert(datos.id)
    console.log(datos.resp)
    console.log(datos.user)
};

export default login;