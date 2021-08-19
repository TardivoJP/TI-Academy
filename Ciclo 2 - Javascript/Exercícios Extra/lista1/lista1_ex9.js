/*Faça um programa que calcule e mostre a área de um triângulo. 
Sabe-se que: Área = (base * altura)/2.*/

function lst1_ex9(){

base=parseFloat(prompt("Insira a medida da base do triângulo"));
altura=parseFloat(prompt("Insira a medida da altura do triângulo"));

area=((base+altura)/2);

document.write("A área deste triângulo é "+area.toFixed(1));





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