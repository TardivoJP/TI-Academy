/*Desenvolva um algoritmo que simule uma calculadora. Você deve dar a opção
de o usuário escolher entre: 1 - Somar; 2 - Subtrair; 3 - Multiplicar;
4 - Dividir. O usuário só conseguirá processar dois números inteiros por vez.*/

function lst3_ex5(){

alert("Bem-vindo a calculadora básica, o que você quer fazer?");
opcao=parseFloat(prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplicar e 4 para dividir"));


while((opcao!=1)&&(opcao!=2)&&(opcao!=3)&&(opcao!=4)){
	alert("Você não escolheu uma opção válida!");
	opcao=parseFloat(prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplicar e 4 para dividir"));
}


if(opcao==1){
	n1=parseFloat(prompt("Insira o primeiro número"));
	n2=parseFloat(prompt("Insira o segundo número"));
	som=n1+n2;
	document.write("A soma deles é "+parseFloat(som.toFixed(4))+".");
}else if(opcao==2){
	n1=parseFloat(prompt("Insira o primeiro número"));
	n2=parseFloat(prompt("Insira o segundo número"));
	sub=n1-n2;
	document.write("A subtração do primeiro pelo segundo é "+parseFloat(sub.toFixed(4))+".");
}else if(opcao==3){
	n1=parseFloat(prompt("Insira o primeiro número"));
	n2=parseFloat(prompt("Insira o segundo número"));
	mult=n1*n2;
	document.write("A multiplicação deles é "+parseFloat(mult.toFixed(4))+".");
}else if(opcao==4){
	n1=parseFloat(prompt("Insira o primeiro número"));
	n2=parseFloat(prompt("Insira o segundo número"));
	div=n1/n2;
	document.write("A divisão do primeiro pelo segundo é "+parseFloat(div.toFixed(4))+".");
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