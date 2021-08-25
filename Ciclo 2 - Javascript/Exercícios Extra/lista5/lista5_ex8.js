/*Desenvolva um algoritmo que preencha uma matriz numérica de dimensões 3x3.
Depois de a matriz ter sido populada, o algoritmo deverá imprimir a matriz 
da seguinte forma: os dados da diagonal principal devem ser impressos normalmente
e os dados fora da diagonal principal devem substituídos por zero.*/

function lst5_ex8(){

w=1;
z=1;  
x=0;
y=0;

array=[];          //em geral, temos a mesma coisa do exercício 7 desta lista
while(x<3){        //só que agora com inputs do usuário
	array[x]=[];   
	x++;		
}                

x=0;

while(x<3){     
	while(y<3){   
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


x=0;                         //aqui temos um novo loop while para deixar a matriz
while(x<3){                  //da forma que o enunciado pede, seria possível fazer
	while(y<3){              //"manualmente" támbém, mas o loop while funcionaria
		if(x==y){            //melhor com matrizes maiores
			array[x][y]=0;   //
		}		             //o princípio é bem simples, se (x==y), ou seja, se     
		y++;                 //o valor do índice da linha é igual o valor da coluna
	}                        //então trata-se de uma diagonal, por ex: (lin1 col1),
	y=0;                     //(lin2 col2) e (lin3 col3)
	x++;                     //   
}                            //dessa forma, transformamos os valores numéricos dessas
                             //posições diagonais em 0 conforme pede o enunciado


arrayString1=array[0].join(' / ');    
arrayString2=array[1].join(' / ');   
arrayString3=array[2].join(' / ');   

document.write(`${arrayString1}<br>${arrayString2}<br>${arrayString3}<br>Dá uma olhada no console log também!`);
console.log(array);   




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