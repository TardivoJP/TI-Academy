/*Faça um programa que leia um valor N inteiro e positivo, calcule e 
mostre o valor de E, conforme a fórmula a seguir:

E = 1 + 1/1! + 1/2! + 1/3! + ... + 1/N!*/

function lst4_ex15(){

//similar aos exercício 3 e 14 desta lista
//mas novamente temos o conceito de
//colocar um loop dentro de outro loop
n1=parseInt(prompt(`Digite um valor positivo`));

while(n1<0){
	alert("Você não digitou um valor válido!");
	n1=parseInt(prompt(`Digite um valor POSITIVO`));
}

n4=n1; //n2 à n4 são variáveis de controle
n3=n1; //basicamente clonando a variável 
n2=n1; //digitada pelo usuário sem mexer nela

e=2;  //e é o que nós queremos, sempre começa em 2 pois
	  //é o mínimo que ele pode ser, porque 1! e 0! são 1
	  //somados com o primeiro 1, temos 2
x=1;

while(n4>1){
	while(n2>1){
		n2=n2-1;
		n3=n3*n2;
	}
		e=e+(1/n3);
		n2=n1-x;
		n3=n2;
		x++;
		n4=n4-1;
}
																				//optei por não colocar .toFixed no E
																				//pois as casas decimais me parecem bem
																				//relevantes nessa fórmula, tendo em vista
																				//que sempre teremos 1 dividido por um valor
																				//cada vez mais alto
document.write(`E = 1 + 1/1! + 1/2! + 1/3! + ... + 1/N!<br>Logo, para N = ${n1}, E = ${e}.`);





(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button');
    btnz.setAttribute('value', 'Voltar');
    btnz.style.width = "100px";
    btnz.style.height = "50px";
    btnz.style.position = "absolute";
    btnz.style.top = "25%";
    btnz.style.left = "5%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}