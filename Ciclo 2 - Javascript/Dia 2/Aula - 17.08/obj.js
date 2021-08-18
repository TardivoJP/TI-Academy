
/*
	var / let / const
*/

/*var nome="Marcelo"; //variavel global

let sobrenome="Weihmayr";

if(true){
	console.log("Var nome = "+nome);
	var nm=nome;
	console.log("Chamando o sobrenome "+sobrenome);
	let sn="da Silva";
	console.log(sobrenome);
}

console.log("Meu nome é "+nm+" "+sobrenome+" "+sn);
console.log("Var nome = "+nm);*/


var Pessoa={
		nome:"Marcelo",
		rua:"Rua lá",
		ncasa:"777",
		dados:function(){
			document.write(
				"Nome: "+this.nome+
				"<br>Endereço: "+this.rua+" ,"+this.ncasa)}
}

Pessoa.dados();

/*console.log("Nome: "+pessoa.nome+" Endereço: "+pessoa.rua+", "+pessoa.ncasa);*/