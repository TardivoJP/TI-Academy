/*Desenvolva um algoritmo que receba um número N e calcule o fatorial de N,
sabendo que N! = N * (N-1) * (N-2) * ... * 3 * 2 * 1.*/

function lst4_ex3(){

n1=parseInt(prompt("Insira um número positivo"));

while(n1<0){
	alert("Não temos fatorial de número negativo!")
	n1=parseInt(prompt("Insira um número POSITIVO"));
}

n=n1;
n2=n1;


while(n2>1){
	n2=n2-1;
	n=n*n2;
}

if(n1==0){
	n=1; // 0! é igual a 1
}

document.write(n1+"! = "+n+".");





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