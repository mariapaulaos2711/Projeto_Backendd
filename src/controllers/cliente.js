const cliente = require("../../dados/clientes.json")

const listar = (req, res) => {
    res.json(cliente)
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    cliente.forEach(cliente => {
        if (cliente.id == id) {
            cliente.id = dados.id;
            cliente.cpf = dados.cpf;
            cliente.nome = dados.nome;
        }
    });
    res.json("Cliente atualizado com sucesso");
};

const excluir = (req, res) => { 
    const id = req.params.id;

    cliente.forEach((cliente, indice) => {
        if (cliente.id == id) {
            cliente.splice(indice, 1);
        }
    });
    res.json("Cliente excluído com sucesso");
};

const criar = (req, res) => {
    const dados = req.body;
    if(req.body) {
        const novoId = cliente.length + 1;

        req.body.id = novoId;

        cliente.push(req.body);

        res.send("Cliente cadastrado com sucesso");
    }else {
        res.send("Não foi possível cadastrar o cliente");
    }
}


module.exports = {
    criar, listar, alterar, excluir
}