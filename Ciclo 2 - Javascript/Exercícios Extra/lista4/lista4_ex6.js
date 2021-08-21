/*Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:

a) esse funcionário foi contratado em 2015, com salário inicial de R$ 1.000,00;
b) em 2016 recebeu aumento de 1,5% sobre seu salário inicial;
c) a partir de 2017 (inclusive), os aumentos salariais sempre corresponderam ao dobro
da porcentagem do ano anterior.

Faça um programa que receba o ano atual determine o salário atual desse funcionário.*/

function lst4_ex6(){

n1=parseInt(prompt("Insira o ano atual"));

while(n1<2015){
	alert("O funcionário foi contratado em 2015! Não tem como ser um valor inferior a este!");
	ano=parseInt(prompt("Insira o ano atual"));
}

ano=n1;
sal=1000;
aumento=0.015;

while(ano>=2016){
	sal=sal+(sal*aumento); 
	aumento=(aumento.toFixed(4))*2;
	ano=ano-1;

}

document.write(`Em ${n1}, o salário do funcionário é de: R$ ${sal.toFixed(2)}.`);





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