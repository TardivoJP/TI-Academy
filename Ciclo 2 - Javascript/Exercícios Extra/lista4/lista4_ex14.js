/*Faça um programa que leia um número N e que indique quantos 
valores inteiros e positivos devem ser lidos a seguir. Para cada
número lido, mostre o fatorial desse valor.*/

function lst4_ex14(){

//similar ao exercício 3 desta lista
//mas novamente temos o conceito de
//colocar um loop dentro de outro loop

n=parseInt(prompt(`Digite quantos números fatoriais quer calcular`));

while(n<=0){
	alert("Você não digitou um valor válido!");
	n=parseInt(prompt(`Digite quantos números fatoriais quer calcular`));
}

cont=1;

while(n>0){
	
	n1=parseInt(prompt(`Insira o numero ${cont}`));

		while(n1<0){
			alert("Não temos fatorial de número negativo!")
			n1=parseInt(prompt("Insira um número POSITIVO"));
		}		

		n3=n1;
		n2=n1;

		while(n2>1){
			n2=n2-1;
			n3=n3*n2;
		}

		if(n1==0){
			n3=1; // 0! é igual a 1
		}

		document.write(`${n1}! = ${n3}.<br>`);

	n=n-1;
	cont++;
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
    btnz.style.left = "15%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}