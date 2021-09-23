
function buscarUsuario(){
    var carnet = document.querySelector('#barraBusqueda').value

    fetch('http://192.168.0.13:3000/buscar/'+carnet,{
        method: 'GET'
        })
        .then(res => res.json())
        .catch(err =>{
            console.log("Ha ocurrido un error");
            alert("Ha ocurrido un error")
        })
        .then(response =>{
            console.log(response)
            alert("Nombre: " + response.Nombre)
        })
}