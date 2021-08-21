/*Desenvolva um algoritmo que peça ao usuário que insira cinco conjuntos
de dois números inteiros positivos (A, B), no qual A deve ser menor que B
(supõe-se que o usuário irá respeitar esse enunciado). Para cada dupla (A, B),
informada pelo usuário, o algoritmo deve mostrar, na tela, todos os números 
pares compreendidos entre A e B (inclusive).*/

function lst4_ex16(){

//similar ao exercício 9 desta lista
//mas novamente temos o conceito de
//colocar um loop dentro de outro loop
alert("Insira cinco conjuntos de dois números positivos!\nAlém disso, o primeiro deve ser menor que o segundo")

x=1
while(x<=5){
	a=parseInt(prompt(`Insira o número A`));
		while(a<0){
			alert("Lembre-se, os números devem ser POSITIVOS!")
			a=parseInt(prompt(`Insira o número A`));
		}

	b=parseInt(prompt(`Insira o número B`));
		while(b<=a){
			alert("Lembre-se, B deve ser MAIOR que A\nAlém disso, os números devem ser POSITIVOS!")
			b=parseInt(prompt(`Insira o número B`));
		}

		document.write(`Conjunto ${x}: `);

	while(b>=a){
		if((b%2)==0){
			document.write(`${b} `);
		}
		b=b-1;
	}

		document.write(` <br>`);
	x++;
}





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