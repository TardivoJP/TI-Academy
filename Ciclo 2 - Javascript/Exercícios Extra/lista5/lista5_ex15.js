/*Faça um programa que seja capaz de armazenar os dados de uma pessoa: nome,
idade, peso e altura. Seu programa deve ser capaz de armazenar 5 pessoas. Ao final
dos cadastros, o seu programa deve imprimir, na tela, todas as informações de todas
as pessoas. Seu programa deve mostrar, também, o nome da pessoa mais magra,
nome da pessoa mais baixa e a média das idades de todas as pessoas.*/

function lst5_ex15(){

z=1;  
x=0;
y=0;

array=[];            //declaramos as matrizes dentro de matrizes
while(x<5){  
    array[x]=[];   
    x++;        
}                

x=0;

while(x<5){        //o usuário preeche os valores da matriz
    while(y<4){

        if(y==0){ //primeira coluna é o nome
            array[x][y]=prompt(`Insira o nome da pessoa ${z}.`); 
        }

        if(y==1){ //segunda coluna é a idade
            array[x][y]=prompt(`Insira o valor da idade de ${array[x][0]}.`); 
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));        
            while((array[x][y]!==array[x][y])||(array[x][y]<0)){  //aqui controlamos para alguns edge cases onde o usuário insere um valor inválido       
                if(array[x][y]!==array[x][y]){alert(`Você não digitou um número!`);}				//NaN, menor que zero(negativo), e para peso e altura
                else if(array[x][y]<0){alert(`Não existe idade negativa meu caro usuário!`);}       //também se ele é igual a zero                 
                    array[x][y]=prompt(`Insira o valor da idade de ${array[x][0]}.`);            
                    array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
            }
        }   

        if(y==2){ //terceira coluna é o peso
            array[x][y]=prompt(`Insira o valor do peso de ${array[x][0]} em quilos.`); 
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));        
            while((array[x][y]!==array[x][y])||(array[x][y]<=0)){         
                if(array[x][y]!==array[x][y]){alert(`Você não digitou um número!`);}
                else if(array[x][y]==0){alert(`${array[x][0]} não pesa nada? Como assim? Insira um peso válido!`);}
                else if(array[x][y]<0){alert(`Não existe peso negativo meu caro usuário!`);}         
                    array[x][y]=prompt(`Insira o valor do peso de ${array[x][0]} em quilos.`);            
                    array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
            }
        } 

        if(y==3){ //quarta coluna é a altura
            array[x][y]=prompt(`Insira o valor da altura de ${array[x][0]} em centímetros.`); 
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));        
            while((array[x][y]!==array[x][y])||(array[x][y]<=0)){         
                if(array[x][y]!==array[x][y]){alert(`Você não digitou um número!`);}
                else if(array[x][y]==0){alert(`${array[x][0]} não mede nada? Como assim? Insira uma altura válida!`);}
                else if(array[x][y]<0){alert(`Não existe altura negativa meu caro usuário!`);}        
                    array[x][y]=prompt(`Insira o valor da altura de ${array[x][0]} em centímetros.`);            
                    array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
            }
        } 
                       
        y++;                 
    }                       
    y=0;
    z++;                    
    x++;                        
}

x=0;
b=(array.length); //aqui declaramos o número de linhas de nossa matriz, porém poderiamos usar 5 novamente também
soma=0; //declaramos uma var para receber a soma das idades

f=[]; //declaramos duas matrizes, uma para os pesos
g=[]; //outra para as alturas

f[0]=Number.MAX_VALUE;
g[0]=Number.MAX_VALUE;


while(x<b){

	var minPeso=array[x][2];	//aqui, repetimos uam técnica similar a utilizada no exercício 10 da mesma lista
		if(minPeso<=f[0]){		//basicamente, estamos guardando os valores de peso e altura nas respectivas matrizes
			f.push(minPeso);	//criadas acima para realizarmos a comparação posteriormente
		}

	var minAlt=array[x][3];
		if(minAlt<=g[0]){
			g.push(minAlt);
		}

	soma=soma+array[x][1]; //aqui, calculamos a soma das idades, lembrando que (array[linha][coluna])


	//honestamente eu tirei as variáveis de plural (ano, anos && quilo, quilos && centímetro, centímetros)
	//pois o código já está razoavelmente extenso, e acredito que ia confundir mais do que ajudar

	//aqui imprimimos todos os dados de cada pessoa conforme o enunciado pede
	document.write(`${array[x][0]} tem ${array[x][1]} anos, pesa ${array[x][2]} quilos e mede ${array[x][3]} centímetros de altura.<br>`)                     
    x++;                        
}

media=soma/b; //aqui calculamos a média das idades


