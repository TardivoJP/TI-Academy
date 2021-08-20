/*Faça um programa que receba quatro valores, I, A, B e C. I é um valor 
inteiro e positivo e A, B e C são valores reais e distintos. Escreva os 
números A, B e C obedecendo à tabela a seguir. Supor que o valor digitado
para I seja sempre um valor válido, ou seja, 1, 2 ou 3.

Valor de I                 Forma de escrever
1                          A, B e C em ordem crescente
2                          A, B e C em ordem decrescente
3                          O maior fica entre os outros dois números*/

function lst3_ex12(){

n1=parseInt(prompt("Insira o número 1, 2 ou 3"));

while((n1!=1)&&(n1!=2)&&(n1!=3)){
	alert("Você não inseriu um valor válido!");
	n1=parseFloat(prompt("Tente novamente\nInsira o número 1, 2 OU 3"));
}

a=parseFloat(prompt("Insira um valor A"));
b=parseFloat(prompt("Insira um valor B"));
c=parseFloat(prompt("Insira um valor C"));

maior=Math.max(a, b, c);
menor=Math.min(a, b, c);
meio=(a+b+c)-(maior+menor);

if(n1==1){
	document.write("I = "+n1+", então A, B e C ficam em ordem crescente<br>");
	document.write(menor+" "+meio+" "+maior);
}else if(n1==2){
	document.write("I = "+n1+", então A, B e C ficam em ordem decrescente<br>");
	document.write(maior+" "+meio+" "+menor);
}else if(n1==3){
	document.write("I = "+n1+", então o maior fica entre os outros dois números<br>");
	document.write(meio+" "+maior+" "+menor);
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