import Erro404 from "../erros/Erro404.js";
import {autores} from "../models/index.js";

class AutorController {

  static listarAutores = async (req, res, next) => {
    
    try {
      const autorResultado = autores.find();

      req.resultado = autorResultado;
      
      next();
    } catch (error) {
      next(error);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
   
    try {
      const id = req.params.id;
      const autorResultado = await autores.findById(id);

      if(autorResultado !== null) {
        res.status(200).send(autorResultado);
      } 
      else {
        next(new Erro404("Id do autor não localizado"));
      }

    } catch (error) {
      next(error);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    
    try {
      let autor = new autores(req.body);

      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    
    try {
      const id = req.params.id;
      
      const autorResultado = await autores.findByIdAndUpdate(id, {$set: req.body});

      if(autorResultado !== null) {
        res.status(200).send({message: "Autor atualizado com sucesso"});
      } 
      else {
        res.status(404).send({message: "Autor não localizado"});
      }
      
    } catch (error) {
      next(error);
    }
  };

  static excluirAutor = async (req, res, next) => {
   
    try {
      const id = req.params.id;
   
      const autorResultado = await autores.findByIdAndDelete(id);

      if(autorResultado !== null) {
        res.status(200).send({message: "Autor removido com sucesso"});
      }
      else {
        next(new Erro404("Id do altor não encontrado"));
      }

    } catch (error) {
      next(error);
    } 
  };
}

export default AutorController;