//aqui, utilizamos a mesma função criada por A. Sallai, que foi utilizada no exercício 13 desta mesma lista
//para controlar pelo edge case de duas (ou mais) pessoas terem o mesmo valor mais baixo para o peso ou altura
//
//fonte: terceira resposta no link abaixo
//https://stackoverflow.com/questions/32657085/find-indexes-of-multiple-minimum-in-an-array-in-javascript
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

posicaoPeso=[]; //aqui, criamos uma matriz e invocamos a função acima para que receba TODOS os valores mais baixos de peso
posicaoPeso=findMinimumIndexes(f);

posicaoPeso=(posicaoPeso.map(function(item) {
		  	return item - 1;	//pequeno ajuste nos valores do index, para coincidir com as pessoas corretas
		}));

	//novamente temos uma estrutura condicional similar ao exercício 13 desta mesma lista, onde encontra-se uma explicação mais detalhada do conceito
	//em suma, aqui testamos para os edge cases de duas (ou mais) pessoas terem o mesmo valor mais baixo para o peso
	if(posicaoPeso[4]!=undefined){
		document.write(` <br>Todas as pessoas tem o mesmo peso!<br>`);
	}else if(posicaoPeso[3]!=undefined){
		document.write(` <br>Essas quatro pessoas tem o mesmo peso mais baixo de ${array[posicaoPeso[3]][2]} quilos: ${array[posicaoPeso[0]][0]}, ${array[posicaoPeso[1]][0]}, ${array[posicaoPeso[2]][0]} e ${array[posicaoPeso[3]][0]}.<br>`);
	}else if(posicaoPeso[2]!=undefined){
		document.write(` <br>Essas três pessoas tem o mesmo peso mais baixo de ${array[posicaoPeso[2]][2]} quilos: ${array[posicaoPeso[0]][0]}, ${array[posicaoPeso[1]][0]} e ${array[posicaoPeso[2]][0]}.<br>`);
	}else if(posicaoPeso[1]!=undefined){
		document.write(` <br>Essas duas pessoas tem o mesmo peso mais baixo de ${array[posicaoPeso[1]][2]} quilos: ${array[posicaoPeso[0]][0]} e ${array[posicaoPeso[1]][0]}.<br>`);
	}else{
		document.write(` <br>A pessoa com o peso mais baixo é ${array[posicaoPeso[0]][0]}, com ${array[posicaoPeso[0]][2]} quilos.<br>`);
	}

posicaoPeso=(posicaoPeso.map(function(item) {
		  	return item + 5;
		}));


posicaoAlt=[];	//aqui, criamos uma matriz e invocamos a função acima para que receba TODOS os valores mais baixos de alutra
posicaoAlt=findMinimumIndexes(g);

posicaoAlt=(posicaoAlt.map(function(item) {
		  	return item - 1;	//pequeno ajuste nos valores do index, para coincidir com as pessoas corretas
		}));

	//similarmente, aqui testamos para os edge cases de duas (ou mais) pessoas terem o mesmo valor mais baixo para a altura
	if(posicaoAlt[4]!=undefined){
		document.write(` <br>Todas as pessoas tem o mesmo peso!<br>`);
	}else if(posicaoAlt[3]!=undefined){
		document.write(` <br>Essas quatro pessoas tem a mesma altura mais baixa de ${array[posicaoAlt[3]][3]} centímetros: ${array[posicaoAlt[0]][0]}, ${array[posicaoAlt[1]][0]}, ${array[posicaoAlt[2]][0]} e ${array[posicaoAlt[3]][0]}.<br>`);
	}else if(posicaoAlt[2]!=undefined){
		document.write(` <br>Essas três pessoas tem a mesma altura mais baixa de ${array[posicaoAlt[2]][3]} centímetros: ${array[posicaoAlt[0]][0]}, ${array[posicaoAlt[1]][0]} e ${array[posicaoAlt[2]][0]}.<br>`);
	}else if(posicaoAlt[1]!=undefined){
		document.write(` <br>Essas duas pessoas tem a mesma altura mais baixa de ${array[posicaoAlt[1]][3]} centímetros: ${array[posicaoAlt[0]][0]} e ${array[posicaoAlt[1]][0]}.<br>`);
	}else{
		document.write(` <br>A pessoa com a altura mais baixa é ${array[posicaoAlt[0]][0]}, com ${array[posicaoAlt[0]][3]} centímetros.<br>`);
	}

//finalmente, mostramos o resultado a média das idades conforme pede o enunciado
document.write(` <br>A média aritimética da idade de todas as pessoas é ${parseFloat(media.toFixed(4))}.`);
console.log(array);



(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button');
    btnz.setAttribute('value', 'Voltar');
    btnz.style.width = "100px";
    btnz.style.height = "50px";
    btnz.style.position = "absolute";
    btnz.style.top = "30%";
    btnz.style.left = "5%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}