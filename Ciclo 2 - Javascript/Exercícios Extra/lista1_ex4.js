/*Faça um programa que receba o salário de um funcionário, calcule 
e mostre o novo salário, sabendo-se que este sofreu um aumento de 25%.*/

function lst1_ex4(){

salario=parseFloat(prompt("Insira o seu salário"));

salario_aument=(salario*1.25);

document.write("O seu salário de R$ "+salario.toFixed(2)+" com um aumento de 25% é R$ "+salario_aument.toFixed(2));





(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button'); // input element of type button
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