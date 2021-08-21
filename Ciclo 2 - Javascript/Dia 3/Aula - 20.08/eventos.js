/*click ao clicar em algum elemento HTML
mousemove ao mover o cursor do mouse acessa (entra) o elemento
mouseover ao mover o cursor do mosue dentro do elemento
mouseout ao mover o cursor para fora do elemento
dbclick ao efetual duplo clique (rápido) sobre o elemento
blur ao perder o foco do elemento, geralmente associado ao elemento HTML*/

window.onload=function(){


	//alert("Alerta!");


	const btn1=document.querySelector(".btn-click");
	const legP=document.querySelector(".legenda");
	const cxTexto=document.querySelector("#texto");

	/*click ao clicar em algum elemento HTML*/

	btn1.addEventListener('click', ()=>{
		//escrever no elemento
		legP.innerHTML+=cxTexto.value;

	});

	legP.addEventListener('click', ()=>{
		legP.innerHTML='';
	});

	/*mousemove ao mover o cursor do mouse acessa (entra) o elemento*/
/*	legP.addEventListener('mouseout', ()=>{
		alert("Teste");
	});*/


	/* TROCAR TIPO DO ELEMENTO*/

	const trocaSenha=document.querySelector("#verSenha");
	const cxSenha=document.querySelector("#senha");

	trocaSenha.addEventListener('click', ()=>{
		//getAttribute()
		//setAttribute()
		if(cxSenha.getAttribute('type')=='password'){
			cxSenha.setAttribute('type','text');
		}else{
			cxSenha.setAttribute('type','password');
		}

	});

	//alterar background

	const cxTrocaBg=document.querySelector("#cxTbg");
		cxTrocaBg.addEventListener('blur', ()=>{

			cxTrocaBg.setAttribute('class', 'corBg');

		});

	//somar valores cx input text

	const valor1=document.querySelector("#v1");
	const valor2=document.querySelector("#v2");
	const btnSomar=document.querySelector("#soma");
	const spResultado=document.querySelector("#resultado");

		btnSomar.addEventListener('click', ()=>{
			let cx1=valor1.value;
			let cx2=valor2.value;
			let r=Number(cx1)+Number(cx2);
			spResultado.innerHTML=r;

		});


	//evento modal
	const btnModal=document.querySelector("#chamarModal");
	const janelaM=document.querySelector("#janModal");
	const closeMod=document.querySelector("#fecharModal");

		btnModal.addEventListener('click', ()=>{
			janelaM.setAttribute('class','modal');

		});

		janelaM.addEventListener('click', ()=>{
			janelaM.removeAttribute('class','modal');

		});

		closeMod.addEventListener('click', ()=>{
			janelaM.classList.remove('modal');
			// também funcionaria janelaM.removeAttribute('class','modal');

		});

}