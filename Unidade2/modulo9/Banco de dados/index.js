const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/livraria").then(() => console.log("Conectado ao MongoDB")).catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));

async function criarLivro(titulo, autor, ano, genero) {
    try {
    const novoLivro = new Livro({ titulo, autor, ano, genero });
    return await novoLivro.save();
    } catch (erro) {
    console.error("Erro ao criar livro:", erro);
    throw erro;
    }
}

app.post("/livros", async (req, res) => {
    try {
    const { titulo, autor, ano, genero } = req.body;
    const novoLivro = await criarLivro(titulo, autor, ano, genero);
    res.status(201).json({ mensagem: "Livro criado com sucesso", livro: novoLivro });
    } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao criar livro", erro: erro.message });
    }
});

async function obterLivros() {
    try {
    return await Livro.find();
    } catch (erro) {
    console.error("Erro ao obter livros:", erro);
    throw erro;
    }
}

app.get("/livros", async (req, res) => {
    try {
    const livros = await obterLivros();
    res.status(200).json(livros);
    } catch (erro) {
    res
    .status(500)
    .json({ mensagem: "Erro ao obter livros", erro: erro.message });
    }
});

async function atualizarLivro(id, titulo, autor, ano, genero) {
    try {
    const livroAtualizado = await Livro.findByIdAndUpdate(id, { titulo, autor, ano, genero }, { new: true, runValidators: true });
    return livroAtualizado;
    } catch (erro) {
    console.error("Erro ao atualizar livro:", erro);
    throw erro;
    }
}

app.put("/livros/:id", async (req, res) => {
    try {
    const { id } = req.params;
    const { titulo, autor, ano, genero } = req.body;
    const livroAtualizado = await atualizarLivro( id, titulo, autor, ano, genero);
    if (livroAtualizado) {
    res.status(200).json({ mensagem: "Livro atualizado com sucesso", livro: livroAtualizado});
    } else {
    res.status(404).json({ mensagem: "Livro não encontrado" });
    }
    } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao atualizar livro", erro: erro.message });
    }
});

async function deletarLivro(id) {
    try {
    const livroDeletado = await Livro.findByIdAndDelete(id);
    return livroDeletado;
    } catch (erro) {
    console.error("Erro ao deletar livro:", erro);
    throw erro;
    }
}

app.delete("/livros/:id", async (req, res) => {
    try {
    const { id } = req.params;
    const livroDeletado = await deletarLivro(id);
    if (livroDeletado) {
    res.status(200).json({ mensagem: "Livro deletado com sucesso", livro: livroDeletado });
    } else {
    res.status(404).json({ mensagem: "Livro não encontrado" });
    }
    } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao deletar livro", erro: erro.message });
    }
});

const esquemaLivro = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: Number, required: true },
    genero: { type: String, required: true },
    });
    
const Livro = mongoose.model("Livro", esquemaLivro);

const novoLivro = new Livro({ titulo: '1984', autor:
'George Orwell', ano: 1949, genero: 'Dystopian' });
novoLivro.save().then(() => console.log('Livro salvo!')).catch(error => console.error('Erro ao salvar o livro:', error));

const port = 3000;
app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});