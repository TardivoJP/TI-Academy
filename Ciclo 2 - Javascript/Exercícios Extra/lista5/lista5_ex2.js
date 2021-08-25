/*Desenvolva um algoritmo que preencha um vetor de 5 posições com valores reais
compreendidos entre 1 e 100 (suponha que o usuário irá respeitar o enunciado). Ao
final, o algoritmo deve mostrar, na tela, o conteúdo de cada posição do vetor, dividido
por 100.*/

function lst5_ex2(){

x=0;
y=1; 

array=[];

alert(`Insira 5 valores reais entre 1 e 100`);
while(x<5){
	array[x]=prompt(`Insira o valor ${y}`); 
	array[x]=parseFloat(array[x].replace(/,/g, '.'));
		
		while((array[x]!==array[x])||(array[x]<1)||(array[x]>100)){                  //lógica para alertar o usuário caso insira       
			if(array[x]!==array[x]){alert(`Você não digitou um número!`)}			 //algo fora do escopo do enunciado
			else if(array[x]<1){alert(`Você digitou um número menor que 1!`)}		 //(valores reais compreendidos entre 1 e 100)
			else if(array[x]>100){alert(`Você digitou um número maior que 100!`)}           
				array[x]=prompt(`Insira o valor ${y}`);            
				array[x]=parseFloat(array[x].replace(/,/g, '.'));  
		}                                        
	x++;													    
	y++;														
}


array2=array.map(x => x / 100);

array=array.map(a => parseFloat(a.toFixed(4)));          //formatação dos valores até 4 casas decimais (toFixed)
array2=	array2.map(a => parseFloat(a.toFixed(4)));       //casas decimais apenas serão utilizadas quando necessário (parseFloat)

arrayString=array.join(' / ');        //formatação em string para os valores serem mais legiveis pelo usuário, principalmente com
array2String=array2.join(' / ');      //valores decimais    (0.1,0.2,0.3,0.4,0.5) vs (0.1 / 0.2 / 0.3 / 0.4 / 0.5)   


document.write(`Os valores digitados são ${arrayString}.<br>Dividindo cada um por 100, temos ${array2String}.`);





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