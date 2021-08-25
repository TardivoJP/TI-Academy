/*Faça um programa que carregue uma matriz 10x3 com as três notas de dez alunos. 
Mostre um relatório com o número do aluno (número da linha) e a prova em que cada
aluno obteve menor nota. Ao final do relatório, mostre quantos alunos tiveram menor
nota na prova 1, quantos alunos tiveram menor nota na prova 2 e quantos alunos
tiveram menor nota na prova 3.*/

function lst5_ex13(){

w=1;
z=1;  
x=0;
y=0;

array=[];			//declaramos as matrizes dentro de matrizes
while(x<10){  
	array[x]=[];   
	x++;		
}                

x=0;

while(x<10){		//o usuário preeche os valores da matriz
	while(y<3){   
		array[x][y]=prompt(`Insira o valor da nota ${w}, para o aluno ${z}.`); 
		array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));		
			while(array[x][y]!==array[x][y]){         
				alert(`Você não digitou um número!`);        
					array[x][y]=prompt(`Insira o valor da nota ${w}, para o aluno ${z}.`);            
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

//esta é uma função fantástica que retorna o index de CADA menor valor em uma matriz!
//
//fonte: terceira resposta, de A. Sallai no link abaixo
// https://stackoverflow.com/questions/32657085/find-indexes-of-multiple-minimum-in-an-array-in-javascript
//
//os comandos do próprio javascript são bons para quebrar o galho, mas o problema é que
//geralmente eles apenas retornam o PRIMEIRO valor que encontram, quando geralmente nós
//queremos TODOS os valores que se enquadram na condição de pesquisa
//por exemplo, no caso deste exercício, e se um aluno tirar as notas 5, 5 e 10 nas respectivas provas?
//em tese a nota mais baixa seria da prova 1 E da prova 2, pois são iguais! logo, o ideal seria construir
//um algorítimo que controle por todos esses edge cases
function findMinimumIndexes(array) {
    var min = Math.min.apply(Math, array);
    var indexes = [];

    array.forEach(function(item, idx, arr) {
        if (item === min) {
            indexes.push(idx);
        }
    });

    return indexes;
}


posicao=[]; //aqui, criamos uma var para receber a posição dos valores mais baixos e declaramos ela como uma matriz
x=0;
z=1;
b=(array.length);
nota1=0;	//declaramos algumas vars para guardar o número de alunos com a nota mais baixa nas respectivas provas
nota2=0;
nota3=0;


while(x<b){ //criamos um novo loop para testar os valores mais baixos

		posicao[x]=findMinimumIndexes(array[x]); //invocamos a belíssima função acima para criar uma nova matriz
												 //com a(s) posição(ções) do(s) valor(es) mais baixo(s)

		//aqui temos uma outra bela função para somar +1 em cada valor da matriz recém criada, isso é importante
		//pois as matrizes no javascript começam do 0, e nós vamos utilizar este valor para apontar qual prova teve
		//a nota mais baixa para cada aluno, logo ao invés de ser erroneamente (Prova 0, Prova 1, Prova 2) a soma +1
		//proporciona os valores correctos (Prova 1, Prova 2, Prova 3)
		//
		//fonte da função: https://stackoverflow.com/questions/42800616/javascript-how-to-increase-all-the-element-in-int-array-by-1/42800628										 
		posicao[x]=(posicao[x].map(function(item) {
		  	return item + 1;
		}));


		if(posicao[x][2]!=undefined){		//aqui temos uma lógica condicional para averiguar se o aluno tirou a mesma nota em várias provas
											//como a função que calcula TODOS os menores valores cria uma matriz, podemos usar isso em nosso favor.
											//tendo em mente que as matrizes começam do 0, 1, 2 etc, verificamos se a posição 2 é (undefined)
											//caso não for, siginifica que tem realmente um número ali, ou seja, todas as 3 notas são iguais!
			document.write(`O aluno ${z} obteu a mesma nota nas três provas<br>`);



		}else if(posicao[x][1]!=undefined){ //após isso, se a posição 2 for realmente (undefined), fazemos a mesma coisa para a posição 1,
											//caso não for (undefined), siginifica que realmente tem um número ali, ou seja, ao menos 2
											//notas são iguais! como somamos +1 em todos os valores de posição, é trivial imprimir na tela
											//quais notas foram iguais!
			document.write(`O aluno ${z} obteu a mesma nota baixa nas provas ${posicao[x][0]} e ${posicao[x][1]}<br>`);
		}else{

				//caso nenhuma das condições acima for verdade, a única situação que 
				//nos resta é a mais comum, ou seja, o aluno teve uma nota mais baixa 
			document.write(`O aluno ${z} obteu a menor nota na prova ${posicao[x][0]}<br>`);
		}

				//por fim, incrementamos +1 nas vars respectivas de cada nota mais baixa para contabilizar
				//o total de cada prova no final
		if((posicao[x][0]==1)||(posicao[x][1]==1)||(posicao[x][2]==1)){
			nota1++;
		}
		if((posicao[x][0]==2)||(posicao[x][1]==2)||(posicao[x][2]==2)){
			nota2++;
		}
		if((posicao[x][0]==3)||(posicao[x][1]==3)||(posicao[x][2]==3)){
			nota3++;
		}

		z++;
		x++;
}

document.write(` <br>O numero de alunos que tiveram a menor nota na prova 1 é: ${nota1}
				<br>O numero de alunos que tiveram a menor nota na prova 2 é: ${nota2}
				<br>O numero de alunos que tiveram a menor nota na prova 3 é: ${nota3}`);

console.log(array);
console.log(posicao);

(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button');
    btnz.setAttribute('value', 'Voltar');
    btnz.style.width = "100px";
    btnz.style.height = "50px";
    btnz.style.position = "absolute";
    btnz.style.top = "36%";
    btnz.style.left = "5%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}