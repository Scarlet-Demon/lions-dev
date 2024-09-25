const Fichas = require("../models/Ficha");

async function criarFicha(req, res) {
    const { raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma,  } = req.body
    try{
        const novaFicha = new Fichas({
            raca,
            nome,
            classe,
            equipamento,
            forca,
            destreza,
            constituicao,
            inteligencia,
            sabedoria,
            carisma
        })
        const fichaNova =  await novaFicha.save();
        res.status(200).json({mensagem: 'Ficha Adicionada', ficha: fichaNova})
    } catch(erro){
        res.status(500).json({mensagem: "Erro ao cadastrar cliente na Taverna", erro: erro.message,})
    }
}

async function listarFichas(req, res) {
    try {
      const fichas = await Fichas.find();
      res.status(200).json(fichas)
    } catch (erro) {
        res.status(500).json({mensagem: "Erro ao listar as Fichas", erro: erro.message,});
    }
}

async function atualizarFicha(req, res) {
    const { id } = req.params;
    const { raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma  } = req.body
        try {
          const fichaAtualizada = await Fichas.findByIdAndUpdate(
            id,
            { raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma },
            { new: true, runValidators: true }
          );
          if(fichaAtualizada) {
            res.status(200).json({ mensagem: 'Ficha Atualizada', ficha: fichaAtualizada})
          } else {
            res.status(404).json({ mensagem: 'Ficha não encontrada'})
          }
        } catch (erro) {
          res.status(500).json({ mensagem: 'Erro ao atualizar', erro: erro.message})
        }
}

async function removerFicha(req, res) {
    const { id } = req.params;
        try {
          const fichaDeletada = await Fichas.findByIdAndDelete(id);
          if(fichaDeletada) {
            res.status(200).json({ mensagem: 'Aventureiro Enterrado com Honras', ficha: fichaDeletada})
          } else {
            res.status(404).json({ mensagem: 'Ficha não encontrada'})
          }
        } catch (erro) {
          res.status(500).json({ mensagem: 'Erro ao deletar', erro: erro.message});
        }
}

module.exports = {
    criarFicha,
    listarFichas,
    atualizarFicha,
    removerFicha
}