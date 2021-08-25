/*Faça um programa que carregue dois vetores de dez elementos numéricos 
cada um e mostre um vetor resultante da intercalação desses dois vetores.*/

function lst5_ex5(){

x=0;
y=1; 

array1=[];

alert(`Esse tem bastante prompts!\nInsira 10 valores numéricos para criar a primeira matriz`);
while(x<10){
	array1[x]=prompt(`Matriz 1. Insira o valor ${y}`); 
	array1[x]=parseFloat(array1[x].replace(/,/g, '.'));
		
		while(array1[x]!==array1[x]){         
			alert(`Você não digitou um número!`)        
				array1[x]=prompt(`Matriz 1. Insira o valor ${y}`);            
				array1[x]=parseFloat(array1[x].replace(/,/g, '.'));  
		}                                        
	x++;													    
	y++;														
}

x=0;
y=1; 

array2=[];

alert(`Pronto! Matriz 1 concluída!\nAgora insira 10 valores numéricos para criar a segunda matriz`);
while(x<10){
	array2[x]=prompt(`Matriz 2. Insira o valor ${y}`); 
	array2[x]=parseFloat(array2[x].replace(/,/g, '.'));
		
		while(array2[x]!==array2[x]){         
			alert(`Você não digitou um número!`)        
				array2[x]=prompt(`Matriz 2. Insira o valor ${y}`);            
				array2[x]=parseFloat(array2[x].replace(/,/g, '.'));  
		}                                        
	x++;													    
	y++;														
}

array3=array1.concat(array2); //comando concat ensinado na aula 3 de javascript, ministrada no dia 20.08

array4=array3.slice().reverse();
array4=array4.sort((a,b)=>a-b);

array1String=array1.join(' / ');
array2String=array2.join(' / '); 
array3String=array3.join(' / '); 
array4String=array4.join(' / ');  
document.write(`Temos duas matrizes:<br>Matriz 1: ${array1String}.<br>Matriz 2: ${array2String}.<br>
				Juntando as duas temos a Matriz 3: ${array3String}.<br>Em ordem crescente temos ${array4String}.`);





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