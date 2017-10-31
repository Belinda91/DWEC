 function validaNombre() {
      var nombre = document.getElementById("nombre").value;
      if (/^([a-zñáéíóú|A-Z]+[\s]*)+$/.test(nombre)) {
        document.getElementById("nombre").style.backgroundColor = 'rgb(185, 233, 94)';
        document.getElementById("nombreOculto").style.visibility = 'hidden';
      } else document.getElementById("nombreOculto").style.visibility = 'visible';
    }
    function validaApellidos() {
      var apellidos = document.getElementById("apellidos").value;
      if (/^([a-zñáéíóú]|[A-Z]+[\s]*[a-zñáéíóú]|[A-Z])+$/.test(apellidos)) {
        document.getElementById("apellidos").style.backgroundColor = 'rgb(185, 233, 94)';
        document.getElementById("apellidoOculto").style.visibility = 'hidden';
      }
      else document.getElementById("apellidoOculto").style.visibility = 'visible';
    }
    function validaDNI() {
      var dni = document.getElementById("dni").value;
      if (/^\d{8}([A-Z])$/.test(dni)) {
        document.getElementById("dni").style.backgroundColor = '#b9e95e';
        document.getElementById("dniOculto").style.visibility = 'hidden';
      } else document.getElementById("dniOculto").style.visibility = 'visible';
    }
    function validaTelefono() {
      var telefono = document.getElementById("telefono").value;
      if (/^[9|6|8|7]{1}\d{8}$/.test(telefono)) {
        document.getElementById("telefono").style.backgroundColor = '#b9e95e';
        document.getElementById("telefonoOculto").style.visibility = 'hidden';
      } else document.getElementById("telefonoOculto").style.visibility = 'visible';
    }
    function validaEmail() {
      var email = document.getElementById("email").value;
      if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
        document.getElementById("email").style.backgroundColor = '#b9e95e';
        document.getElementById("emailOculto").style.visibility = 'hidden';
      } else document.getElementById("emailOculto").style.visibility = 'visible';
    }
    function validaUsuario() {
      var usuario = document.getElementById("usuario").value;
      if (/^(?=.+[0-9])\w{8,}$/.test(usuario)) {
        document.getElementById("usuario").style.backgroundColor = '#b9e95e';
        document.getElementById("usuarioOculto").style.visibility = 'hidden';
      } else document.getElementById("usuarioOculto").style.visibility = 'visible';
    }
    function comprueba(valor, expReg){
      if (expReg.test(valor)){
        document.getElementById(valor).style.backgroundColor = '#b9e95e';
        document.getElementById(valor+'Oculto').style.visibility = 'hidden';
      } else document.getElementById(valor+'Oculto').style.visibility = 'visible';
    }
