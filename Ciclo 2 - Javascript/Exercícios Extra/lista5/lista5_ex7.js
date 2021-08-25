/*Desenvolva um algoritmo que preencha cada elemento de uma matriz 3x3 com o
quadrado do valor do índice da linha mais o valor do índice da coluna daquela posição.
Ao final, o algoritmo deve mostrar a matriz, na tela.*/

function lst5_ex7(){

w=1;             //não sei se é apenas coisa do javascript mas para
x=0;             //criarmos matrizes "2D" com linhas e colunas temos
y=0;             //que basicamente criar uma matriz dentro da outra
z=1;             //e a visualização disso não é 100% intuitivo igual
quad=0;          //seria se estivéssimos trabalhando com matrizes
result=0;        //manualmente em uma folha de papel por exemplo

array=[];           //aqui estamos usando o mesmo princípio de loop que já utilizamos muitas
while(x<3){         //vezes para definir as matrizes dentro de matrizes, sim é meio confuso, mas
	array[x]=[];    //em síntese estamos declarando => array[0]=[]; , array[1]=[]; e array[2]=[];
	x++;			//como é uma matriz 3x3 não faz tanta diferença comparado a simplesmente realizar
}                   //essas declarações uma a uma, mas caso fosse uma matriz maior como 5x5, 10x10, etc
                    //seria uma maneira bem mais eficiente de realizar esta mesma tarefa
x=0;
                                   //o princípio aqui é o mesmo de um loop dentro de um loop que já    
while(x<3){                        //utilizamos em vários exercícios. De forma simples, declaramos   
	while(y<3){                    //linhas e colunas conforme o diagrama abaixo, começando pelas   
		quad=Math.pow(w, 2);       //colunas:   
		result=quad+z;             //                 array[linha][coluna];
		array[x][y]=result;        //   array[0][0]=2;   array[0][1]=3;    array[0][2]=4;                
		z++;                       //   
		y++;                       //após isso, incrementamos os valores para a linha e repetimos:
	}                              // 
	y=0;                           //   array[1][0]=5;   array[1][1]=6;   array[1][2]=7; 
	z=1;                           //   array[2][0]=10;  array[2][1]=11;  array[2][2]=12;
	w++;						   //
	x++;                           //dessa forma, temos como resultado uma matriz 3x3 conforme as
}								   //especificações do enunciado

arrayString1=array[0].join(' / ');    //apenas para a visualização ficar melhor com
arrayString2=array[1].join(' / ');    //o (document.write), pois caso contrário seria
arrayString3=array[2].join(' / ');    //tudo bagunçado na mesma linha

document.write(`${arrayString1}<br>${arrayString2}<br>${arrayString3}<br>Dá uma olhada no console log também!`);
console.log(array);   //aqui eu achei conveniente colocar o (console.log)
					  //pois a visualização dele neste caso é bem melhor



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