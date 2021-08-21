/*Faça um programa que mostre os oito primeiros termos da sequência de Fibonacci.
0-1-1-2-3-5-8-13-21-34-55-...*/

function lst4_ex11(){

//função para calcular fibonacci
function teste(x){

	if(x<1){ //se for o primeiro vai ser 0
		result=0;
	}else if(x<=2){ //se for o segundo ou terceiro vai ser 1
		result=1;
	}else{ //se for qualquer outro vai ser a soma dos dois anteriores
		result=teste(x-1)+teste(x-2);
	}

	return result; //retorna o valor para a posição x
}                  //conforme definido no começo da função (linha 7)

z=0; //definimos z como 0 para começarmos nosso loop

while(z<8){ //enquanto z for menor que oito o loop se repete
			//isso pode ser ajustado para quantos termos da sequência quisermos
			//da mesma forma podemos mudar a definição inicial de z
			//para iniciar em qualquer lugar da sequência que quisermos
	
	document.write(`${teste(z)} `); //aqui será impresso um termo da sequência e um espaço
									//como z é 0, será impresso o primeiro termo da sequência
									//e assim sucessivamente

	z++; //somamos +1 para z para continuarmos o loop até o valor desejado
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