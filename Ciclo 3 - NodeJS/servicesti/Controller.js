const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

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

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor está ativo');
});