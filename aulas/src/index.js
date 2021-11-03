const express = require('express');

const app = express();

app.use(express.json());

app.get('/home', (req, res) => {
    res.send('Olá Turma. Nossa primeira API REST em NodeJS!');
});

app.get('/mensagem', (req, res) => {
    res.send( [ 
                    {nome: "Joseffe", funcao: "professor"},
                    {nome: "Gião", funcao: "professor"},
            ]);
})

app.post('/inserirCliente', (req, res) => {
    const {nome, idade} = req.body;

    res.send("O nome do cliente enviado foi: " + nome + " e sua idade é: " + idade);
})

app.delete('/excluirCliente/:id', (req, res) => {
    const {id} = req.params;

    res.send('O ID do usuário que será excluído será o ' + id);
})

app.get('/consultarCliente', (req, res) => {
    const {nome, idade} = req.query;s

    res.send('O cliente ' + nome + ' com idade ' + idade + ' vai ser localizado no banco de dados');
})

app.post('/msg', (req, res) => {
    const {msg} = req.body;
    res.send('Você é foda: ' + msg);
})

app.post('/anuncio/:id', (req, res) => {
    const {id} = req.params;
    res.send('O PARAMETRO É:' + id);
    console.log(id);
})

app.get('/pedido', (req, res) => {
    const {titulo} = req.query
    res.send('O query param enviado foi: ' + titulo);
})

app.get('/informaciones', (req, res) => {
    res.send({
        dadospessoais: 'Senha:NIreiTeContar',
        formacao: 'Nenhuma',
        projetos: 'Alguns',
        experiencia: 'Alguma',
        lazer: 'Jogar' } );
    });

app.listen(3333, () => {
    console.log("Servidor Backend ON!");
})
