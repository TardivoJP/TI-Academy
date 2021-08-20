/*Desenvolva um algorítimo que receba três números.
O algorítimo deve imprimir "Condição Satisfeita" na
tela, caso o primeiro dado inserido seja maior do que
os outros dois (o primeiro não pode ser igual a nenhum).
Caso contrário, dever ser impressa a mensagem: "Erro".*/

function lst3_ex2(){

N1=parseFloat(prompt("Digite o primeiro número"));

N2=parseFloat(prompt("Digite o segundo número"));

N3=parseFloat(prompt("Digite o terceiro número"));

if(N1>N2&&N1>N3){
	document.write("Condição satisfeita");
}else{
	document.write("Erro!");
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