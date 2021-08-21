/*Desenvolva um algoritmo que peça para o usuário inserir vários números inteiros. O
algoritmo deverá contabilizar a quantidade de números positivos informados. Caso o
usuário digite 0, o algoritmo deve mostrar quantidade contabilizada e encerrar.*/

function lst4_ex7(){

alert(`Insira quantos números inteiros quiser em sequência\nQuando quiser parar, insira 0`)
n=parseInt(prompt(`Insira um número`));

a=0;

while(n!=0){
	if(n>0){a=a+1;}
	n=parseInt(prompt(`Insira um número`));
}

if(a==1){
	plural_a="número";
	plural_b="inteiro";
	plural_c="positivo";
}else{
	plural_a="números";
	plural_b="inteiros";
	plural_c="positivos";
}

document.write(`Você digitou ${a} ${plural_a} ${plural_b} ${plural_c}.`);





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