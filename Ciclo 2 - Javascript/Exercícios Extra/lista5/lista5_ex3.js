/*Desenvolva um algoritmo que preencha um vetor numérico de 10 posições. Após
preencher todo o vetor, o usuário deve inserir uma chave de busca X. Caso exista
algum número igual a X, dentro do vetor, o algoritmo deve mostrar, na tela, o índice
da primeira posição na qual X foi encontrado. Caso contrário, o algoritmo deve se
encerrar com uma única mensagem, dizendo "Chave não encontrada.".*/

function lst5_ex3(){

y=0;
z=1; 

array=[];

alert(`Insira 10 valores numéricos`);
while(y<10){
	array[y]=prompt(`Insira o valor ${z}`); 
	array[y]=parseFloat(array[y].replace(/,/g, '.'));
		
		while(array[y]!==array[y]){                
			alert(`Você não digitou um número!`)			          
				array[y]=prompt(`Insira o valor ${z}`);            
				array[y]=parseFloat(array[y].replace(/,/g, '.'));  
		}                                        
	y++;													    
	z++;														
}

alert(`Pronto! Você criou uma matriz com 10 valores`);
x=prompt(`Agora insira um valor X para buscá-lo dentro da matriz`);
x=parseFloat(x.replace(/,/g, '.'));
	while(x!==x){                
		alert(`Você não digitou um número!`)			          
			x=prompt(`Insira um valor X para buscá-lo dentro da matriz`);            
			x=parseFloat(x.replace(/,/g, '.')); 
	}                                        
												//comandos encontrados pela ótima documentação da mozilla
found=array.find(element => element == x);      //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
posicao=(array.indexOf(x));                     //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
posicao++;   //somamos +1 na posição porque as matrizes começam no 0

if(found == undefined){
	document.write(`Valor ${x} não encontrado.`)
}else{
	document.write(`Valor ${x} encontrado na posição ${posicao}.`);
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