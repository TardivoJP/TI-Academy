/*Faça um programa que receba o valor de um depósito e o valor da taxa de juros, 
calcule e mostre o valor do rendimento e o valor total depois do rendimento.*/

function lst1_ex8(){

deposito=parseFloat(prompt("Insira o valor do depósito"));
juros=parseFloat(prompt("Insira a taxa de juros"));

rendimento=deposito*(juros/100);

total=deposito+rendimento;

document.write("O seu depósito de R$ "+deposito.toFixed(2)+" terá um rendimento de "+juros+"%, o que resulta em R$ "+rendimento.toFixed(2)+
				". Totalizando R$ "+total.toFixed(2));





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