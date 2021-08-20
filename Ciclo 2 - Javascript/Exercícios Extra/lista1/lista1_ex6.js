/*Faça um programa que receba o salário-base de um funcionário, 
calcule e mostre o salário a receber, sabendo-se que esse funcionário
tem gratificação de 5% sobre o salário-base e paga imposto de 7% sobre o
salário-base.*/

function lst1_ex6(){

slro_b=parseFloat(prompt("Insira o seu salário"));

slro_g=slro_b*0.05;

slro_i=slro_b*0.07;

slro_r=((slro_b+slro_g)-slro_i);

document.write("O seu salário de R$ "+slro_b.toFixed(2)+" tem uma gratificação"+
 				" de 5%, o que resulta em: R$"+slro_g.toFixed(2)+".<br>"+
 				"Porém, existe uma carga tributária de 7%, o que resulta em: R$"
 				+slro_i.toFixed(2)+".<br>Assim, o seu salário a receber com a"+
 				" adição da gratificação e subtração dos tributos é de R$"
 				+slro_r.toFixed(2));





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