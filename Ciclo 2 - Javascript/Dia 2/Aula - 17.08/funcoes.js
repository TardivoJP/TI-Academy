
function soma(){
	var x=1;
	var y=2;
	console.log(x+2);
}

//soma();


function somaPar(x, y){
	var r = x+y;
	console.log(r);
}


function multiplicar(n, o){
	var resultado=(n*o); //variavel local
	console.log(resultado);
}


function potencia(n, o){
	var resultado=Math.pow(n, o);
	console.log(resultado);
}

multiplicar(3, 4);
potencia(7, 2);

//somaPar(5, 9);


/*(function respostaF(){
	var nome='Marcelo';
	alert(nome);
	return nome;
})();*/

//respostaF();

//var d=respostaF();


/*var f=function(){
	alert("Função sem nome");
}*/

//f();



//var ar=()=>{alert("Arrow function")};

//ar();

/*(()=>{alert("Arrow function")})();*/