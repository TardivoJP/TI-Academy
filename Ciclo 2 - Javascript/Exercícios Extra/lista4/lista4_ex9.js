/*Desenvolva um algoritmo que peça ao usuário que insira dois números inteiros
positivos A e B, no qual A deve ser menor que B (supõe-se que o usuário irá respeitar
esse enunciado). O algoritmo deve mostrar, na tela, todos os números ímpares
compreendidos entre A e B (inclusive).*/

function lst4_ex9(){

a=parseInt(prompt(`Insira o primeiro número positivo`));
while(a<0){
	a=parseInt(prompt(`Insira um número POSITIVO`));
}

b=parseInt(prompt(`Insira o segundo número maior que o primeiro`));
while(b<=a){
	b=parseInt(prompt(`Insira o segundo número MAIOR que o primeiro`));
}


while(b>=a){
	if((b%2)!=0){
		document.write(`${b} `);
	}
	b=b-1;
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