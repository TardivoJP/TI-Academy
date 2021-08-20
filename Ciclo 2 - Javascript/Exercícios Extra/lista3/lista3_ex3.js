/*Faça um programa que receba um número inteiro e 
verifique se esse número é par ou ímpar.*/

function lst3_ex3(){

num=parseInt(prompt("Insira um número."));

if(num%2==0){
	document.write("O número "+num+" é par.")
}else{
	document.write("O número "+num+" é ímpar.")
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