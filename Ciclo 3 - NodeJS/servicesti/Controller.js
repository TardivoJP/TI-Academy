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

app.get('/clientes',async(req, res)=>{
    let create=await cliente.create({
        nome: "Francisco",
        endereco: "Avenida Horácio Racanello Filho",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1997-02-19",
    });
    res.send('Cliente foi inserido!');
});

app.post('/servicos',async(req, res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.get('/pedidos',async(req, res)=>{
    let create=await pedido.create({
        idCliente: 2,
        idServico: 3,
        valor: 499.99,
        data: "2021-08-27",
    });
    res.send('Pedido foi inserido!');
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor está ativo');
});