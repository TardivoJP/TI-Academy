/*Desenvolva um algoritmo que peça para o usuário informar dois números. Após isso, o
algoritmo deve mostrar cálculo o primeiro número elevado ao segundo. Ao final, o
algoritmo deve perguntar se o usuário deseja repetir a operação. Caso o usuário insira
o caractere "s", o algoritmo solicita novamente dois números e mostra novamente a
potência do primeiro pelo segundo. Caso contrário, o algoritmo é encerrado.*/

function lst4_ex8(){

repete="s";

while(repete=="s"){
	n1=parseFloat(prompt(`Insira o primeiro número`));
	n2=parseFloat(prompt(`Insira o segundo número`));

	r=Math.pow(n1, n2);

	document.write(`${n1} elevado a ${n2} é: ${parseFloat(r.toFixed(4))}.<br>`);
	alert(`${n1} elevado a ${n2} é: ${parseFloat(r.toFixed(4))}.`);

	repete=(prompt(`Deseja repetir a operação?\nResponda com s/n`));
}





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