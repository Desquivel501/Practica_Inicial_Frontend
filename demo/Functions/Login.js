function login(event){
    sessionStorage.removeItem("Usuario")
    event.preventDefault();
    var carnet = document.getElementById("inputCarnet").value
    var password = document.getElementById("inputPassword").value
    var objeto = {
        'carnet': carnet,
        'password': password
    }
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
        if (objetoRespuesta.User == true){
            location.href = "perfil_usuario.html"
            sessionStorage.setItem("Usuario", response.carnet)
            console.log(sessionStorage.getItem("Usuario"))
        }else{
            console.log("No se inició sesión")
        }

    })
}

function logout(){
    location.href = "auth-login.html"
    sessionStorage.removeItem("Usuario")
}





