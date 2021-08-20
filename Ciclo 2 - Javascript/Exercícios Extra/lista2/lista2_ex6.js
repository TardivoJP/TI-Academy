/*Faça um procedimento que receba um número real, calcule e retorne:

a) a parte inteira desse número;
b) a parte fracionária desse número.

Crie um algoritmo que peça para o usuário inserir o número real e,
em seguida, calcule e mostre o que se pede nos itens a) e b).*/

function lst2_ex6(){

numero=parseFloat(prompt("Insira um número real"));


parte_int=parseInt(numero);
parte_float=numero-parte_int;


document.write("Você inseriu o número "+parseFloat(numero)+".<br>"+
				"A parte inteira desse número é "+parseInt(parte_int)+".<br>"+
				"A parte fracionária desse número é "+parseFloat(parte_float.toFixed(8))+".");





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