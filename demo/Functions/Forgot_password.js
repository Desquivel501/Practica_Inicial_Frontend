function forgot_pass(){
    var mail = document.getElementById("mail").value
    var carnet = document.getElementById("carnet").value
    var password = document.getElementById("password").value
    var confirm_password = document.getElementById("confirm_password").value
    objeto = {
        'mail': mail,
        'carnet': carnet,
        'newpassword': password

    }

    if (password != confirm_password){
        alert("Las contraseñas no coinciden")
    }else{
        fetch("http://192.168.0.13:3000/forgot_password ", {
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
        if (response.modified == true){
            location.href = "auth-login.html"
        }
        })
    }
}