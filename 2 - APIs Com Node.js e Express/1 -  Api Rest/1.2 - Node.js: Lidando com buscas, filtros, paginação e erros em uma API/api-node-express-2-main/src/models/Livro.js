import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    titulo: {
      type: String, 
      required: [true, "Título é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "autores", 
      required: [true, "Autor(a) é obrigatório"],
    },
    editora: {
      type: String, 
      required: [true, "Editor(a) é obrigatorio(a)"],
      enum: {
        values: ["Yares", "novatec"],
        message: "A editora {VALUE} não é permitida para cadastro"
      }
    },
    numeroPaginas: {
      type: Number,
      min: [1, "O número de páginas deve está entre 1 e 100000. Valor fornecido: {VALUE}"],
      max: [100000, "O número de páginas deve está entre 1 e 100000./n Valor fornecido: {VALUE}"]
    }
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;