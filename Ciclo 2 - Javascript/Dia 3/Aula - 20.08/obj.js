/*objetos*/

function Pessoa(nome, sobrenome, idade){
	this.nome=nome;
	this.sobrenome=sobrenome;
	this.idade=idade;
}

var ps1=new Pessoa("Raphael", "da Silva", 7);
console.log("1. Nome: "+ps1.nome+" "+ps1.sobrenome+": "+ps1.idade+" anos.");


var ps2=new Pessoa("Maria");
console.log("2. Nome: "+ps2.nome+" "+ps2.sobrenome+": "+ps2.idade+" anos.");


var objPessoa={RG:'7767', CPF:'8989'}
//console.log(typeof(objpessoa));

console.log("RG: "+objPessoa.RG);


function Pessoa2(nome, sobrenome, idade){
	this.nome=nome;
	this.sobrenome=sobrenome;
	this.idade=idade;
	this.doc={
		RG:'777', 
		CPF:'8989'
	}
}


var pessoa2=new Pessoa2("Raphael");
//console.log("3. Nome: "+pessoa2.nome+" "+pessoa2.doc.RG);


console.log(`Nome ${pessoa2.nome} - RG: ${pessoa2.doc.RG}`);