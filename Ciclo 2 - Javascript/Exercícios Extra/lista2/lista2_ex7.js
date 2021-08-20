/*Crie um procedimento que receba a quantidade de dinheiro em reais que uma pessoa 
que vai viajar possui. Essa pessoa vai passar por vários países e precisa converter
seu dinheiro em dólares, euro e libra esterlina. Sabe-se que a cotação do dólar é 
de R$ 4,00, do euro é R$ 4,25 e do iene é R$ 0,10. O procedimento deverá fazer a 
leitura dos dados do usuário e exibir o resultado das conversões diretamente, sem
passagem de parâmetros. Desenvolva um algoritmo que invoque o procedimento para 
realizar os cálculos.*/

function lst2_ex7(){

dinheiro=parseFloat(prompt("Insira a quantidade em reais (R$) a ser convertida"));

dolar=dinheiro/4;
euro=dinheiro/4.25;
iene=dinheiro/0.10;

document.write("Você digitou o valor de: R$ "+parseFloat(dinheiro.toFixed(2))+".<br>"+
				"Isto equivale a: $ "+parseFloat(dolar.toFixed(2))+".<br>"+
				"Isto equivale a: € "+parseFloat(euro.toFixed(2))+".<br>"+
				"Isto equivale a: ¥ "+parseFloat(iene.toFixed(2))+".");





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