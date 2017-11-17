
function nuevaSubida() {
      var subida = document.createElement('input');
      var boton = document.createElement('button');
        var otro = document.createElement('button');
      var salto = document.createElement('br');
      boton.innerHTML = "Enviar";
        otro.innerHTML = "Subirmas"
      subida.type = "file";
      subida.name = "Subir";
      otro.onclick = nuevaSubida;
      document.body.appendChild(salto);
      document.body.appendChild(subida);
      document.body.appendChild(boton);
    }