/*Desenvolva um algoritmo que some todos os números 
inteiros compreendidos entre 1 e 10 (inclusive).*/

function lst4_ex1(){

soma=0;
x=0;


while(x <= 10){
	soma=soma+x;
	x++
}

document.write(soma);





(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute('class', 'bitao');
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