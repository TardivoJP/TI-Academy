
var n = 15;

var nome = prompt("Digite seu nome");

var numeroString = prompt(nome+" , digite um numero para comparar com 'n'");

var numeroVerdadeiro = parseInt(numeroString);

var compara = (n == numeroVerdadeiro);

var soma = n+numeroVerdadeiro;

var subtracao = n-numeroVerdadeiro;

var modulo = numeroVerdadeiro%n;

var quadrado = Math.pow(numeroVerdadeiro, 2);

document.write("1. Olá, <b>"+nome+"</b>!"+"<br>");
document.write("2. Seu número é: <b>"+numeroVerdadeiro+"</b>."+"<br>");

if(compara === true){
	document.write("3. Seu número é igual a <b>n</b>!"+"<br>");
}else{
	document.write("3. Seu número é diferente de <b>n</b>!"+"<br>");
}

document.write("4. A soma dele e <b>n</b> é: <b>"+soma+"</b>."+"<br>");
document.write("5. A subtração dele e <b>n</b> é: <b>"+subtracao+"</b>."+"<br>");
document.write("6. O resto da divisão entre ele e <b>n</b> é: <b>"+modulo+"</b>."+"<br>");
document.write("7. O seu número elevado ao quadrado é: <b>"+quadrado+"</b>.");

