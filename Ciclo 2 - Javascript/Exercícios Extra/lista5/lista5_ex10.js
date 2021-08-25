/*Faça um programa que carregue uma matriz 2x2, calcule e mostre uma 
matriz resultante que será a própria matriz digitada multiplicada 
pelo maior elemento da matriz.*/

function lst5_ex10(){

w=1;
z=1;  
x=0;
y=0;

array=[];        //declaramos as matrizes dentro de matrizes
while(x<2){  
	array[x]=[];   
	x++;		
}                

x=0;

while(x<2){      //o usuário preeche os valores da matriz
	while(y<2){   
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

x=0;
b=(array.length);

f=Number.MAX_VALUE;  //declaramos que f é o valor máximo possível no javascript
f=f*(-1);            //depois multiplicamos por -1 para ficar negativo, ou seja
                     //transforma-se no valor mínimo possível
                     //
                     //utilizamos as propriedades MAX_VALUE e MIN_VALUE dessa forma
                     //pois elas sempre retornam um valor específico POSITIVO, o que
                     //não é tão interessante para o nosso propósito de comparação
                     //para encontrar o valor máximo (ou até mínimo se fosse o caso)
                     //pois o usuário pode inserir números negativos
while(x<b){

	var max = Math.max.apply(null, array[x]);  //comparamos linha por linha por causa
		if(max>f){                             //das idiossincrasias de matrizes dentro de matrizes,
			f=max;							   //caso tentarmos encontrar o maior valor procurando
		}									   //na matriz como um todo, não vai funcionar

	x++;
}

x=0;

array2=[];   	  //declaramos as matrizes dentro de matrizes para a segunda matriz
while(x<b){  	  //que será multiplicada pelo maior valor da primeira conforme pede o enunciado
	array2[x]=[];   
	x++;		
} 

x=0;

while(x<b){									//multiplicamos linha por linha por causa das	
	array2[x]=array[x].map(x => x * f);		//das idiossincrasias de matrizes dentro de matrizes,
	x++										//conforme explicado anteriormente
}

arrayString1=array[0].join(' / ');    
arrayString2=array[1].join(' / ');

array2String1=array2[0].join(' / ');    
array2String2=array2[1].join(' / ');  

document.write(`Você inseriu a matriz:<br>${arrayString1}<br>${arrayString2}
				<br>O maior elemento dessa matriz é ${f}
				<br>Se multiplicarmos todos os termos da matriz por esse valor, temos:
				<br>${array2String1}<br>${array2String2}<br>(Dá uma olhada no console log também)`);
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
    btnz.style.top = "20%";
    btnz.style.left = "5%";
    btnz.onclick = volt;
    document.body.appendChild(btnz);
})();

function volt(){window.location.href = "index.html"}
}