/*Faça um programa que receba um número positivo
e maior que zero, calcule e mostre:

a) o número digitado ao quadrado;
b) o número digitado ao cubo;
c) a raiz quadrada do número digitado;
d) a raiz cúbica do número digitado.
*/

function lst1_ex13(){

numero=parseInt(prompt("Insira um número positivo e maior que zero"));

while(numero<=0){
		numero=parseInt(prompt("Insira um número POSITIVO e MAIOR QUE ZERO"));
}

quadrado=Math.pow(numero, 2);
cubo=Math.pow(numero, 3);
raiz_q=Math.sqrt(numero);
raiz_c=Math.cbrt(numero);


document.write("Você inseriu o número "+numero+".<br>Ele ao quadrado é "+quadrado+
				".<br>Ele ao cubo é "+cubo+".<br>A raiz quadrada dele é "+raiz_q+
				".<br>A raiz cubica dele é "+raiz_c+".");





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