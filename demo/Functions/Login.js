function login(event){
    event.preventDefault();
    var user = document.getElementById("inputUser").value
    var password = document.getElementById("inputPassword").value
    var objeto = {
        'user': user,
        'password': password
    }
    console.log(user)
    console.log(password)
    console.log(objeto)
    fetch("http://192.168.0.13:3000/login", {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers:{
            'content-type':'application/json',
            'Access-Control-Allow-Origin':'*' }})
    .then(res => res.json())
    .catch(err =>{
        console.error('Error', err)
        alert("Ocurrió un error, ver la consola")
    })
    .then(response =>{
        console.log(response)
        alert(response.mensaje)
        var objetoRespuesta = {
            'Mensaje': response.mensaje,
            'User': response.exist
        }
        if (objetoRespuesta.exist == true){
            location.href()
        }else{
            console.log("No se inición sesión")
        }

    })
}



