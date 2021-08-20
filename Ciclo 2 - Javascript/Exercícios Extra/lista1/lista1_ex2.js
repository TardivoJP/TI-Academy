/*Faça um programa que receba três notas,
calcule e mostre a média aritmética entre elas.*/

function lst1_ex2(){

N1=parseFloat(prompt("Insira a primeira nota"));

N2=parseFloat(prompt("Insira a segunda nota"));

N3=parseFloat(prompt("Insira a terceira nota"));

media=((N1+N2+N3)/3);

document.write("A sua média é: "+media.toFixed(1));





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