/*
	var n aleatória entre 0 e 100 (ajustável) e inteira (Math.floor)

	fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/
			
var n = Math.floor(Math.random() * (100 - 0) + 0);

var nome = prompt("Digite seu nome");


/*
	não entendi muito bem aqui o sentido de dizer que o número é um string
	como é um prompt, ela SEMPRE será um string
	caso tivesse "parseFloat()" ou "parseInt()" antes ela SEMPRE será um número ou NaN
		então ou será convertido diretamente, ou vai ser um string que é inutilizável como número
		para realizar os cálculos com a variável n
*/
var numeroString = prompt(nome+", digite um numero para comparar com 'n'");

alert("Opa! Não sei o que você enviou ainda!\nPor padrão, o prompt do Javascript entende como se fosse uma string.");

alert("Mas não se preocupe, essa string será convertida em número!\nEspero que você tenha feito isso mesmo em!");

var numeroVerdadeiro = parseFloat(numeroString);


/*
	este loop while serve para pausar o programa até o usuário digitar um valor válido
		neste caso um número para calcular com n

	o exatamente diferente (!==) funciona neste caso pois o valor NaN tem uma propriedade interessante
		ele não é igual(==) ou identico(===) à nenhum valor, nem mesmo ele mesmo
		com isso, podemos checar se um valor é NaN verifando se ele é exatamente diferente(!==) a ele mesmo
		pois isso somente será verdade com NaN e nenhum outro número
	
	fonte: https://dmitripavlutin.com/nan-in-javascript/
*/
while(numeroVerdadeiro !== numeroVerdadeiro){
	var numeroString = prompt("Veja bem, "+nome+"!\nVerificamos que você não digitou um número!\nTente digitar novamente!");
	var numeroVerdadeiro = parseFloat(numeroString);
}


alert("Mais uma coisinha "+nome+"...\nPrometo que será a última!");

var x=prompt("Escolha entre essas 4 frutas:\nLaranja, Uva, Pera e Manga");

var fruta1='laranja';
var fruta2='uva';
var fruta3='pera';
var fruta4='manga';


/*
	uma preocupação de pedir ao usuário escrever uma palavra(sequencia de caracteres, ou STRING)
		é que as pessoas estão acostumadas a escrever de diversas formas em dispositivos digitais
		alguns escrevem tudo minúsculo, uns colocam a primeira letra maíscula, e outros até com CAPS LOCK
		por isso, busca-se uma solução (case incensitive) para que o prompt aceite como válido essas
		variadas formas de se escrever
			ex: laranja, Laranja, LARANJA, LaRaNjA, lArAnJa, etc...

	aqui, utiliza-se a função (localeCompare) do javascript
		o importante é que ela retorna o valor 0 se os strings comparados forem equivalentes

	fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


	com isso em mente, podemos utilizar novamente um loop while para pausar o programa até o usuário digitar 
		um valor válido, neste caso uma das frutas previamente estipuladas pelas variáveis fruta1 a fruta4

	após isso, comparamos o que o usuário digitou com as variáveis através da função (localeCompare)
		desta forma, criamos as variáveis frt1 a frt4
		se alguma delas tiver o valor 0, siginifica que temos um string correspondente, ou seja, o usuário
		digitou uma fruta válida, então prosseguimos para a lógica que verifica qual dessas frutas foi a
		escolhida para mostrar a mensagem correta na tela

	entretanto, caso nenhuma delas for 0, significa que o usuário digitou algo que não corresponde nenhuma
		das opções que foram disponibilizadas, então voltamos ao prompt da escolha para que esta seja
		realizada novamente até que um string válido seja digitado

	por isso que temos o while frt1, frt2, frt3 e frt4 DIFERENTE de 0 com o operador lógico && (E)
		ou seja, somente se frt1 E frt2 E frt3 E frt4 forem DIFERENTE de 0 que o loop é executado
		se apenas um deles é 0, signifca que um valor correto foi digitado, então o loop é desnecessário
*/


var frt1=(fruta1.localeCompare(x, 'pt', {sensitivity:'base'}));
var frt2=(fruta2.localeCompare(x, 'pt', {sensitivity:'base'}));
var frt3=(fruta3.localeCompare(x, 'pt', {sensitivity:'base'}));
var frt4=(fruta4.localeCompare(x, 'pt', {sensitivity:'base'}));

