const cambiaremail = async function(id, email){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/modmail', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            id : id,
            email : email,
        }),
    })
}

export default cambiaremail