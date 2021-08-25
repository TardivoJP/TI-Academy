/*Desenvolva um algoritmo que preencha uma matriz numérica de dimensões 3x3. Ao
final, o algoritmo deve mostrar o somatório de todos os elementos da matriz, bem
como a média aritmética entre todos os termos.*/

function lst5_ex9(){

w=1;
z=1;  
x=0;
y=0;

array=[]; 
while(x<3){  
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

                                     //se usarmos (array.length) o javascript retorna apenas 3
a=(array.length)*(array[0].length);  //por causa das idiossincrasias de matrizes dentro de matrizes
b=(array.length)-1;                  //assim, multiplicamos (array.length) por (array[0].length)
c=0;                                 //basicamente realizando uma operação (linha * coluna)
soma=0;

while(b>=0){
	c=array[b].reduce((a, b) => a + b, 0); //essa linha aqui soma todos os elementos de uma matriz
	soma=soma+c;                           //fonte: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
	b--;                                   //porém ainda temos um trabalhinho adicional pois novamente
	                                       //matrizes dentro de matrizes são meio estranhas no javascript
	                                       //assim, declaramos nossa (var b) na linha de código 40 como o
	                                       //tamanho da array - 1 (pois arrays começam do 0 no javascript)
	                                       //
	                                       //com isso, é possível somar todos os elementos de cada linha da
}	                                       //matriz, para logo em seguida somarmos tudo

media=soma/a;

arrayString1=array[0].join(' / ');    
arrayString2=array[1].join(' / ');   
arrayString3=array[2].join(' / ');   

document.write(`Você inseriu a matriz:<br>${arrayString1}<br>${arrayString2}<br>${arrayString3}<br>(Dá uma olhada no console log também)
				<br>A soma de todos os elementos dessa matriz é ${parseFloat(soma.toFixed(4))}
				<br>A média aritimética entre todos os termos é ${parseFloat(media.toFixed(4))}`);
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