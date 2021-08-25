/*Faça um programa que carregue uma matriz 3 x 5 com números inteiros
e some cada uma das linhas, armazenando o resultado das somas em um vetor.
A seguir, multiplique cada elemento da matriz pela soma da respectiva linha
daquele elemento e mostre a matriz resultante.*/

function lst5_ex12(){

w=1;
z=1;  
x=0;
y=0;

array=[];			//declaramos as matrizes dentro de matrizes
while(x<3){  
	array[x]=[];   
	x++;		
}                

x=0;

while(x<3){			//o usuário preeche os valores da matriz
	while(y<5){   
		array[x][y]=prompt(`Insira o valor da linha ${z}, coluna ${w}.`); 
		array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));		
			while(array[x][y]!==array[x][y]){         
				alert(`Você não digitou um número!`);        
					array[x][y]=prompt(`Insira o valor da linha ${z}, coluna ${w}.`);            
					array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
			}		                    
		y++;
		w++;                  
	}                       
	y=0;
	w=1;
	z++;                    
	x++;                        
}

arrayString1=array[0].join(' / ');
arrayString2=array[1].join(' / ');
arrayString3=array[2].join(' / ');

document.write(`Você inseriu a matriz:<br>${arrayString1}<br>${arrayString2}<br>${arrayString3}<br> <br>`);

x=0;
b=(array.length);

array2=[];			//declaramos as matrizes dentro de matrizes para a segunda matriz
while(x<b){			//que terá cada termo multiplicado pela soma dos valores de sua linha conforme pede o enunciado
	array2[x]=[];   
	x++;		
} 

x=0;
z=1;
c=0
soma=0;

while(x<b){			//aqui, combinamos os métodos utilizados nos exercícios 9 e 10, ou seja, soma e multiplicação
					//de cada linha da matriz. neste caso, o fato de precisarmos realizar as opereções linha por
					//linha acabou facilitando a resolução do exercício, caso fosse a soma das colunas, aí ia
					//complicar um pouco!
	soma=array[x].reduce((a, b) => a + b, 0);
	document.write(`A soma de todos os elementos da linha ${z} dessa matriz é ${parseFloat(soma.toFixed(4))}<br>`);
	array2[x]=array[x].map(x => x * soma);
	x++;
	z++;
}

array2String1=array2[0].join(' / ');
array2String2=array2[1].join(' / ');
array2String3=array2[2].join(' / ');

document.write(` <br>Multiplicando cada elemento da matriz pela soma dos valores de sua linha temos:
				<br>${array2String1}<br>${array2String2}<br>${array2String3}
				<br>(Dá uma olhada no console log também)`);
console.log(array);
console.log(array2);



(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button');
    btnz.setAttribute('value', 'Voltar');
    btnz.style.width = "100px";
    btnz.style.height = "50px";
    btnz.style.position = "absolute";
    btnz.style.top = "35%";
    btnz.style.left = "5%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}