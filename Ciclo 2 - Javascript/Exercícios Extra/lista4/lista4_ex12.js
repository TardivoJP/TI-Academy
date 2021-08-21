/*Desenvolva um algoritmo que receba um número N e informe se N é 
um número primo, ou não. A saber: um número primo é um inteiro
positivo que só pode ser dividido por ele mesmo e por um, apenas.*/

function lst4_ex12(){

n=parseInt(prompt(`Insira um número`));


function primo(numero){
	if (numero<2){ //se for menor que 2, não é primo
		return false;
	}

	raiz=Math.ceil(Math.sqrt(numero));//raiz quadrada do número
									  //todos os divisores únicos do número são iguais ou menores
									  //a raiz quadrada de n, então não é necessário testar números
									  //maiores que isso

	for(i=2;i<=raiz;i++){ //para i que começa em 2, até a raiz do número testado
						  //o i é incrementado em 1, testando todos os valores entre eles
		if(numero%i===0){ //se o resto for 0
			return false; //não é primo
		}
	}

	return true;
}

if(primo(n)==true){
	document.write(`${n} é primo.`)
}else{
	document.write(`${n} não é primo.`)
}
//FIM DO ALGORÍTIMO


//a wikipédia possui uma página sobre testes de números primos na computação
//incluindo um exemplo de uma função mais otimizada em javascript
//com um método chamado ( 6k ± 1 ), que aparentemente é 3x mais eficiente que
//utilizar apenas a raiz quadrada do número testado
//
//porém, confesso que não entendi muito bem os princípios matemáticos por traz
//deste método
//
//em todo caso, segue o algorítimo comentado abaixo a título de curiosidade
//
//fonte: https://en.wikipedia.org/wiki/Primality_test 

/*
function isPrime(num) {
  if (num <= 3) return num > 1;

  if ((num % 2 === 0) || (num % 3 === 0)) return false;

  let count = 5;

  while (Math.pow(count, 2) <= num) {
    if (num % count === 0 || num % (count + 2) === 0) return false;

    count += 6;
  }

  return true;
}
*/





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