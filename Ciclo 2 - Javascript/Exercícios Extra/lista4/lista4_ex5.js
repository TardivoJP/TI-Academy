/*Charlinho tem 11 anos, mede 1,40 metros de altura e cresce em média 2,1
centímetros ao ano. Seu irmão, Bossa, aos 14 anos, tem 1,45 metros de altura e cresce
em média 1,1 centímetro por ano. Elabore um programa que conte quantos anos
serão necessários para que a altura de Charlinho ultrapasse a de Bossa.*/

function lst4_ex5(){

altura_c=140;
altura_b=145;
tempo=0;

while(altura_c<=altura_b){
	altura_c=altura_c+2.1;
	altura_b=altura_b+1.1;
	tempo=tempo+1;
}

altura_c=altura_c/100;
altura_b=altura_b/100;
idade_c=tempo+11;
idade_b=tempo+14;

document.write(`Após ${tempo} anos, Charlinho tem ${altura_c.toFixed(2)}m de altura, enquanto Bossa tem apenas ${altura_b.toFixed(2)}m.<br>
				Apenas por curiosidade, Charlinho agora tem ${idade_c} anos, enquanto Bossa tem ${idade_b} anos.`);





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