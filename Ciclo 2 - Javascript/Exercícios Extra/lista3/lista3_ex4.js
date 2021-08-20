/*Desenvolva um algoritmo que receba dois números, calcule e mostre a multiplicação
entre eles, se ambos forem iguais. Caso o primeiro seja maior que o segundo, mostre a
subtração do primeiro pelo segundo. Caso contrário, mostre a soma entre os dois.*/

function lst3_ex4(){

n1=parseFloat(prompt("Insira o primeiro número"));
n2=parseFloat(prompt("Insira o segundo número"));

mult=n1*n2;
sub=n1-n2;
som=n1+n2;

document.write("Você digitou dois números "+parseFloat(n1.toFixed(4))+" e "+parseFloat(n2.toFixed(4))+".<br>");

if(n1>n2){
	document.write("A subtração do primeiro pelo segundo é "+parseFloat(sub.toFixed(4))+".");
}else if(n2>n1){
	document.write("A soma deles é "+parseFloat(som.toFixed(4))+".");
}else if(n1==n2){
	document.write("A multiplicação entre eles é "+parseFloat(mult.toFixed(4))+".");
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