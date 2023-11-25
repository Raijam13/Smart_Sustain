const crearfamilia = async function(id, name, desc){
    let obj = {
        id : id,
        name : name,
        desc: desc
    }
    const response = await fetch('http://127.0.0.1:8000/smartsustain/crearfamilia', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify(obj),
    })
    const data = await response.json()
}

export default crearfamilia