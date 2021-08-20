/*Faça um programa que receba o salário de um funcionário e o percentual de aumento, 
calcule e mostre o valor do aumento e o novo salário.*/

function lst1_ex5(){

salario=parseFloat(prompt("Insira o seu salário"));
aumento=parseFloat(prompt("Insira o percentual de aumento"));

salario_aument=(salario+(salario*(aumento/100)));

document.write("O seu salário de R$ "+salario.toFixed(2)+" com um aumento de "+aumento+"% é R$ "+salario_aument.toFixed(2));





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