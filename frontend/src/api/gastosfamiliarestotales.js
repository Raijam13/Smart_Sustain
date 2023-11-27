const peticion = async function(id){
    const response = await fetch ('http://127.0.0.1:8000/smartsustain/visualizar_gastos_familiares/', 
    {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
            usuario_id : id
        }),
    })
    const data = await response.json()
    const gastos = data.gastos
    const categorias = []
    const totales = []
    gastos.array.forEach(element => {
        gasto = JSON.parse(element)
        cat = gasto.categoria
        q = gasto.cantidad
        if (categorias.includes(cat)){
            index = categorias.findIndex(cat)
            totales[index] = totales[index] + q
        }
        else{
            categorias.push(cat)
            totales.push(q)
        }
    });
    obj = {
        categorias : categorias,
        montos : montos
    }
    return obj
}

export default peticion()