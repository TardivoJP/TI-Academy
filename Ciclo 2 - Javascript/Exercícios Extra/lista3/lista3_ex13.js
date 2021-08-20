/*Faça um programa que mostre o menu de opções a seguir, receba a 
opção do usuário e dos dados necessários para executar cada operação.
Suponha que o usuário não irá inserir valores inválidos.

Menu de opções:
1. Somar dois números
2. Raiz quadrada de um número*/

function lst3_ex13(){

op=parseFloat(prompt("Menu de opções:\n"+
					"1. Somar dois números\n"+
                    "2. Raiz quadrada de um número"));

while((op!=1)&&(op!=2)){
	alert("Opção inválida!");
	op=parseFloat(prompt("Tente novamente\n"+
						"Menu de opções:\n"+
						"1. Somar dois números\n"+
                    	"2. Raiz quadrada de um número"));
}


if(op==1){
	n1=parseFloat(prompt("Insira o primeiro número"));
	n2=parseFloat(prompt("Insira o segundo número"));
	soma=n1+n2;
	document.write("A soma de "+parseFloat(n1.toFixed(2))+" e "+parseFloat(n2.toFixed(2))+" resulta em "+parseFloat(soma.toFixed(2))+".")
}else if(op==2){
	n3=parseFloat(prompt("Insira um número"));
	if(n3>=0){
		raiz_p=Math.sqrt(n3);
		document.write("A raiz quadrada de "+parseFloat(n3.toFixed(2))+" é "+parseFloat(raiz_p.toFixed(2))+".")
	}else if(n3<0){
		converte=n3*(-1);
		raiz_i=Math.sqrt(converte);
		document.write("A raiz quadrada de "+parseFloat(n3.toFixed(2))+" é "+parseFloat(raiz_i.toFixed(2))+"i.")
	}
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