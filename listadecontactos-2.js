let listaContactos = []

function añadirContacto(id,nombre,apellido,telefono,ciudad,direccion){
    let contacto = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ubicacion: {
            ciudad: ciudad, 
            direccion: direccion
        }
    }
    listaContactos.push(contacto)
}

añadirContacto("123", "yeison", "castañeda", "3233180000", "123", "123")
añadirContacto("12345", "yeison", "castañeda", "3233180000", "123", "123")


function eliminarContacto(id){
    let contactoBorrar = listaContactos.findIndex(contacto => contacto.id === id)
    if (contactoBorrar !== -1){
        listaContactos.splice(contactoBorrar,1)
    }
}

eliminarContacto("123")

console.log(listaContactos)