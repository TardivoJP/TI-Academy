const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

const { Op } = require("sequelize");

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/',function(req, res){
    res.send('Olá mundo!');
});

//criar novo cliente
app.post('/clientes',async(req, res)=>{
    let create=await cliente.create(
        req.body
    );
    res.send('Cliente foi inserido!');
});

//criar novo servico
app.post('/servicos',async(req, res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

//criar novo pedido
app.post('/pedidos',async(req, res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedido foi inserido!');
});

//visualizar todos servicos
app.get('/listaservicos',async(req, res)=>{
    await servico.findAll({
        order:[['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

//visualizar numero de servicos
app.get('/ofertas',async(req, res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json({servicos})
    });
});

//visualizar um servico com id específico
app.get('/servico/:id',async(req, res)=>{
    servico.findByPk(req.params.id)
    .then(servico=>{
        return res.json({
            error:false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Esse código não está cadastrado!"
        });
    });
});

//visualize todos os clientes
app.get('/listaclientes',async(req, res)=>{
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});

//visualize todos os clientes em ordem de antiguidade
app.get('/listaclientesantig',async(req, res)=>{
    await cliente.findAll({
        order:[['createdAt']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

//visualize todos os pedidos
app.get('/listapedidos',async(req, res)=>{
    await pedido.findAll({
        raw: true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

//visualize todos os pedidos em ordem de valor
app.get('/listapedidosvalor',async(req, res)=>{
    await pedido.findAll({
        order:[['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

//visualizar numero de clientes
app.get('/numclientes',async(req, res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json({clientes})
    });
});

//visualizar numero de pedidos
app.get('/numpedidos',async(req, res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json({pedidos})
    });
});

//desafio 3 (aula 30/08) - somar todos os valores gastos por um cliente específico
app.get('/clientegastou/:id',async(req, res)=>{
    await pedido.sum('valor', {where: { ClienteId: { [Op.eq]:req.params.id } } })
    .then(function(totalGastoCliente){
        res.json({totalGastoCliente})
    });
});
//explicando a função acima, para fins didáticos de anotação!
//
//então, se eu entendi corretamente temos um caminho ou url na linha 129 deste documento
//nesta linha, declaramos um :id, que será algum valor escolhido pelo usuário
//digamos '/clientegastou/3' ou '/clientegastou/2' por exemplo
//ou seja, a BEM GROSSO MODO mesmo, é quase que um prompt para o usário preencher uma variável
//e depois vamos utilizar ela posteriormente para apontar o ClienteId correto
//
//
//agora vamos por partes,  " pedido.sum('valor', " seria a nossa tabela de pedidos, conforme
//a let declarada na linha 14 deste arquivo, e estamos realizando a SOMA da COLUNA 'valor'
//
//o where seria "aonde", estamos limitando os valores que serão somados a alguma condição de nossa escolha
//
//assim correlacionamos com o ClienteId, ou seja, estamos apontando esta OUTRA COLUNA AINDA NA TABELA PEDIDOS, 
//para verificar alguma condição! isso a princípio tinha ficado um pouco confuso para mim mas é muito importante destacar,
//nunca saímos da tabela pedidos em momento algum, estamos sempre trabalhando nela, embasado em suas colunas!
//
//finalmente, temos " [Op.eq]:req.params.id " que seriam as nossas CONDIÇÕES de comparação com a COLUNA ClienteId
//lembrando que tivemos que declarar " const { Op } " na linha 10 deste documento para que ela possa ser utilizada!
//o que estamos dizendo aqui? " [Op.eq] " significa IGUAL, mas igual a que? igual a " req.params.id ", mas o que é isso?
//isso é aquela "variável" que declaramos alí na linha 129 no caminho ou url! ou seja, no fim das contas estamos dizendo assim:
//computador, faça a SOMA dos números na COLUNA valor da TABELA pedidos, mas APENAS aqueles com o mesmo ClienteId
//que foi digitano no caminho ou url pelo usuário
//
//voltando ao nosso exemplo anterior, digamos que o usuário digite '/clientegastou/3' ou '/clientegastou/2' por exemplo
//ele ou ela estaria pedindo a soma de todos os valores do ClienteId 3 no primeiro caso ou ClienteId 2 no segundo caso

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor está ativo');
});