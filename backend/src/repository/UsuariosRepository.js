let repository = [{idUsuario: 1, Nombre: "Sideral", Apellidos: "Carrion",Contraseña: 123456789, Correo:"sideralcarrion@gmail.com"}, {idUsuario: 2, Nombre: "Marco", Apellidos: "Polo",Contraseña: 123456789, Correo:"marcopolo@gmail.com"}]
let counter = 2

const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idUsuario: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idUsuario == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idUsuario == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idUsuario == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository