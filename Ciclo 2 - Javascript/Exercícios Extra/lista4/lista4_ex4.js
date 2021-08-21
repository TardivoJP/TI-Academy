/*Desenvolva um algoritmo que receba um número N e imprima a tabuada de N, na tela.*/

function lst4_ex4(){

n=parseFloat(prompt("Insira um número"));

x=0

while(x<=10){
	r=n*x;
	document.write(`${n} x ${x} = ${r}<br>`); //após a aula do professor marcelo no dia 20/08
                                              //onde ele ensinou essa notação passei a utilizá-la
                                              //realmente é bem mais simples do que ficar usando:
                                              // " string "+var+" string "+let+" string "+const 
                                              //comparado com
                                              // ` string ${var} string ${let} string ${const} `
	x=x+1;
}





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