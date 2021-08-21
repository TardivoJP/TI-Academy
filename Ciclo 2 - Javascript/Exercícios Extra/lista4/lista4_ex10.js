/*Faça um programa que leia dez conjuntos de dois valores, o primeiro representando
o número do aluno e o segundo representando sua altura em centímetros. Encontre o
aluno mais alto e o mais baixo. Mostre o número do aluno mais alto e o número do 
mais baixo, junto com suas alturas.*/

function lst4_ex10(){

/*JEITO "NORMAL" DE RESOLVER (será relevante no exercício 16 desta lista)

x=0
compMaisAlto=0;
compMaisBaixo=10000000;

while(x<10){
	numAlun=parseFloat(prompt(`Insira o número do aluno`));
	altAlun=parseFloat(prompt(`Insira a altura do aluno em centímetros`));
	
	if(altAlun>compMaisAlto){
		compMaisAlto=altAlun;
		nAlunAlto=numAlun;
	}
	
	if(altAlun<compMaisBaixo){
		compMaisBaixo=altAlun;
		nAlunBaixo=numAlun;
	}

	x++;
}

document.write(`O aluno mais alto é o nº ${nAlunAlto}, ele tem ${compMaisAlto} centímetros de altura<br>
				O aluno mais baixo é o nº ${nAlunBaixo}, ele tem ${compMaisBaixo} centímetros de altura.`);
*/


//JEITO DE RESOLVER COM MATRIZES
x=0;
matrizNumero=[];
matrizAltura=[];

while(x<10){
	numAlun=parseInt(prompt(`Insira o número do aluno`));
	matrizNumero.unshift(numAlun);

	altAlun=parseInt(prompt(`Insira a altura do aluno em centímetros`));
	matrizAltura.unshift(altAlun);

	x++;
}


//comparação fenomenal para encontrar a posição do maior valor em uma matriz, 2ª resposta deste link:
//https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array/11301464
var indexOfMaxValue = matrizAltura.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
var indexOfMinValue = matrizAltura.reduce((iMax, x, i, arr) => x < arr[iMax] ? i : iMax, 0);


document.write(`O aluno mais alto é o nº ${matrizNumero[indexOfMaxValue]}, ele tem ${matrizAltura[indexOfMaxValue]} centímetros de altura<br>
				O aluno mais baixo é o nº ${matrizNumero[indexOfMinValue]}, ele tem ${matrizAltura[indexOfMinValue]} centímetros de altura.`);





(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button');
    btnz.setAttribute('value', 'Voltar');
    btnz.style.width = "100px";
    btnz.style.height = "50px";
    btnz.style.position = "absolute";
    btnz.style.top = "25%";
    btnz.style.left = "5%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}