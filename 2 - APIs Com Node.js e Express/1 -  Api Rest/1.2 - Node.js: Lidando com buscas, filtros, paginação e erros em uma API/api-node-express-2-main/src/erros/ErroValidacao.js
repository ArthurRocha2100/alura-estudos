import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(error) {
    const mensagemErro = Object.values(error.errors)
      .map(error => error.message)
      .join("; ");

    super(`Houver um erro de validação de dados: ${mensagemErro}`);
  }
}

export default ErroValidacao;