class Puzzle{

  constructor(numero){
    this.numero = numero;
    //this.tablero = this.generaTablero(numero);+
    this.tablero = [];
    this.generaTablero(numero, this.tablero);
  }
  
  generaTablero(numero, tab){
    //var tab = [];
    for(var i = 0; i < numero; i++){
      for(var j = 0; j < numero; j++){
        tab.push(0);
      }
    }
    return tab;
  }
  
  generaNumeros(){
    for(var i = 1; i < this.tablero.length; i++){
      this.tablero[i - 1] = i;
    }
    this.tablero[this.tablero.length -1] = 0;
  }

    generaJuego(){
        var order = [];
        var lis = [];
        var z = 0;
		while(order.length < this.tablero.length){//Empieza a generar el aleatorio
			var nuevoNumber = this.tablero[Math.floor((Math.random()* this.tablero.length))];
			if (order.indexOf(nuevoNumber)==-1){ //Si no encuentra el número en order(indexOf busca la ocurrencia y devuelve la posición)
				order.push(nuevoNumber); //Lo mete en la lista order
			}
		}
        for (var i=0;i<this.numero;i++){
            lis[i]=[];
            for(var j=0;j<this.numero;j++){
                lis[i][j] = order[z];
                z++;
            }
        }
		
        this.tablero = lis;
		console.log(order);
		console.log(this.tablero);
    }

        
    fichaBlanco(){
		var list = [];
		for(let i=0;i<this.numero;i++){
			for (let j=0;j<this.numero;j++){
				if (this.tablero[i][j] == 0){
					list.push(i);
					list.push(j);
				}
			}
		}
		return list;//Devuelve la posición en la que se encuentra el blanco diciendo en qué array se encuentra y en qué posición
	}
    mueveFicha(fila,columna){
		var num = this.tablero[fila][columna];
		this.tablero[this.fichaBlanco()[0]][this.fichaBlanco()[1]] = num;
		this.tablero[fila][columna] = 0;
		
	}
    
 }

var p  = new Puzzle(4);
p.generaNumeros();
p.generaJuego();
p.fichaBlanco();
p.mueveFicha(3,2);
console.log(p.tablero);
