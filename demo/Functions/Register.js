function register(){
    var name = document.getElementById("name").value
    var lastname = document.getElementById("lastname").value
    var carnet = document.getElementById("registro").value
    var correo = document.getElementById("mail").value
    var password = document.getElementById("password").value
    var confirm_password = document.getElementById("confirm_password").value
    var objeto = {
        'name': name,
        'lastname': lastname,
        'carnet': carnet,
        'mail': correo,
        'password': password
    }
    if (password != confirm_password){
        alert("Las contraseñas no coinciden")
    }else{
        fetch("http://192.168.0.13:3000/register ", {
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
        if (response.register == true){
            location.href = "auth-login.html"
        }
            
    })

    }

}