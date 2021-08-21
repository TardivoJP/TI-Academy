/*Desenvolva um algoritmo que mostre a tabuada de todos os números inteiros
compreendidos entre 1 e 10 (inclusive).*/

function lst4_ex13(){

//similar ao exercício 4 desta lista
//o conceito interessante aqui é a possibilidade
//de colocar um loop dentro de outro loop


for(n=1;n<=10;n++){
	document.write(` <br>`); //espacinho para separar cada tabuada
	for(x=0;x<=10;x++){
		r=n*x;
		document.write(`${n} x ${x} = ${r}<br>`);
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
    btnz.style.top = "8%";
    btnz.style.left = "8%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}