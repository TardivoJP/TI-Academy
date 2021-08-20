/*Desenvolva um algoritmo que peça para que o usuário informe a base e a altura de um
retângulo, e um terceiro número inteiro "op". Caso o usuário escolha "op" igual a 0,
calcule e mostre o perímetro do retângulo. Caso o usuário insira um valor 1 para "op",
calcule e mostre a área do retângulo. Se o usuário inserir um valor diferente de 0 e 1
para "op", mostrar a mensagem "Opção inválida.".*/

function lst3_ex6(){

base=parseFloat(prompt("Insira a medida da base do retângulo"));
altura=parseFloat(prompt("Insira a medida da altura do retângulo"));
op=parseInt(prompt("Insira o número (0) para calcular o perímetro e o número (1) para calcular a área"));

perimetro=(2*base)+(2*altura);
area=base*altura;

if(op==0){
	document.write("O perímetro do retângulo é "+parseFloat(perimetro.toFixed(4))+".");
}else if(op==1){
	document.write("A área do retângulo é "+parseFloat(area.toFixed(4))+".");
}else{
	document.write("Opção inválida.");
}





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