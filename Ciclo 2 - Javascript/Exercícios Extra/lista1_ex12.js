/*Desenvolva um algoritmo que emule um caixa eletrônico. O usuário deve inserir o
valor total a ser sacado da máquina e o algoritmo deve informar quantas notas de 100,
50, 20, 10, 5 ou 2 reais serão entregues. Deve-se escolher as notas para que o usuário
receba o menor número de notas possível.*/

function lst1_ex12(){

saque=parseInt(prompt("Insira o valor a ser sacado"));
//este exercício acabou tomando um tempinho pois não fiquei satisfeito com o modo
//que as informações eram mostradas ao usuário, então tentei realizar alguns artifícios
//para melhorar esta questão



//somente quando fui olhar a resposta que caiu a ficha que eu poderia ter usado o
//resto da divisão (%) ao invés disso que eu fiz, mas está funcionando também!
n100=parseInt(saque/100);
n50=parseInt((saque-(n100*100))/50);
n20=parseInt((saque-((n100*100)+(n50*50)))/20);
n10=parseInt((saque-((n100*100)+(n50*50)+(n20*20)))/10);
n5=parseInt((saque-((n100*100)+(n50*50)+(n20*20)+(n10*10)))/5);
n2=parseInt((saque-((n100*100)+(n50*50)+(n20*20)+(n10*10)+(n5*5)))/2);

//essa variável aqui é para dizer quantas notas o usuário vai receber
total_n=n100+n50+n20+n10+n5+n2;


//essa variável aqui serve para verificar se "sobrou" alguma coisa
//por ex, o usuário pode sacar 16 reais, então sobraria 1 real
resto=saque-((n100*100)+(n50*50)+(n20*20)+(n10*10)+(n5*5)+(n2*2));


//esse monte de (if) (else) aqui servem para corrigir a ortografia das informações
//que vão ser mostradas ao usuário
//
//basicamente, os (if) (else) verificam se o termo em questão existe ou não, e qual
//sua posição perante os demais para receber a pontuação adequada.
//
//por exemplo, se o usuário saca 25 reais, recebera uma nota de 20 e uma de 5
//logo, os termos 2, 10, 50 e 100 não existem, então não serão mostrados.
//
//da mesma forma, como o 5 neste mesmo exemplo seria o último termo ele deve acabar 
//com um ponto, enquanto o 20 deve terminar com uma vírgula e um espaço
	if(n100!=0&&n50==0&&n20==0&&n10==0&&n5==0&&n2==0){
		t100=n100+' de R$ 100.'
	}else if(n100!=0){
		t100=n100+' de R$ 100, '
	}else{
		t100='';
	}

	if(n50!=0&&n20==0&&n10==0&&n5==0&&n2==0){
		t50=n50+' de R$ 50.'
	}else if(n50!=0){
		t50=n50+' de R$ 50, '
	}else{
		t50='';
	}

	if(n20!=0&&n10==0&&n5==0&&n2==0){
		t20=n20+' de R$ 20.'
	}else if(n20!=0){
		t20=n20+' de R$ 20, '
	}else{
		t20='';
	}


	if(n10!=0&&n5==0&&n2==0){
		t10=n10+' de R$ 10.'
	}else if(n10!=0){
		t10=n10+' de R$ 10, '
	}else{
		t10='';
	}


	if(n5!=0&&n2==0){
		t5=n5+' de R$ 5.'
	}else if(n5!=0){
		t5=n5+' de R$ 5, '
	}else{
		t5='';
	}


	if(n2!=0){
		t2=n2+' de R$ 2.'
	}else{
		t2='';
	}


//essa sequência de (if) (else) realizam uma verificação da ortografia relacionada
//ao penúltimo termo, ao invés da vírgula será utilizado a expressão "e"
//
//por exemplo, se o usuário saca 59 reais, receberá uma nota de 50, uma de 5 E duas de 2
//se ao invés disso o usuário saca 35 reais, receberá uma nota de 20, uma de 10 E uma de 5
//
//percebe-se que o penúltimo termo muda, logo o programa deve corrigir automaticamente
//para estas situações, com o texto escrito de forma gramaticamente correta
//
//
//apesar de todo esse trabalho, espero que eu consiga aprender uma solução mais elegante
//para este tipo de solução em minha caminhada, pois é fácil imaginar que resolver deste
//modo aqui seria completamente inviável se fosse um banco de dados de grande escala
if(n100!=0&&n50!=0&&n20==0&&n10==0&&n5==0&&n2==0){
	t100 = t100.replace(',', ' e');
	}else if(n50!=0&&n20!=0&&n10==0&&n5==0&&n2==0){
		t50 = t50.replace(',', ' e');
	}else if(n100!=0&&n50==0&&n20!=0&&n10==0&&n5==0&&n2==0){
		t100 = t100.replace(',', ' e');
		}else if(n20!=0&&n10!=0&&n5==0&&n2==0){
			t20 = t20.replace(',', ' e');
		}else if(n50!=0&&n20==0&&n10!=0&&n5==0&&n2==0){
			t50 = t50.replace(',', ' e');
		}else if(n100!=0&&n50==0&&n20==0&&n10!=0&&n5==0&&n2==0){
			t100 = t100.replace(',', ' e');
			}else if(n10!=0&&n5!=0&&n2==0){
				t10 = t10.replace(',', ' e');
			}else if(n20!=0&&n10==0&&n5!=0&&n2==0){
				t20 = t20.replace(',', ' e');
			}else if(n50!=0&&n20==0&&n10==0&&n5!=0&&n2==0){
				t50 = t50.replace(',', ' e');
			}else if(n100!=0&&n50==0&&n20==0&&n10==0&&n5!=0&&n2==0){
				t100 = t100.replace(',', ' e');
				}else if(n5!=0&&n2!=0){
					t5 = t5.replace(',', ' e');
				}else if(n10!=0&&n5==0&&n2!=0){
					t10 = t10.replace(',', ' e');
				}else if(n20!=0&&n10==0&&n5==0&&n2!=0){
					t20 = t20.replace(',', ' e');
				}else if(n50!=0&&n20==0&&n10==0&&n5==0&&n2!=0){
					t50 = t50.replace(',', ' e');
				}else if(n100!=0&&n50==0&&n20==0&&n10==0&&n5==0&&n2!=0){
					t100 = t100.replace(',', ' e');
}


//aqui temos um (if) simples para verificar se o valor total de notas é 1 ou não
//caso for 1, a palavra "nota" será utilizada no singular, enquanto nas demais
//situações, a palavra "nota" será utilizado no plural
if(total_n==1){
	plural_n='nota';
}else{
	plural_n='notas';
}


//finalmente, temos o resultado mostrado ao usuário, de forma que apenas as notas
//estritamente necessárias serão mostradas, além de manter a grafia e pontuação corretas
document.write("Você sacou R$ "+saque+".<br>Logo, receberá "+total_n+" "+plural_n+".<br>"+t100+t50+t20+t10+t5+t2+"<br>");


//aqui avisamos o usuário sobre o resto, se houver
if(resto==0){
	document.write("Não sobrou nada, o saque foi exato com as notas disponíveis.")
}else{
	document.write("Sobrou R$ "+resto+".")
}





(function botao() {
    var btnz = document.createElement('input');
    btnz.setAttribute("class", "bitao");
    btnz.setAttribute('type', 'button'); // input element of type button
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