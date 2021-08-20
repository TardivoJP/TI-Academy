/*Faça um programa que receba três números
distintos e mostre-os em ordem crescente.*/

function lst3_ex9(){

n1=parseFloat(prompt("Insira o primeiro número"));
n2=parseFloat(prompt("Insira o segundo número"));
n3=parseFloat(prompt("Insira o terceiro número"));


arruma=[n1,n2,n3];

arrumado=arruma.sort((a,b)=>a-b);

document.write("Você inseriu os números "+parseFloat(n1.toFixed(2))+", "+parseFloat(n2.toFixed(2))+" e "+parseFloat(n3.toFixed(2))+" .<br>"+
				"Na ordem crescente, fica "+arrumado+".");





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