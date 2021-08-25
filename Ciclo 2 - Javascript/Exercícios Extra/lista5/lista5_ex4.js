/*Faça um programa que carregue um vetor e nove elementos numéricos 
inteiros, calcule e mostre os números primos e suas respectivas posições.*/

function lst5_ex4(){

x=0;
y=1; 

array=[];

while(x<9){
	array[x]=prompt(`Insira o valor ${y}`); 
	array[x]=parseFloat(array[x].replace(/,/g, '.'));
		
		while(array[x]!==array[x]){         
			alert(`Você não digitou um número!`)        
				array[x]=prompt(`Insira o valor ${y}`);            
				array[x]=parseFloat(array[x].replace(/,/g, '.'));  
		}                                        
	x++;													    
	y++;														
}

//função para testar primos do exercício 12 da lista 4
	function primo(numero){
		if (numero<2){
			return false;
		}

		raiz=Math.ceil(Math.sqrt(numero));
		for(i=2;i<=raiz;i++){ 					  
			if(numero%i===0){ 
				return false;
			}
		}
		return true;
	}

array2=array.map(x => primo(x));                //aqui verificamos todos os valores de uma vez
found=array2.find(element => element == true);  //com os comandos utilizados no exercício anterior

if(found == undefined){                                     //se não acharmos nada, então nenhum é primo
	document.write(`Nenhum número digitado é primo.`);
}else{
	document.write(`Temos como primo:<br>`); //expressão um pouco estranha mas eu realmente
}											 //quis evitar escrever lógica de plural
											 //(primo) vs (primos), (número) vs (números)
z=0;
pos=1;
while(z<(array.length)){
	if(primo(array[z])==true){                                               //o problema dos comandos (array.find)
		document.write(`O número ${array[z]}, na posição ${pos}.<br>`);    //e (array.indexOf) é que eles são limitados
	}                                                                    //a apenas o PRIMEIRO valor que encontrarem
	z++;                                                               //então funcionou no exercício 3, pois o enunciado
	pos++;                                                          //apenas queria a PRIMEIRA posição do valor igual a X 
}                                                           //aqui, como são vários valores, utilizamos uma lógica similar
                                                         //a utilizada para construir a matriz e verificamos se cada posição
                                                       //contem ou não um número primo
                                                    //ademais, é importante notar o uso do comando (array.length), neste caso
                                                 //ele não é estritamente necessário, pois o próprio exercício especifica que
                                               //a matriz tem 9 elementos, porém, caso o tamanho fosse desconhecido este seria
                                             //um método de verificar         
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