/*Faça um programa que seja capaz de armazenar os dados de três pessoas: nome,
idade, peso e altura. Ao final, o algoritmo deve mostrar, na tela, o nome e a idade da
primeira pessoa e o peso e altura da última pessoa.*/

function lst5_ex14(){

z=1;  
x=0;
y=0;

array=[];            //declaramos as matrizes dentro de matrizes
while(x<3){  
    array[x]=[];   
    x++;        
}                

x=0;

while(x<3){        //o usuário preeche os valores da matriz
    while(y<4){

        if(y==0){    //primeira coluna é o nome
            array[x][y]=prompt(`Insira o nome da pessoa ${z}.`); 
        }

        if(y==1){    //segunda coluna é a idade
            array[x][y]=prompt(`Insira o valor da idade de ${array[x][0]}.`); 
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));        
            while(array[x][y]!==array[x][y]){         
                alert(`Você não digitou um número!`);        
                    array[x][y]=prompt(`Insira o valor da idade de ${array[x][0]}.`);            
                    array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
            }
        }    

        if(y==2){    //terceira coluna é o peso
            array[x][y]=prompt(`Insira o valor do peso de ${array[x][0]} em quilos.`); 
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));        
            while(array[x][y]!==array[x][y]){         
                alert(`Você não digitou um número!`);        
                    array[x][y]=prompt(`Insira o valor do peso de ${array[x][0]} em quilos.`);            
                    array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));
            }
        } 

        if(y==3){    //quarta coluna é a altura
            array[x][y]=prompt(`Insira o valor da altura de ${array[x][0]} em centímetros.`); 
            array[x][y]=parseFloat(array[x][y].replace(/,/g, '.'));        
            while(array[x][y]!==array[x][y]){         
                alert(`Você não digitou um número!`);        
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

//aqui temos uma pequena estrutura condicional para verificar a utilização ou não do plural das unidades
//                                                (ano, anos && quilo, quilos && centímetro, centímetros)
if(array[0][1]==1){
    plural_a="ano";
}else{
    plural_a="anos";
}

if(array[2][2]==1){
    plural_q="quilo";
}else{
    plural_q="quilos";
}

if(array[2][3]==1){
    plural_c="centímetro";
}else{
    plural_c="centímetros";
}

document.write(`${array[0][0]} tem ${array[0][1]} ${plural_a}.
                <br>${array[2][0]} pesa ${array[2][2]} ${plural_q} e tem ${array[2][3]} ${plural_c} de altura.`);

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