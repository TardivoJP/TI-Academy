/*Jeremias possui um cronômetro que consegue marcar o tempo apenas em segundos.
Sabendo disso, desenvolva um algoritmo que receba o tempo cronometrado, em
segundos, e diga quantas horas, minutos e segundos se passaram a partir do tempo
cronometrado.*/

function lst1_ex11(){

segundo=parseFloat(prompt("Insira o tempo do cronometro em segundos"));
minuto=segundo/60;
hora=minuto/60;


plural_s='';
plural_m='';
plural_h='';


if(segundo==1){
	plural_s='segundo';
}else{
	plural_s='segundos';
}

if(minuto==1){
	plural_m='minuto';
}else{
	plural_m='minutos';
}

if(hora==1){
	plural_h='hora';
}else{
	plural_h='horas';
}


document.write("Se passaram "+parseFloat(segundo.toFixed(2))+" "+plural_s+", "+parseFloat(minuto.toFixed(2))+
				" "+plural_m+" e "+parseFloat(hora.toFixed(2))+" "+plural_h+" a partir do tempo cronometrado.");





(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button'); // input element of type button
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