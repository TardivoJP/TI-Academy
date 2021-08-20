/*Faça um programa que receba três notas de um aluno, calcule e mostre 
a média aritmética e a mensagem que segue a tabela abaixo. Para alunos 
de exame, calcule e mostre a nota que deverá ser tirada no exame para
aprovação, considerando que a média no exame é 6,0.

Média aritmética                  Mensagem
0,0 ~ 3,0                         Reprovado
3,0 ~ 7,0                         Exame
7,0 ~ 10,0                        Aprovado*/

function lst3_ex8(){

n1=parseFloat(prompt("Insira a primeira nota"));
n2=parseFloat(prompt("Insira a segunda nota"));
n3=parseFloat(prompt("Insira a terceira nota"));

media=(n1+n2+n3)/3;

if(media<=3){
	document.write("Sua média é "+parseFloat(media.toFixed(2))+".<br>");
	document.write("Você está reprovado.");
}else if(media<=7){
	document.write("Sua média é "+parseFloat(media.toFixed(2))+".<br>");
	document.write("Você ficou de exame.");
}else if(media<=10){
	document.write("Sua média é "+parseFloat(media.toFixed(2))+".<br>");
	document.write("Você está aprovado.");
}else{
	document.write("Valor inválido.");
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