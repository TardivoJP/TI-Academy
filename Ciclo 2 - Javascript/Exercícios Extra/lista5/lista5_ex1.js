/*Desenvolva um algoritmo que preencha um vetor numérico de 10 posições. 
Ao final, o algoritmo deve mostrar o somatório de todos os elementos do 
vetor, bem como a média aritmética entre todos os termos.*/

function lst5_ex1(){

x=0; //originalmente, gostaria de ter usado a varriavel x para contar
y=1; //os números no prompt ao usuário, por exemplo
	 //(insira o número 5) (insira o número 6) (insira o número 7) etc
	 //porém, como estamos trabalhando com matrizes, é importante destacar
	 //que o primeiro termo delas é o 0, e não o 1, então a contagem ficaria
	 //um pouco estranha começando do 0, por esse motivo a variável y foi
	 //criada apenas para realizar esta contagem

soma=0;
array=[];

while(x<10){
	array[x]=prompt(`Insira o valor ${y}`);                 //aqui temos uma solução para verificar os números reais
	array[x]=parseFloat(array[x].replace(/,/g, '.'));       //pois no brasil utilizamos vírgula ao invés de ponto para
														 	//declarar casas decimais, então deixamos o primeiro prompt
														 	//como string para utilizar o replace na próxima linha e apenas
														 	//neste momento utilizamos o parseFloat para converter em número
		
		while(array[x]!==array[x]){                             //este while aqui serve para verificar se o usuário realmente
			alert(`Você não digitou um número!`)                //digitou um número, lembrando daquela propriedade do valor NaN
			array[x]=prompt(`Insira o valor ${y}`);             //(Not a Number) que ele apenas é exatamente diferente a ele mesmo
			array[x]=parseFloat(array[x].replace(/,/g, '.'));   //conforme explicado no desafio 2 deste ciclo de javascript
		}														//TI-Academy/Ciclo 2 - Javascript/Dia 2/Desafio - 17.08/ no repositório github
	soma=soma+array[x];                                         //em todo caso, por fins de praticidade, aqui está a fonte novamente
	x++;													    //
	y++;														//fonte: https://dmitripavlutin.com/nan-in-javascript/
}

media=soma/(x);
document.write(`A soma dos valores é ${parseFloat(soma.toFixed(4))}.<br>A média dos valores é ${parseFloat(media.toFixed(4))}.`);
					                  //aqui temos uma notação que foi utilizada bastante nos exercícios mas nunca foi explicada
					                  //o toFixed() denota o número de casas decimais desejadas ao imprimir o número na tela do
					                  //usuário, porém não é muito interessante acontecer isso SEMPRE, a menos que estivermos diante
					                  //de situações únicas como 2 casas decimais para moedas, caso contrário ter vários zeros após
					                  //todo número é um pouco feio, assim, o parseFloat antes serve para assegurar que as casas
					                  //decimais apenas vão ser utilizadas caso necessário, por exemplo  120  150  180  100.05  115.432


//segue abaixo uma resolução similar, sem o uso de matrizes
/*while(x<=10){
	n=prompt(`Insira o valor ${x}`);
	n=parseFloat(n.replace(/,/g, '.'));
		while(n!==n){
			alert(`Você não digitou um número!`)
			n=prompt(`Insira o valor ${x}`);
			n=parseFloat(n.replace(/,/g, '.'));
		}
	soma=soma+n;
	x++;
}

media=soma/(x-1);

document.write(`A soma dos valores é ${parseFloat(soma.toFixed(4))}.<br>A média dos valores é ${parseFloat(media.toFixed(4))}.`);*/





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