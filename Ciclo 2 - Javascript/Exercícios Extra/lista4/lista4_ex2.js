/*Desenvolva um algoritmo que receba dois números inteiros positivos A e B. Exiba na
tela todos os números inteiros compreendidos entre A e B, excluindo os próprios A e
B. Suponha que o usuário respeite o enunciado e insira valores válidos para A e B.*/

function lst4_ex2(){

a=parseInt(prompt("Insira o primeiro número positivo"));

while(a<0){
	alert("Você não inseriu um valor válido!");
	a=parseInt(prompt("Insira o primeiro número POSITIVO"));
}

b=parseInt(prompt("Insira o segundo número positivo"));

while(b<0){
	alert("Você não inseriu um valor válido!");
	b=parseInt(prompt("Insira o segundo número POSITIVO"));
}


if(a==b){
	document.write("A e B são iguais, logo não existem números inteiros entre eles.");
}

while(a>(b+1)){
	a=a-1;
	document.write(a+" ");
}

while(b>(a+1)){
	b=b-1;
	document.write(b+" ");
}





(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button');
    btnz.setAttribute('value', 'Voltar');
    btnz.style.width = "100px";
    btnz.style.height = "50px";
    btnz.style.position = "absolute";
    btnz.style.top = "20%";
    btnz.style.left = "5%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}