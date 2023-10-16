const deleteacc = async function(id){
    const response = await fetch('http://127.0.0.1:8000/smartsustain/deleteuser', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            id : id
        }),
    })
    window.location.href = '/Login'

}

export default deleteacc