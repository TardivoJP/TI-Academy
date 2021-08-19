/*Faça um programa que receba o salário-base de um funcionário, 
calcule e mostre o seu salário a receber, sabendo-se que esse
funcionário teve gratificação de R$ 600,00 e paga imposto de 10% 
sobre o salário base.*/

function lst1_ex7(){

salario=parseFloat(prompt("Insira o seu salário"));

sal_liq=((salario+600)-(salario*0.1));

document.write("Salário líquido a receber: R$"+sal_liq.toFixed(2));





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