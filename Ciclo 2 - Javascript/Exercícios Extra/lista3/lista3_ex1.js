/*Faça um programa que receba dois números e mostre o maior deles. 
Caso eles sejam iguais, deve-se mostrar a mensagem "Os números são iguais".*/

function lst3_ex1(){

n1=parseFloat(prompt("Insira o primeiro número"));
n2=parseFloat(prompt("Insira o segundo número"));


document.write("Você digitou dois números "+parseFloat(n1.toFixed(4))+" e "+parseFloat(n2.toFixed(4))+".<br>");

if(n1>n2){
	document.write("O número maior é o "+parseFloat(n1.toFixed(4))+".");
}else if(n2>n1){
	document.write("O número maior é o "+parseFloat(n2.toFixed(4))+".");
}else if(n1==n2){
	document.write("Eles são iguais.");
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