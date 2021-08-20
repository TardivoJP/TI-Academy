/*Faça um programa que receba o ano de nascimento 
de uma pessoa e ano atual, calcule e mostre:

a) a idade dessa pessoa;
b) quantos anos essa pessoa terá em 2030;*/

function lst1_ex16(){

ano_nasc=parseInt(prompt("Insira seu ano de nascimento"));

while(ano_nasc<=0){
		ano_nasc=parseInt(prompt("Caramba, não sabia que você é da época de cristo!"));
}

ano_atual=parseInt(prompt("Insira o ano atual"));

while(ano_atual<=0){
		ano_atual=parseInt(prompt("Acho que naquela época não existiam computadores!"));
}

idade=ano_atual-ano_nasc;
idade_f=2030-ano_nasc;

if(ano_nasc==ano_atual){
	plural_id='anos? Deve ser um recém nascido super dotado para utilizar esse sistema!';
}else if(idade==1){
	plural_id='ano? Deve ser um bebê gênio!';
}else if(idade>=1001){
	plural_id='anos! Você é um highlander né?';
}else if(idade>=1000){
	plural_id='anos! Você viveu por um milênio! Como assim?';
}else if(idade>=200){
	plural_id='anos! Você é um vampiro?';
}else if(idade>=150){
	plural_id='anos! Tá meio estranho isso daí!';
}else if(idade>=101){
	plural_id='anos! Você chegou na quarta idade!';
}else if(idade>=100){
	plural_id='anos! Você viveu por um século!';
}else{
	plural_id='anos.';
}

if(idade_f==1&&(ano_atual<2030)){
	plural_if='ano! Deve ser um viajante do futuro pois você nem nasceu ainda!';
}else if(idade_f==1&&(ano_atual>2030)){
	plural_if='ano! Deve ser um recém nascido super dotado para utilizar esse sistema!';
}else{
	plural_if='anos.';
}

if(ano_atual<2030){
	ter='terá';
}else if(ano_atual>2030){
	ter='tinha';
}

document.write("Você inseriu que nasceu em "+ano_nasc+", e que estamos no ano "+ano_atual+".<br>"+
				"Então, você tem "+idade+" "+plural_id+"<br>");

if(ano_atual!=2030){
	document.write("Em 2030, você "+ter+" "+idade_f+" "+plural_if);
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