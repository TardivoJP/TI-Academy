/*Faça um programa que receba a hora de início de um jogo e a hora final do jogo 
(cada hora é composta por duas variáveis inteiras: hora e minuto). Calcule e mostre
a duração do jogo (horas e minutos) sabendo-se que o tempo máximo de duração do jogo
é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 
Observação: utilizar o formato de hora que vai das 00hr00min até as 23hr29min.*/

function lst3_ex14(){

n1=prompt("Insira a hora de início do jogo\nObs. utilize o formato de hora que vai das 00hr00min até as 23hr29min");
	tempo1=n1.split(/hr|min/);
	horas1=Number(tempo1[0]);
	minutos1=Number(tempo1[1]);

while((horas1>=24)||(horas1<0)||(horas1!==horas1)||(minutos1>=60)||(minutos1!==minutos1)){
	alert("Você não digitou um horário válido!")
	n1=prompt("Insira a hora de início do jogo\nOBS. UTILIZE O FORMATO DE HORA QUE VAI DAS 00hr00min ATÉ AS 23hr59min");
	tempo1=n1.split(/hr|min/);
	horas1=Number(tempo1[0]);
	minutos1=Number(tempo1[1]);
}


n2=prompt("Insira a hora final do jogo\nObs. utilize o formato de hora que vai das 00hr00min até as 23hr29min");
	tempo2=n2.split(/hr|min/);
	horas2=Number(tempo2[0]);
	minutos2=Number(tempo2[1]);

while((horas2>=24)||(horas2<0)||(horas2!==horas2)||(minutos2>=60)||(minutos2!==minutos2)){
	alert("Você não digitou um horário válido!")
	n2=prompt("Insira a hora final do jogo\nOBS. UTILIZE O FORMATO DE HORA QUE VAI DAS 00hr00min ATÉ AS 23hr59min");
	tempo2=n2.split(/hr|min/);
	horas2=Number(tempo2[0]);
	minutos2=Number(tempo2[1]);
}


if(horas1>horas2){
	horas_f=(24-horas1)+horas2;
	dia_s=' do dia seguinte.'
}else{
	horas_f=horas2-horas1;
	dia_s='.'
}

if(minutos1>minutos2){
	minutos_f=minutos1-minutos2;
	horas_f=horas_f-1;
}else{
	minutos_f=minutos2-minutos1;
}


if(horas_f==0){horas_f='0';}
if(minutos_f==0){minutos_f='0';}

if(horas_f<10){
	zero_esq_h='0';
}else{
	zero_esq_h='';
}

if(minutos_f<10){
	zero_esq_m='0';
}else{
	zero_esq_m='';
}

document.write("O jogo começou às "+n1+" e terminou às "+n2+dia_s+"<br>"+
				"O jogo durou "+zero_esq_h+horas_f+"hrs"+zero_esq_m+minutos_f+"min.");





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