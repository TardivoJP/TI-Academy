/*Desenvolva um algoritmo que preencha uma matriz numérico de dimensões 3x3. Após
preencher todo a matriz, o usuário deve inserir uma chave de busca X. Caso exista
algum número igual a X, dentro da matriz, o algoritmo deve mostrar, na tela, os índices
da linha e da coluna da posição na qual na qual X foi encontrado pela primeira vez.
Caso contrário, o algoritmo deve se encerrar com uma única mensagem, dizendo
"Chave não encontrada.".*/

function lst5_ex11(){

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
//similarmente ao exercício 3, pedimos para o usuário inserir um valor para pesquisar
alert(`Pronto! Você criou uma matriz 3x3 com 9 valores`);
pesquisa=prompt(`Agora insira um valor X para buscá-lo dentro da matriz`);
pesquisa=parseFloat(pesquisa.replace(/,/g, '.'));
	while(pesquisa!==pesquisa){                
		alert(`Você não digitou um número!`)			          
			pesquisa=prompt(`Insira um valor X para buscá-lo dentro da matriz`);            
			pesquisa=parseFloat(pesquisa.replace(/,/g, '.')); 
	}                                        


x=0;
y=0;

while(x<3){
	encontrar=array[x].find(element => element == pesquisa);	//pesquisamos linha por linha conforme melhor
		if(encontrar!=undefined){								//explicado nos comentários dos exercícios
			z=x+1;												//anteriores
			w=(array[x].indexOf(pesquisa));						//
			w++;												//como só nos interessa onde o valor pesquisado foi
			x=4;												//encontrado pela PRIMEIRA vez, temos a condição (if)
		}														//para quebar o loop e salvar a posição (lin e col)
	x++;														//representado por (z e w) caso ele seja encontrado
}

arrayString1=array[0].join(' / ');    
arrayString2=array[1].join(' / ');
arrayString3=array[2].join(' / ');

if(encontrar == undefined){
	document.write(`Você inseriu a matriz:<br>${arrayString1}<br>${arrayString2}<br>${arrayString3}
					<br>Valor ${pesquisa} não encontrado nesta matriz.`)
}else{
	document.write(`Você inseriu a matriz:<br>${arrayString1}<br>${arrayString2}<br>${arrayString3}
					<br>Valor ${pesquisa} encontrado na linha ${z}, coluna ${w}.`);
}
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