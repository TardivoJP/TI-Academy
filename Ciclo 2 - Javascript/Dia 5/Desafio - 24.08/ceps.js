window.onload=function(){

	const btnBuscaCep=document.querySelector("#btnBuscaCep");
	const cxCep=document.querySelector(".cxCep");

	const dadosCep=async function(cepUrl){

		var url=`https://viacep.com.br/ws/${cepUrl}/json/`;
		var consultaCep=await fetch(url);
		var dadoCep=await consultaCep.json()

		for(var campino in dadoCep){
			console.log(campino);
			if(document.querySelector("#"+campino)){
			document.querySelector("#"+campino).value=dadoCep[campino];
			}
		}
	}

	btnBuscaCep.addEventListener("click",()=>{
		
		let cep=cxCep.value;
		dadosCep(cep);
	})
}