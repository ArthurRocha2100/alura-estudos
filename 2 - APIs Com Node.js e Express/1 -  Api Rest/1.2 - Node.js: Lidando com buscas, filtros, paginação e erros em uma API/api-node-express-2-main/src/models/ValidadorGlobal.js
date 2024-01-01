import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate",{
  validator: (valor) => valor.trim() !== "",
  message: ({path}) => `O ${path} campo como vazio`
}); 