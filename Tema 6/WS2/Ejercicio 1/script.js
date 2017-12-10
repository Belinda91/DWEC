var usuario;
        var mensaje;
        function getName() {
          usuario = document.getElementById('usuario').value;
          mensaje = document.getElementById('disponible');
          loadDoc();
        }
        function loadDoc() {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              let variable = JSON.parse(this.responseText);
              if (usuario != '') {
                if(variable['validar'] == 'si'){
                  mensaje.innerHTML = 'Nombre de usuario ocupado';
                  mensaje.style.color = 'red';
                } else {
                  mensaje.innerHTML = '¡Nombre de usuario libre!';
                  mensaje.style.color = 'green';
                }
              }
            }
          };
          xhttp.open("GET", "usuarios.php?user="+usuario, true);
          xhttp.send();
        }