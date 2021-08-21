window.onload=function(){

	const valor1=document.querySelector("#v2");
	const valor2=document.querySelector("#v1");
	const resultado=document.querySelector("#result");
	const btnResposta=document.querySelector("#btn_confirm");
	const boxResposta=document.querySelector("#box_correct");
	const txtResposta=document.querySelector("#certoErrado");


	btnResposta.addEventListener('click', ()=>{
		let cx1=valor1.value;
		let cx2=valor2.value;
		let r=Number(cx1)+Number(cx2);

		if((Number(cx1)!==Number(cx1))||(Number(cx2)!==Number(cx2))){ //verificando se o valor 1 ou valor 2
			txtResposta.innerHTML="Valor inválido!";				  //são NaN (not a number)
			boxResposta.style.background="lightyellow";
			boxResposta.style.visibility="visible";
		}else if(Number(resultado.value)!==Number(resultado.value)){  //verificando se o resultado
			txtResposta.innerHTML="Resultado inválido!";			  //é NaN (not a number)
			boxResposta.style.background="lightyellow";
			boxResposta.style.visibility="visible";
		}else if(r==(Number(resultado.value))){
			txtResposta.innerHTML="Está certo!";
			boxResposta.style.background="lightblue";
			boxResposta.style.visibility="visible";
		}else{
			txtResposta.innerHTML="Está errado!";
			boxResposta.style.background="red";
			boxResposta.style.visibility="visible";
		}

	});
}