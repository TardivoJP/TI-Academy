/*Faça um programa que receba três notas e seus respectivos pesos, 
calcule e mostre a média ponderada dessas notas.*/

function lst1_ex3(){

N1=parseFloat(prompt("Insira a primeira nota"));
P1=parseFloat(prompt("Insira o peso desta nota"));

N2=parseFloat(prompt("Insira a segunda nota"));
P2=parseFloat(prompt("Insira o peso desta nota"));

N3=parseFloat(prompt("Insira a terceira nota"));
P3=parseFloat(prompt("Insira o peso desta nota"));

media_ponderada=(((N1*P1)+(N2*P2)+(N3*P3))/(P1+P2+P3));

document.write("A sua média ponderada é: "+media_ponderada.toFixed(1));





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