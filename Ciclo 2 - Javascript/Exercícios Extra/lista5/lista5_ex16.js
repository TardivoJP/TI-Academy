/*Faça um programa que seja capaz de armazenar os dados de um produto: código,
nome, valor e quantidade. Seu programa deve ser capaz de armazenar 5 produtos. Ao
final dos cadastros, o usuário deve inserir o código de um produto e o seu programa
deve imprimir, na tela, as informações daquele produto. Caso o produto não se
encontre cadastrado, deve-se informar ao usuário a seguinte mensagem: "código não
encontrado".*/

function lst5_ex16(){

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
            array[x][y]=prompt(`Insira o nome do produto ${z}.`); 
        }


        if(y==1){ //segunda coluna é o código
            array[x][y]=prompt(`Insira o código do produto: ${array[x][0]}.`);
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
	            while((array[x][y]!==array[x][y])){
		            alert(`Você não digitou um número!`);
		            array[x][y]=prompt(`Insira o código do produto: ${array[x][0]}.`);
		            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
        	}
        } 

        if(y==2){ //terceira coluna é o valor
            array[x][y]=prompt(`Insira o valor do produto ${array[x][0]}.`); 
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));        
            while((array[x][y]!==array[x][y])||(array[x][y]<=0)){         
                if(array[x][y]!==array[x][y]){alert(`Você não digitou um número!`);}
                else if(array[x][y]==0){alert(`${array[x][0]} não custa nada? Como assim? Insira um valor válido!`);}
                else if(array[x][y]<0){alert(`Preço negativo? Então você vai pagar o cliente para ele levar embora?\nInsira um valor válido!`);}         
                    array[x][y]=prompt(`Insira o valor do produto ${array[x][0]}.`);            
                    array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
            }
        } 

        if(y==3){ //quarta coluna é a quantidade
            array[x][y]=prompt(`Insira a quantidade do produto ${array[x][0]}.`); 
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));        
            while((array[x][y]!==array[x][y])||(array[x][y]<0)){         
                if(array[x][y]!==array[x][y]){alert(`Você não digitou um número!`);}
                else if(array[x][y]<0){alert(`Me explica exatamente como eu teria ${array[x][3]} ${array[x][0]} no estoque...\nInsira um valor válido!`);}        
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

//similarmente aos exercício 3 e 11 desta lista, pedimos para o usuário inserir um valor para pesquisar
alert(`Pronto! Você criou uma matriz com 5 produtos e suas informações.`);
pesquisa=prompt(`Agora insira o código de um produto cadastrado para buscá-lo`);
pesquisa=parseFloat(pesquisa.replace(/,/g, '.'));
	while(pesquisa!==pesquisa){                
		alert(`Você não digitou um número!`)			          
			pesquisa=prompt(`Agora insira o código de um produto cadastrado para buscá-lo`);         
			pesquisa=parseFloat(pesquisa.replace(/,/g, '.')); 
	}

x=0;	    
b=(array.length);
delta=0;	//a variável delta é o nosso "coringa" para saber se achamos ou não o valor pesquisado

while(x<b){	//aqui, temos o loop while para testar todas as linhas
	
	if(array[x][1]==pesquisa){	//verificamos se a coluna 1 do código é igual ao número pesquisado pelo usuário
		document.write(`Produto selecionado ${array[x][0]}.<br>Código ${array[x][1]}.<br>Valor ${array[x][2]}.<br>Quantidade ${array[x][3]}.`);
		x=(b+2);	//adicionamos ao x para quebrar a condição do while
		delta=1;	//modificamos delta para 1
	}

	x++;
}

if(delta==0){	//caso delta continue 0, siginifica que não achamos o número inserido pelo usuário, então imprimimos a mensagem de erro
	document.write(`Código ${pesquisa} não encontrado.`);
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