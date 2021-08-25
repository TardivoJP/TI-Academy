window.onload=function(){

	//produtos
	(()=>{

		let mostrarProdutosCliente=document.querySelector("div#content-produtos > ul#produtos");

		for(let idx in produtos){
			mostrarProdutosCliente.innerHTML+=`<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc} - ${produtos[idx].precoRS}</li>`
		}

	})(produtos)


	//carrinho de compras
	const itemProduto=document.querySelectorAll("ul#produtos > li");
	const cestaDoCliente=document.querySelector("ul#cestaDoCliente");
	const mostraTotalCompra=document.querySelector("input#mostraTotalCompra");

	const armazenaItens=[];
	var totalPedido=0;

	itemProduto.forEach((item)=>{
		item.addEventListener("click",()=>{
			li=document.createElement("li");
			li.setAttribute("data-preco",`${item.dataset.preco}`);
			//adição do atributo preço para os elementos criados, assim conseguimos SUBTRAIR do valor total
			//caso o usuário remova algum produto da cesta


			if(armazenaItens.indexOf(item.textContent) == -1){
				armazenaItens.push(item.textContent);
				cestaDoCliente.appendChild(li).textContent=item.textContent;

				totalPedido+=Number(item.dataset.preco);
				mostraTotalCompra.value=totalPedido.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

			}else{
				alert(`Este item ${item.textContent} já está na sua cesta`);
			}

		}) // fim item.addEventListener

	}) // fim itemProduto.forEach	


	var listaNaCestaDoCliente=document.querySelectorAll("#cestaDoCliente");

		listaNaCestaDoCliente.forEach((listaDeProdutos)=>{
			
			listaDeProdutos.addEventListener("click",(produto)=>{

				//aqui, criamos uma nova variável para buscar a posição do item clicado na matriz (armazenaItens), desta forma, conseguimos manter
				//a lógica funcionando corretamente (alert se o item está na cesta do cliente ou não), em outras palavras, temos que remover o
				//elemento HTML e TAMBÉM remover o seu conteúdo de texto da matriz, caso contrário o item seria removido mas o usuário não
				//conseguiria colocar ele novamente na cesta
				let indexProduto=armazenaItens.indexOf(produto.target.textContent);

					if (indexProduto > -1){
						if(confirm(`Tem certeza que você quer remover ${produto.textContent} de sua cesta?`)){
							armazenaItens.splice(indexProduto, 1); //removemos a menção do item da matriz armazenaItens
							totalPedido-=Number(produto.target.dataset.preco);
								if(totalPedido<=0){	//esse if serve para corrigir um pequeno bug onde às vezes o valor total ficava R$ -0,00
									totalPedido=0;
								}
							cestaDoCliente.removeChild(produto.target);
							mostraTotalCompra.value=totalPedido.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
						}
					}

					
				}) // fim produto.addEventListener

			}) // fim listaNaCestaDoCliente.forEach

}// fim