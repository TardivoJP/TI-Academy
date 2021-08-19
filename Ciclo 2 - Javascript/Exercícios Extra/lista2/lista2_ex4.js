/*Cada degrau de uma escada tem X cm de altura. Faça uma função que receba essa altura, 
em centímetros, e a altura que o usuário deseja alcançar ao subir a escada, em metros. 
A função deve retornar o número de degraus necessários para se atingir a altura desejada 
(desprezando a altura do próprio usuário).

????????                                                                  ????????
Em seguida, crie um algoritmo para que o usuário possa informar os dados de entrada da
função e, ao final, calcule e mostre o número de degraus.*/

function lst2_ex4(){

alt_degrau=parseFloat(prompt("Insira a altura EM CENTÍMETROS de cada degrau da escada"));

alt_desejada=parseFloat(prompt("Insira a altura EM METROS que deseja alcançar ao subir a escada"));


n_degraus=alt_desejada/(alt_degrau/100);


if(n_degraus==1){
	plural_d='degrau';
}else{
	plural_d='degraus';
}


document.write("A altura de cada degrau em centímetros é "+parseFloat(alt_degrau.toFixed(2))+".<br>"+
				"A altura desejada em metros é "+parseFloat(alt_desejada.toFixed(2))+".<br>"+
				"Logo, você terá que subir "+parseFloat(n_degraus.toFixed(2))+" "+plural_d+".");





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