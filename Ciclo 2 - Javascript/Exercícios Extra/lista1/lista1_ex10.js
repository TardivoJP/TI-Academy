/*Faça um programa que calcule e mostre a área de um círculo. 
Sabe-se que: Área = Pi * R ao quadrado, aonde Pi = 3,14.*/

function lst1_ex10(){

raio=parseFloat(prompt("Insira a medida do raio do círculo"));

area=(Math.pow(raio, 2))*3.14;

document.write("A área deste círculo é "+area.toFixed(1));





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