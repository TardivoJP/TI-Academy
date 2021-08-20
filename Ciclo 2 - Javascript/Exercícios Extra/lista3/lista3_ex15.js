/*Faça um programa que receba o salário de um funcionário, calcule e mostre o novo 
salário desse funcionário, acrescido de bonificação e de auxílio-escola.

Salário                                   Bonificação
Até R$ 500,00                             5% do salário
Entre R$ 500,01 e R$ 1.200,00             12% do salário
Acima de R$ 1.200,00                      Sem bonificação

Salário                                   Auxílio-escola
Até R$ 600,00                             R$ 150,00
Mais que R$ 600,00                        R$ 600,00

*/

function lst3_ex15(){

salario=parseFloat(prompt("Insira o salário"));

bonif=0;

if(salario<=500){
	bonif=salario*0.05;
}else if(salario>=500.01&&salario<=1200){
	bonif=salario*0.12;
}

aux=0;

if(salario<=600){
	aux=150;
}else{
	aux=600;
}

salario=salario+bonif+aux;

document.write("Salário final: R$"+salario.toFixed(2));





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