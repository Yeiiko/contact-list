let listaContactos =[{nombreyapellido: "yeison castañeda" },
{nombreyapellido: "alexander castañeda" },
{nombreyapellido: "evelyn  castañeda" },
{nombreyapellido: "flor barrera" },
];

function añadirContacto(nombre,apellido){
    let contacto ={nombreyapellido: nombre+" "+apellido};
    listaContactos.push(contacto);
}


añadirContacto("david","Almeida");


function eliminarContacto(nombreyapellido){
    let contactoBorrar =listaContactos.findIndex(contacto => contacto.nombreyapellido === nombreyapellido)
    if(contactoBorrar !== -1){
        listaContactos.splice(contactoBorrar,1);
    }
}


eliminarContacto("david Almeida");

function mostrarContactos(lista){
    for(let i = 0; i < lista.length; i ++) {
        console.log (lista[i].nombreyapellido)
    }
}

mostrarContactos(listaContactos);

