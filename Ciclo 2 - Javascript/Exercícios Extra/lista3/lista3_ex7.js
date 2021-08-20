/*A nota final de um estudante é calculada a partir de três notas atribuídas
respectivamente a um trabalho de laboratório, a uma avaliação semestral e a 
um exame final. A média das três notas mencionadas anteriormente obedece aos
 pesos a seguir:

Nota                              Peso
Trabalho de laboratório           2
Avaliação semestral               3
Exame final                       5


Faça um programa que receba as três notas, calcule e mostre a média ponderada e o
conceito que segue a tabela abaixo:


Média ponderada                   Conceito
8,0 ~ 10,0                        A
7,0 ~ 8,0                         B
6,0 ~ 7,0                         C
5,0 ~ 6,0                         D
0,0 ~ 5,0                         E*/

function lst3_ex7(){

n1=parseFloat(prompt("Insira a nota referente a disciplina (Trabalho de Laboratório)"));
n2=parseFloat(prompt("Insira a nota referente a disciplina (Avaliação semestral)"));
n3=parseFloat(prompt("Insira a nota referente a disciplina (Exame final)"));

media=((n1*2)+(n2*3)+(n2*5))/10;

if(media<=5){
	document.write("Sua média ponderada é "+parseFloat(media.toFixed(2))+".<br>");
	document.write("Você tirou E.");
}else if(media<=6){
	document.write("Sua média ponderada é "+parseFloat(media.toFixed(2))+".<br>");
	document.write("Você tirou D.");
}else if(media<=7){
	document.write("Sua média ponderada é "+parseFloat(media.toFixed(2))+".<br>");
	document.write("Você tirou C.");
}else if(media<=8){
	document.write("Sua média ponderada é "+parseFloat(media.toFixed(2))+".<br>");
	document.write("Você tirou B.");
}else if(media<=10){
	document.write("Sua média ponderada é "+parseFloat(media.toFixed(2))+".<br>");
	document.write("Você tirou A.");
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