//Modelo
//class Modelo{
//    constructor(){
//        this.notaPinchada = false;
//        this.posEX = 0;
//        this.posEY = 0;
//        this.posX = 0;
//        this.posY = 0;
//    }
//}
var notaPinchada = false;
var posEX = 0;
var posEY = 0;
var posX = 0;
var posY = 0;


    class Nota {
      constructor(id) {
        this.id = id;
        this.titulo = '';
        this.texto = '';
        this.fecha = new Date();
      }
    }
    class ListaNotas {
      constructor() {
        this.id = 0;
        this.notas = [];
        this.metido = '';
      }
    }
    //VISTA-----------------------------------------------------------------------
    class NotaView {
      constructor(controlador) {
        this.controlador = controlador;
      }
      nuevaNota(id, titulo = '', texto = '', fecha, color) {
        //Crea una vista para la nota
        var self = this;
        this.notaV = document.createElement('div');
        this.notaV.setAttribute('class', 'nota');
        this.notaV.setAttribute('id', `${id}`);
        this.notaV.setAttribute('style','left: 100px; top: 100px;');
        this.notaV.style.backgroundColor = '#fcff11';
        document.getElementById('tablero').appendChild(this.notaV);
        this.notaV.setAttribute('onmousedown', 'controlador.agarrar(this); controlador.cambiarDatos(event)');
        this.tituloV = document.createElement('h4');
        this.notaV.appendChild(this.tituloV);
        this.tituloV.style.backgroundColor = '#11a1ff';
        this.tituloV.innerHTML = titulo;
        this.textoV = document.createElement('textarea');
        this.notaV.appendChild(this.textoV);
        this.textoV.style.backgroundColor = '#fcff11';
        this.horaV = document.createElement('p');
        this.notaV.appendChild(this.horaV);
        this.horaV.innerHTML = 'Fecha: ' + fecha;
        this.boton = document.createElement('button');
        this.boton.setAttribute('type', 'button');
        this.boton.setAttribute('class', 'eliminar');
        this.boton.addEventListener('click', function(){
          self.borrarNota(id);
        });
        this.boton.innerHTML = 'X';
        this.tituloV.appendChild(this.boton);
      }
      borrarNota(id){
        //Elimina la nota seleccionada por id
        document.getElementById('tablero').removeChild(document.getElementById(id));
        this.controlador.lista.notas.splice(this.controlador.lista.notas[id], 1);
      }
    }
    //CONTROLADOR-----------------------------------------------------------------
    class Controlador{
      constructor(){
        var self = this;
        this.lista = new ListaNotas();
//        this.modelo = new Modelo();
        this.nuevaVista = new NotaView(this);
        this.boton = document.getElementById('boton');
        this.boton.addEventListener('click', function(){
          self.insertarPosit();
        });
        this.elemento;
        if (localStorage.notas){
            this.lista.notas = JSON.parse(localStorage.notas)
        }
      }
      insertarPosit(){
        //Crea una nueva nota y la guarda en la lista
        var title = prompt('Escribe un titulo para la nota');
        this.hora = new Date();
        this.creada = this.hora.getDate() + '/' + this.hora.getMonth() + '/' + this.hora.getFullYear() + ' ' + this.hora.getHours() + ':' + this.hora.getMinutes() + ':' + this.hora.getSeconds();
        this.lista.notas.push(new Nota(this.lista.id));
        this.nuevaVista.nuevaNota(this.lista.id,title,'',this.creada,0);
//        this.lista.metido = JSON.stringify(this.lista.notas);
        localStorage.notas = JSON.stringify(this.lista.notas));
        
        console.log(this.lista.metido);

      }
      agarrar(elemento) {
        //Pincha sobra la nota para moverla
        notaPinchada = true;
        this.elemento = elemento;
      }
      cambiarDatos(e){
        //Guarda la posición actual donde se ha pinchado y la de la nota en ese momento
        posEY = e.clientY;
        posEX = e.clientX;
        posY = parseInt(this.elemento.style.top);
        posX = parseInt(this.elemento.style.left);
      }
      mover(e) {
        //Mueve la nota seleccionada
        if (notaPinchada) {
          this.elemento.style.top = (posY + e.clientY - posEY) + 'px';
          this.elemento.style.left = (posX + e.clientX - posEX) + 'px';
          }
      }
    }
    //Principal
    window.onload = () => {
    controlador = new Controlador();
        
    }
    window.onmouseup = function(){
//        modelo = new Modelo();
        notaPinchada = false;
    }
    document.addEventListener('mousemove', function(e) {
      controlador.mover(event);
    }, false);


    
    

