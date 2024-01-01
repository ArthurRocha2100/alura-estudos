import Erro404 from "../erros/Erro404.js";
import {autores, livros} from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {

    try {
      const buscaLivros = livros.find()
        .populate("autor");

      req.resultado = buscaLivros;

      next();
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorId = async (req, res, next) => {

    try {
      const id = req.params.id;
      const livroResultado = await livros.findById(id)
        .populate("autor", "nome")
        .exec();
      
      if(livroResultado !== null){
        res.status(200).send(livroResultado);
      }
      else {
        next(new Erro404("Id do livro não localizado"));
      }

    } catch (error) {
      next(error);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    
    try {
      let livro = new livros(req.body);
      
      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndUpdate(id, {$set: req.body});

      if(livroResultado !== null){
        res.status(200).send({message: "Livro atualizado com sucesso"});
      }
      else {
        next(new Erro404("Id do livro não localizado"));
      }
      
    } catch (error) {
      next(error);
    }
  };

  static excluirLivro = async (req, res, next) => {

    try {
      const id = req.params.id;
      const livroResultado = await livros.findByIdAndDelete(id);

      if(livroResultado !== null) {
        res.status(200).send({message: "Livro removido com sucesso"});
      }
      else {
        next(new Erro404("Id do livro não encontrado"));
      }
        
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    
    try {
      const busca = await processaBusca(req.query);

      if(busca !== null) {
        const livroResultado =  livros
          .find(busca)
          .populate("autor");

        req.resultado = livroResultado;
    
        next();
      }
      else{
        res.status(200).send([]);
      }
    } catch (error) {
      next(error);
    }
  };

}


async function processaBusca(parametros) {

  const {editora, titulo, min, max, nomeAutor} = parametros;

  let busca = {};

  if(editora) busca.editora = {$regex: editora, $options: "i"};
  if(titulo) busca.titulo = {$regex: titulo, $options: "i"};

  if(min || max) busca.numeroPaginas = {};

  if(min) busca.numeroPaginas.$gte = min;
  if(max) busca.numeroPaginas.$lte = max;

  if(nomeAutor) {
    const autor = await autores.findOne({nome: {$regex: nomeAutor, $options: "i"}});

    if(autor !== null){
      busca.autor = autor._id;
    }
    else{
      busca = null;
    }
  }

  return busca;
}

export default LivroController;