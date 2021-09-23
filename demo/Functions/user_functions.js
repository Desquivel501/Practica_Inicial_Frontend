
function carga_cursos(){
    var cadena = ''
    var select = document.getElementById('cursos_select')
    fetch("http://192.168.0.13:3000/cursos",{
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':'*',}})
    .then(res=>res.json())
    .catch(err=>{
        console.log('Error',err)
        alert("Ocurrió un error, ver la consola")
    })
    .then(response =>{
        console.log(response)
        for (var i in response){
            cadena +=  `<option>${response[i].Nombre}</option>` 
        }
        select.innerHTML = cadena
    })

}

function agregar_curso(){
    var carnet = sessionStorage.getItem("Usuario")
    var curso = document.getElementById("cursos_select").value
    var objeto = {
        'carnet': carnet,
        'curso': curso
    }
    fetch("http://192.168.0.13:3000/agregar_curso",{
        method: 'POST',
        body: JSON.stringify(objeto),
        headers:{
            'content-type':'application/json',
            'Access-Control-Allow-Origin': '*'}})
    .then(res => res.json())
    .catch(err => {
        console.log('Error', err)
        alert("Ocurrió un error, ver la consola")
    })
    .then(response => {
        console.log(response)
        alert(response.mensaje)
    })
    obtener_cursos()

}

function obtener_cursos(Ncarnet){
    var carnet = Ncarnet
    var cadena = ''
    var tabla_cursos = document.getElementById('cursos_aprobados')
    var objeto = {
        'carnet': carnet
    }
    fetch("http://192.168.0.13:3000/obtener_cursos",{
        method: 'POST',
        body: JSON.stringify(objeto),
        headers:{
            'content-type':'application/json',
            'Access-Control-Allow-Origin': '*'}})
    .then(res => res.json())
    .catch(err => {
        console.log('Error', err)
        alert("Ocurrió un error, ver la consola")
    })
    .then(response => {
        for (var i in response){
            console.log(response[i])
            cadena += ` <tr><td class="text-bold-500">${response[i].Nombre}</td></tr>`
        }
        tabla_cursos.innerHTML = cadena
    })

}


function recargar_tabla(){
    obtener_cursos()
}

function datos_usuario(){
    var carnet = sessionStorage.getItem("Usuario")
    fetch( `http://192.168.0.13:3000/datos/${carnet}`,{
        method:'GET',
        headers: {
        'content-type':'application/json',
        'Access-Control-Allow-Origin':'*',}})
    .then(res => res.json())
    .catch(err => {
        console.log('Error', err)
        alert("Ocurrió un error, ver la consola")
    }) 
    .then(response => {
        document.getElementById("nombre").value = response.nombre
        document.getElementById("apellido").value = response.apellido
        document.getElementById("correo").value = response.correo
        document.getElementById("registro").value = response.carnet

    })

}

function datos_usuario_busqueda(){
    /*sessionStorage.setItem("Busqueda", "202001055")*/
    var carnet = sessionStorage.getItem("Busqueda")
    fetch( `http://192.168.0.13:3000/datos/${carnet}`,{
        method:'GET',
        headers: {
        'content-type':'application/json',
        'Access-Control-Allow-Origin':'*',}})
    .then(res => res.json())
    .catch(err => {
        console.log('Error', err)
        alert("Ocurrió un error, ver la consola")
    }) 
    .then(response => {
        document.getElementById("nombre").value = response.nombre
        document.getElementById("apellido").value = response.apellido
        document.getElementById("correo").value = response.correo
        document.getElementById("registro").value = response.carnet

    })

}

function editar_datos(event){
    event.preventDefault()
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var correo = document.getElementById("correo").value
    var carnet =sessionStorage.getItem("Usuario")
    var objeto = {
        'registro': carnet,
        'nombre': nombre,
        'apellido': apellido,
        'correo': correo
    }
    fetch("http://192.168.0.13:3000/modificar_datos",{
        method: 'POST',
        body: JSON.stringify(objeto),
        headers:{
            'content-type':'application/json',
            'Access-Control-Allow-Origin': '*'}})
    .then(res => res.json())
    .catch(err => {
        console.log('Error', err)
        alert("Ocurrió un error, ver la consola")
    })
    .then(response => {
        console.log(response)
        alert(response.mensaje)
    })
    datos_usuario()

}