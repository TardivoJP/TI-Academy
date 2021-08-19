/*Faça um programa que receba quatro números inteiros,
calcule e mostre a soma desses números.*/

function lst1_ex1(){

N1=parseInt(prompt("Insira o primeiro número"));

N2=parseInt(prompt("Insira o segundo número"));

N3=parseInt(prompt("Insira o terceiro número"));

N4=parseInt(prompt("Insira o quarto número"));

S=N1+N2+N3+N4;

document.write("O resultado é: "+S);





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