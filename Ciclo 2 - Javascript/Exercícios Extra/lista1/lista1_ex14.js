/*Faça um programa que receba dois números maiores que zero, 
calcule e mostre um elevado ao outro.*/

function lst1_ex14(){

numero=parseInt(prompt("Insira o primeiro número maior que zero"));

while(numero<=0){
		numero=parseInt(prompt("Insira o primeiro número MAIOR QUE ZERO"));
}

numero2=parseInt(prompt("Insira o segundo número maior que zero"));

while(numero2<=0){
		numero=parseInt(prompt("Insira o segundo número MAIOR QUE ZERO"));
}

quadrado=Math.pow(numero, numero2);
quadrado2=Math.pow(numero2, numero);


if(numero!=numero2){
	document.write("Você inseriu os números "+numero+" e "+numero2+".<br>"+
				numero+" elevado a "+numero2+" é "+quadrado+".<br>"+numero2+
				" elevado a "+numero+" é "+quadrado2+".");
}else{
	document.write("Você inseriu dois números iguais, "+numero+".<br>"+
				"Ele elevado a ele mesmo é "+quadrado+".");
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