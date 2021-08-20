/*Faça um programa que receba o número de horas trabalhadas por um gestor e o 
valor do salário mínimo vigente. Crie uma função que calcule o salário a 
receber do gestor, seguindo as regras abaixo:

I - a hora trabalhada vale a metade do salário mínimo;
II - o salário bruto equivale ao número de horas trabalhadas multiplicado pelo valor da
hora trabalhada;
III - o imposto equivale a 3% do salário bruto;
IV - o salário a receber equivale ao salário bruto menos o imposto.

Crie um algoritmo que invoque a respectiva função e mostre o salário a receber.*/

function lst2_ex2(){

horas=parseFloat(prompt("Insira o número de horas trabalhadas"));
sal_min=parseFloat(prompt("Insira o salário mínimo vigente"));

val_h=(sal_min/2);
sal_brut=horas*(sal_min/2);
impost=sal_brut*0.03;
sal_receb=sal_brut-impost;


document.write("O número de horas trabalhadas é "+parseFloat(horas.toFixed(1))+".<br>"+
				"O valor da hora é: R$ "+parseFloat(val_h.toFixed(2))+".<br>"+
				"Logo, o salário bruto é: R$ "+parseFloat(sal_brut.toFixed(2))+".<br>"+
				"A carga tributária é de 3%, no valor de: R$ "+parseFloat(impost.toFixed(2))+".<br>"+
				"Assim, o salário a receber é: R$ "+parseFloat(sal_receb.toFixed(2))+".");





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