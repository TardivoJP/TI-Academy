/*Desenvolva um algoritmo que peça ao usuário que informe os coeficientes a, b e c de
uma equação de segundo grau: ax2 + bx + c. Com base na Fórmula de Bhaskara, calcule
e mostre as raízes da respectiva equação de segundo grau.*/

function lst3_ex11(){

alert("Informe os coeficientes a, b e c de uma\nequação de segundo grau: ax2 + bx + c");
n1=parseFloat(prompt("Insira o coeficiente 'a'"));
n2=parseFloat(prompt("Insira o coeficiente 'b'"));
n3=parseFloat(prompt("Insira o coeficiente 'c'"));

delta=Math.pow(n2, 2)-4*n1*n3;

if(delta>0){
	bhaskara_x1=((-n2) + Math.sqrt(Math.pow(n2, 2)-4*n1*n3))/2*n1;
	bhaskara_x2=((-n2) - Math.sqrt(Math.pow(n2, 2)-4*n1*n3))/2*n1;
	document.write(parseFloat(bhaskara_x1.toFixed(2))+", "+parseFloat(bhaskara_x2.toFixed(2)));
}else if(delta==0){
	x=(-n2)/2*n1;
	document.write("Ambas as raizes são "+parseFloat(x.toFixed(2)));	
}else if(delta<0){
	delta_i=delta*(-1);
	numero_i_pos=Math.sqrt(delta_i)/2*n1;
	numero_i_neg=(- Math.sqrt(delta_i))/2*n1;
	numero_r=(-n2)/2*n1;
	document.write(parseFloat(numero_r.toFixed(2))+"*"+parseFloat(numero_i_pos.toFixed(4))+"i, "+parseFloat(numero_r.toFixed(2))+"*"+parseFloat(numero_i_neg.toFixed(4))+"i");
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