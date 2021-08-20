/*Sabe-se que o quilowatt de energia custa um milésimo do salário mínimo.
Faça um procedimento que receba o valor do salário mínimo e quantidade de 
quilowatts consumida por uma residência. O procedimento deve calcular e 
retornar através de passagem de parâmetros por referência:

a) o valor, em reais, de cada quilowatt;
b) o valor, em reais, a ser pago por essa residência;
c) o valor, em reais, a ser pago com desconto de 15%.

Sabendo disso, desenvolva um algoritmo que peça para o usuário inserir o valor 
do salário mínimo e a quantidade de quilowatts consumida. Invoque o respectivo
procedimento e mostre, na tela, as informações dos itens a), b) e c).*/

function lst2_ex5(){

sal_min=parseFloat(prompt("Insira o salário mínimo vigente"));
quilowatt=parseFloat(prompt("Insira a quantidade de quilowatts consumidos"));


custo_q=(sal_min/1000)
custo_c=quilowatt*custo_q;
custo_d=custo_c-(custo_c*0.15);


document.write("O custo de cada quilowatt é: R$ "+parseFloat(custo_q.toFixed(2))+".<br>"+
				"Logo, o valor a ser pago é: R$ "+parseFloat(custo_c.toFixed(2))+".<br>"+
				"Porém, com um desconto de 15%, o valor a ser pago é: R$ "+parseFloat(custo_d.toFixed(2))+".");





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