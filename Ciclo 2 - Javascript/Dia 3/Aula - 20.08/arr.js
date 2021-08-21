/*concat() junta os elementos de dois ou mais arrays e retorna uma
cópia dos elementos juntos*/

var frutas=["Uva","Banana","Amora","Melão"]; // var frutas = Array()
console.log(`Quantidade do array: ${frutas.length} Fruta: ${frutas[0]}`);

var frutas2=["Maçã","Pera","Laranja"];
console.log(`Quantidade do array: ${frutas2.length} Fruta: ${frutas2[0]}`);

var todasAsFrutas=frutas.concat(frutas2);
console.log(`Quantidade do array: ${todasAsFrutas.length} Fruta: ${todasAsFrutas[0]}`);

console.log(frutas);
console.log(frutas2);
console.log(todasAsFrutas);



/*indexOf() procura por um elemento específico no array e retorna a
sua posição*/
var retornoIndexOf=todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);//2


/*join() junta todos os elementos de um array em uma string*/
var stringDeArray=todasAsFrutas.join();
console.log(stringDeArray);


/*push() insere um novo elemento no final da array*/
var outraLista=["Bola","Peteca"];
var novaLista=outraLista.push("Boneca", "qualquer brinquedo");
console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);


/*pop() remove o último elemento da array*/
console.log(outraLista.pop());
console.log(outraLista);


/*reverse() inverte a ordem dos elementos da array*/
console.log(outraLista.reverse());


/*shift() remove o primeiro elemento da array*/
var removerPrimeiro=["Fusca","Variante"];
removerPrimeiro.shift()
console.log(removerPrimeiro);


/*sort() ordena os elementos da array em ordem crescente*/
var alfa=["b","z","t","a"];
var beta=[4, 6, 9, 2];
alfa.sort();
beta.sort();
console.log(alfa);
console.log(beta);

/*toString() converte uma array em string e retorna esse string*/
//vide join


/*unshift() insere um novo elemento no início do array*/
beta.unshift(10);
console.log(beta);

/*splice() corta a array em um ponto indicando dois parametros indice
e quantos elementos quer remover a partir da posição*/
var f=["Uva","Banana","Amora","Melão"];
var idx=f.indexOf("Banana");
console.log(idx);
console.log(f.splice(idx, 2));
console.log(f);


//arrays de objetos

var dados=[
{nome:"Marcelo"}, //0
{nome:"Raphael"}  //1
];

//console.log(dados[0].nome);
//console.log(dados[1].nome);

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome=nome;
	this.sobrenome=sobrenome;
	this.idade=idade;
	this.doc={
		RG:doc[0], 
		CPF:doc[1]
	}
}


var pessoa2=new Pessoa2("Raphael","","",['22','555']);

//console.log("3. Nome: "+pessoa2.nome+" "+pessoa2.doc.RG);
console.log(`Nome ${pessoa2.nome} - CPF: ${pessoa2.doc.CPF}`);