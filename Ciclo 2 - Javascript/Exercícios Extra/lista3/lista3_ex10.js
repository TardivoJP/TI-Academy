/*Faça um programa que receba três números obrigatoriamente em
ordem crescente e um quarto número que não siga esta regra.
Mostre, em seguida, os quatro números em ordem não-crescente.*/

function lst3_ex10(){

n1=parseFloat(prompt("Insira o primeiro número"));
n2=parseFloat(prompt("Insira o segundo número MAIOR que o primeiro"));

while(n2<=n1){
	alert("O seu número é menor ou igual ao primeiro!");
	n2=parseFloat(prompt("Tente novamente\nInsira o segundo número MAIOR que o primeiro"));
}

n3=parseFloat(prompt("Insira o terceiro número MAIOR que o segundo"));

while(n3<=n2){
	alert("O seu número é menor ou igual ao segundo!");
	n3=parseFloat(prompt("Tente novamente\nInsira o terceiro número MAIOR que o segundo"));
}

n4=parseFloat(prompt("Insira o quarto número sem se preocupar se é maior ou menor que os demais!"));


/*Olha, antes de mais nada eu só quero dizer que matrizes no javascript são bem chatinhas em!


Ora, como forçamos, através de um loop while, o usuário a escolher o n1 ao n3 em ordem crescente, 
é bem simples evitar isso, conforme o exercício pede, mostrando da seguinte forma (n4 n3 n1 n2)
o n4 nem importaria, pois pela ordem do n3 n1 n2, nunca será uma ordem crescente

Todavia, isso me pareceu quase como uma "trapaça" então eu acabei optando por utilizar matrizes
para ver se não existe outra forma de resolver este problema e que funcionaria com sequencias
bem maiores (além de proporcionar uma oportunidade de aprendizado sobre o tema)

Assim, primeiramente criamos uma matriz contendo os termos inseridos e podemos utilizar uma
função para deixar os números da matriz em ordem aleatória

Infelizmente, existe uma pequena probabilidade desta ordem aleatória ser crescente que seria 
(1/n!) ou 1 dividido por n fatorial, onde n é o número de elementos e 1 é a única permutação onde 
todos estes elementos estão organizados de ordem crescente

Todavia, como se trata de uma única permutação onde isso acontece podemos controlar para este
edge case se criarmos uma cópia dessa matriz em ordem crescente para fins de comparação, logo
se a matriz aleatória resultar nesta permutação indesejável, podemos continuar executando essa
função até que a matriz original fique em outra ordem


Enfim! Abaixo temos uma função para deixar aleatórea a ordem dos termos em uma matriz
fonte: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

ISSO SERÁ BEM RELEVANTE ABAIXO*/
function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


/*Aqui, cria-se duas matrizes, (arruma) com os elementos inseridos pelo usuário
e (arruma_c) que é uma cópia da matriz (arruma). Por que a cópia foi feita desse jeito?

Porque matrizes no javascript são bem chatinhas como eu falei anteriormente! se a cópia
fosse feita como qualquer outra variável, por ex: x=5 e y=x, as funções para deixar a
matriz em ordem aleatória e em ordem crescente não funcionariam! pois por algum motivo
o javascript trata como se fosse a mesma variável, então elas sempre ficam iguais

Agora com esse ( arruma.slice().reverse(); ), cria-se uma matriz nova, que é o inverso
da matriz original, o que em termos práticos não muda muita coisa para o nosso objetivo
de organizá-las posteriormente, e agora existe o benefício do javascript tratar como se
realmente fossem duas matrizes distintas!*/
arruma=[n1,n2,n3,n4];
arruma_c=arruma.slice().reverse();


/*Aqui, pega a cópia invertida da matriz original e deixa ela em ordem crescente
para compararmos posteriormente*/
arruma_c=arruma_c.sort((a,b)=>a-b);


/*Essa constante aqui, serve para comparar as duas matrizes, pois novamente elas
são meio chatinhas e o (==) ou (===) que normalmente utilizamos para comparar
duas variáveis não funciona com matrizes

fonte: https://www.30secondsofcode.org/articles/s/javascript-array-comparison*/
const equals = (a, b) => JSON.stringify(arruma) === JSON.stringify(arruma_c);

/*aqui, executamos a função declarada anteriormente que deixa os elementos
da matriz original em ordem aleatória*/
shuffle(arruma);

/*por fim, temos um loop while, para realizar a comparação entre a matriz original
que agora está em ordem aleatória, e a cópia da matriz que está em ordem crescente

desta forma, controlamos para o edge case da matriz aleatória estar em ordem crescente
caso isso ocorrer, o loop while força a função a executar quantas vezes for preciso para
evitar que a matriz fique em ordem crescente!*/
while((equals(arruma, arruma_c)) === true){
	console.log(arruma);
	shuffle(arruma);
	console.log(arruma);
}


document.write("Você inseriu os números "+parseFloat(n1.toFixed(2))+", "+parseFloat(n2.toFixed(2))+", "+parseFloat(n3.toFixed(2))+" e "+parseFloat(n4.toFixed(2))+".<br>"+
				"Deixando a ordem aleatória e não crescente temos "+arruma+".");





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