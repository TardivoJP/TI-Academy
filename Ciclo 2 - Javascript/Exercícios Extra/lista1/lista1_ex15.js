/*Sabe-se que:
1 pé = 12 polegadas;
1 jarda = 3 pés;
1 milha = 1760 jardas;

Faça um programa que receba uma medida em pés, faça as conversões a seguir e
mostre os resultados.
a) polegadas;
b) jardas;
c) milhas.*/

function lst1_ex15(){

pe=parseFloat(prompt("Insira uma medida em pés para realizar a conversão em polegadas, jardas e milhas"));

polegada=pe*12;
jarda=pe/3;
milha=jarda/1760;


if(pe==1){
	plural_pe='pé';
}else{
	plural_pe='pés';
}

if(polegada==1){
	plural_po='polegada';
}else{
	plural_po='polegadas';
}

if(jarda==1){
	plural_ja='jarda';
}else{
	plural_ja='jardas';
}

if(milha==1){
	plural_mi='milha';
}else{
	plural_mi='milhas';
}

document.write(pe+" "+plural_pe+" são equivalentes a:<br>"+parseFloat(polegada.toFixed(4))+" "+plural_po+"<br>"+parseFloat(jarda.toFixed(4))+
				" "+plural_ja+"<br>"+parseFloat(milha.toFixed(4))+" "+plural_mi);





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