while(frt1!=0&&frt2!=0&&frt3!=0&&frt4!=0){
	alert("Calma aí "+nome+"!\nVocê não escolheu uma fruta válida!");
	var x=prompt("Escolha entre essas 4 frutas:\nLaranja, Uva, Pera e Manga");
	var frt1=(fruta1.localeCompare(x, 'pt', {sensitivity:'base'}));
	var frt2=(fruta2.localeCompare(x, 'pt', {sensitivity:'base'}));
	var frt3=(fruta3.localeCompare(x, 'pt', {sensitivity:'base'}));
	var frt4=(fruta4.localeCompare(x, 'pt', {sensitivity:'base'}));
}


//aqui, após coletarmos todos os dados necessários
//finalmente começamos a escrever as informações relevantes na tela do usuário
document.write("1. Olá, <b>"+nome+"</b>!<br>");



/*
	aqui temos a lógica para decidir qual mensagem será imprimida na tela do usuário
		dependendo de qual fruta ele escolheu anteriormente

	confesso que um (switch) me parece mais elegante do que vários (if) (else),
		porém, não consegui utilizar este código com switchs, nunca acabou dando
		certo por algum motivo, e sempre caia no caso padrão(default)

	enfim, trata-se de uma sequência lógica de escolhas, se a fruta1 for igual a 0
		imprime-se o seu texto na tela, se não verificamos a fruta2 e assim
		sucessivamente, lembrando que as únicas escolhas possíveis são as quatro frutas
		especificadas anteriormente, pois o loop while foi responsável por filtrar
		apenas as escolhas que se enquadram neste padrão
*/

if((fruta1.localeCompare(x, 'pt', {sensitivity:'base'}))===0){
	document.write("2. Sua fruta escolhida foi a <b>laranja</b>!<br>");
}else if((fruta2.localeCompare(x, 'pt', {sensitivity:'base'}))===0){
			document.write("2. Sua fruta escolhida foi a <b>uva</b>!<br>");
}else if((fruta3.localeCompare(x, 'pt', {sensitivity:'base'}))===0){
			document.write("2. Sua fruta escolhida foi a <b>pera</b>!<br>");
}else if((fruta4.localeCompare(x, 'pt', {sensitivity:'base'}))===0){
			document.write("2. Sua fruta escolhida foi a <b>manga</b>!<br>");
}


document.write("3. Seu número é: <b>"+numeroVerdadeiro+"</b>."+"<br>");


/*
	aqui, utiliza-se a função (Number.isInteger) para verificar se o número é intero
	e determinamos a frase correta para imprimir na tela através de uma estrutura bem
	básica de condições
*/
if((Number.isInteger(numeroVerdadeiro))){
	document.write("4. Seu número é inteiro!"+"<br>");
}else{
	document.write("4. Seu número não é inteiro!"+"<br>");
}


//aqui temos os cálculos a serem realizados com n mais o quadrado no número escolhido
//pelo usuário
var compara = (n == numeroVerdadeiro);

var soma = n+numeroVerdadeiro;

var subtracao = n-numeroVerdadeiro;

var modulo = numeroVerdadeiro%n;

var quadrado = Math.pow(numeroVerdadeiro, 2);


//aqui temos outra estrutura básica de condições para verificar se o número escolhido
//pelo usuário é igual ao número n (fica mais divertido se o n é aleatório)
if(compara === true){
	document.write("5. Seu número é igual a <b>n</b>!"+"<br>");
}else{
	document.write("5. Seu número é diferente de <b>n</b>!"+"<br>");
}

//por fim, imprime-se os resultados dos cálculos realizados anteriormente
document.write("6. O retorno da comparação booleana entre ele e <b>n</b> é: <b>"+compara+"</b>."+"<br>");
document.write("7. A soma dele e <b>n</b> é: <b>"+soma+"</b>."+"<br>");
document.write("8. A subtração dele e <b>n</b> é: <b>"+subtracao+"</b>."+"<br>");
document.write("9. O resto da divisão entre ele e <b>n</b> é: <b>"+modulo+"</b>."+"<br>");
document.write("10. O seu número elevado ao quadrado é: <b>"+quadrado+"</b>.");