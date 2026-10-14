const itens = require("../../dados/itens.json")

const listar = (req, res) => {
    res.json(itens)
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    itens.forEach(item => {
        if (item.id == id) {
            item.id = dados.id;
            item.nome = dados.nome;
            item.preco= dados.preco;
        }
    });
    res.json("Item atualizado com sucesso");
};

const excluir = (req, res) => { 
    const id = req.params.id;

    itens.forEach((item, indice) => {
        if (item.id == id) {
            itens.splice(indice, 1);
        }
    });
    res.json("Item excluído com sucesso");
};

const criar = (req, res) => {
    const dados = req.body;
    if(req.body) {
        const novoId = itens.length + 1;

        req.body.id = novoId;

        itens.push(req.body);

        res.send("Item cadastrado com sucesso");
    }else {
        res.send("Não foi possível cadastrar o item");
    }
}


module.exports = {
    criar, listar, alterar, excluir
}