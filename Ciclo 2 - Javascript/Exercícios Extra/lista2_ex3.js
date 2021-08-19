/*Pedro comprou um saco de ração para seus gatos, com o peso em quilos. Faça uma 
função que receba o peso do saco de ração, em quilos, o número de gatos e a 
quantidade de ração fornecida para cada gato por dia, em gramas. A função deve 
retornar o total de quilos de ração restante no saco, após um dia de consumo. 

??????                                                             ????????
Assim sendo, considerando que Pedro possui dois gatos, crie um algoritmo que 
invoque a função recém criada para calcular e mostrar quanto restará de ração no 
saco após cinco dias.*/

function lst2_ex3(){

peso=parseFloat(prompt("Insira o peso do saco de ração EM QUILOS"));
n_gatos=parseFloat(prompt("Insira o número de gatos"));
q_racao=parseFloat(prompt("Insira a quantidade de ração fornecida para cada gato por dia EM GRAMAS"));
dias=parseFloat(prompt("Insira o tempo EM DIAS maior que 1"));

while(dias<=1){
		dias=parseFloat(prompt("Insira um número em dias MAIOR QUE 1"));
}


peso_g=peso*1000;
racao_f=q_racao*n_gatos;
restante=peso_g-racao_f;
restante_q=restante/1000;

restante_d=peso_g-(racao_f*dias);
restante_dq=restante_d/1000;


racao_f_pedro=q_racao*2;
restante_pedro=peso_g-(racao_f_pedro*5);
restante_pedro_q=restante_pedro/1000;


if(peso==1){
	plural_q1='quilo';
}else{
	plural_q1='quilos';
}

if(restante_q==1){
	plural_q2='quilo';
}else{
	plural_q2='quilos';
}

if(restante_dq==1){
	plural_q3='quilo';
}else{
	plural_q3='quilos';
}

if(restante_pedro_q==1){
	plural_q4='quilo';
}else{
	plural_q4='quilos';
}


if(peso_g==1){
	plural_g1='grama';
}else{
	plural_g1='gramas';
}

if(q_racao==1){
	plural_g2='grama';
}else{
	plural_g2='gramas';
}

if(racao_f==1){
	plural_g3='grama';
}else{
	plural_g3='gramas';
}

if(restante==1){
	plural_g4='grama';
}else{
	plural_g4='gramas';
}

if(restante_d==1){
	plural_g5='grama';
}else{
	plural_g5='gramas';
}

if(restante_pedro==1){
	plural_g6='grama';
}else{
	plural_g6='gramas';
}


document.write("O peso do saco de ração é "+parseFloat(peso.toFixed(1))+" "+plural_q1+", ou "+parseFloat(peso_g.toFixed(1))+" "+plural_g1+".<br>"+
				"O número de gatos é  "+parseFloat(n_gatos.toFixed(2))+".<br>"+
				"A quantidade de ração fornecida para cada gato por dia é "+parseFloat(q_racao.toFixed(2))+" "+plural_g2+".<br>"+
				"Logo, em um dia, o consumo será "+parseFloat(racao_f.toFixed(2))+" "+plural_g3+".<br>"+
				"O restante no saco de ração após um dia é "+parseFloat(restante_q.toFixed(1))+" "+plural_q2+", ou "+parseFloat(restante.toFixed(1))+" "+plural_g4+".<br>"+
				"O restante no saco de ração após "+parseFloat(dias.toFixed(2))+" dias é "+parseFloat(restante_dq.toFixed(1))+" "+plural_q3+", ou "+parseFloat(restante_d.toFixed(1))+" "+plural_g5+".<br>"+
				"<br>Agora, Pedro, é um garoto muito especial, que possui 2 gatos.<br>Só que eu não sei quanto de ração ele dá para esses bichinhos,<br>"+
				"ou ainda, qual era o peso do saco de ração no começo<br>Porém, apenas para cumprir a função, vamos considerar esses valores desconhecidos<br>"+
				"como os fornecidos pelo usuário anteriormente, apenas mudando o número de gatos e o número de dias.<br>"+
				"Assim, para Pedro, o restante no saco de ração após 5 dias é "+parseFloat(restante_pedro_q.toFixed(1))+" "+plural_q4+", ou "+parseFloat(restante_pedro.toFixed(1))+" "+plural_g6+".");





(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button'); // input element of type button
    btnz.setAttribute('value', 'Voltar');
    btnz.style.width = "100px";
    btnz.style.height = "50px";
    btnz.style.position = "absolute";
    btnz.style.top = "30%";
    btnz.style.left = "5%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}