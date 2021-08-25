/*Faça um programa que carregue um vetor com oito números inteiros, calcule e mostre 
dois vetores resultantes. O primeiro vetor resultante deve conter os números positivos.
O segundo vetor resultante deve conter os números negativos. Cada vetor resultante vai
ter no máximo oito posições, sendo que nem todas devem obrigatoriamente ser utilizadas.
Imprima o conteúdo dos vetores resultantes, sem que sejam impressos "lixos de memória".*/

function lst5_ex6(){

x=0;
y=1; 

array=[];

while(x<8){
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

arrayString=array.join(' / ');
document.write(`Você criou a matriz: ${arrayString}.<br>`);


array2=array.map(x => x > 0);                    //mesmo método dos exercícios 3 e 4
found=array2.find(element => element == true);   //mas agora estamos utilizando para verificar
                                                 //se temos números positivos OU se temos
array3=array.map(x => x < 0);                    //números negativos na matriz criada pelo
found2=array3.find(element => element == true);  //usuário


if(found == undefined){                                                //se não tivermos números positivos
	document.write(`A matriz criada não contém números positivos.`);   //então apenas temos números negativos
}else if(found2 == undefined){                                         //ou vice e versa, então não faria muito
	document.write(`A matriz criada não contém números negativos.`);   //sentido mostrar uma matriz identica a
}else{                                                                 //criada pelo usuário

	z=0;
	arrayPos=[];                       //caso contrário, começamos os cálculos utilizando o mesmo método 
                                       //utilizado no exercício 4 para criar as duas matrizes uma apenas
	while(z<(array.length)){           //com os valores positivos e a outra com os negativos
		if(array[z] > 0){ 
			arrayPos[z]=array[z];  
		}                                                                 
	z++;                                                    
	}

	arrayPos=arrayPos.filter(function(entry) { return /\S/.test(entry); }); //esse função elimina todos os espaços
	                                                                        //vazios em uma matriz, bem útil!
	                                         //
	                                         //fonte: https://stackoverflow.com/questions/35476948/remove-empty-or-whitespace-strings-from-array-javascript
	arrayPosString=arrayPos.join(' / ');
	document.write(`Criando uma nova matriz apenas com os números positivos, temos: ${arrayPosString}.<br>`); 


	z=0;
	arrayNeg=[];

	while(z<(array.length)){
		if(array[z] < 0){ 
			arrayNeg[z]=array[z];  
		}                                                                 
	z++;                                                    
	}
	arrayNeg=arrayNeg.filter(function(entry) { return /\S/.test(entry); });
	arrayNegString=arrayNeg.join(' / ');
	document.write(`Criando uma nova matriz apenas com os números negativos, temos: ${arrayNegString}.<br>`);
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