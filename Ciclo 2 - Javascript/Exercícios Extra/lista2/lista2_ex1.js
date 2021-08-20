/*O custo de um carro novo ao consumidor final é o preço de fábrica somado ao 
percentual de lucro do distribuidor, acrescido dos impostos aplicados ao preço 
de fábrica. Faça um programa que receba o preço de fábrica de um veículo, o 
percentual de lucro do distribuidor e o percentual de impostos. Em cada item, 
crie uma função distinta para calcular e retornar:

a) o valor correspondente ao lucro do distribuidor;
b) o valor correspondente aos impostos;
c) o preço final do veículo.

Após criar cada uma das funções, desenvolva um algoritmo que declare e invoque cada
uma das funções, mostrando o lucro do distribuidor, os impostos e o valor final do
veículo.*/

function lst2_ex1(){

pr_fab=parseFloat(prompt("Insira o preço de fábrica do veículo"));
po_luc=parseFloat(prompt("Insira o percentual de lucro do distribuidor"));
po_imp=parseFloat(prompt("Insira o percentual de impostos"));


lucro=pr_fab*(po_luc/100);
impost=pr_fab*(po_imp/100);
pr_fin=pr_fab+lucro+impost;


document.write("O preço de fábrica do veículo é: R$ "+parseFloat(pr_fab.toFixed(2))+".<br>"+
				"O percentual de lucro do distribuidor de "+parseFloat(po_luc.toFixed(1))+"% é: R$ "+parseFloat(lucro.toFixed(2))+".<br>"+
				"O percentual de impostos de "+parseFloat(po_imp.toFixed(1))+"% é: R$ "+parseFloat(impost.toFixed(2))+".<br>"+
				"Logo, o preço final do veículo é: R$ "+parseFloat(pr_fin.toFixed(2))+".");





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