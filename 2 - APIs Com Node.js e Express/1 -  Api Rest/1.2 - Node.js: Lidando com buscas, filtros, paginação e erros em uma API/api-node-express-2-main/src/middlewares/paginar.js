import RequisicaoIncerreta from "../erros/RequisicaoIncorreta.js";

async function paginar(req, res, next){
  try {
    let {limite = 5, pagina = 1, campoOndenacao = "_id", ordem = 1} = req.query;
    
    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    const resultado = req.resultado;
    
    if(limite > 0 && pagina > 0) {
      const resultadoPaginado = await resultado.find()
        .sort({[campoOndenacao]: ordem})
        .skip((pagina - 1) * limite)
        .limit(limite)
        .exec();
            
      res.status(200).json(resultadoPaginado);
    }
    else {
      next(new RequisicaoIncerreta());
    }

  } catch (error) {
    next(error);
  }
}

export default paginar;