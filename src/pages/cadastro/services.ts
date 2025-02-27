import api from "../../services/api";
import { CadastroProps } from "./types";

export async function registerUser(values: CadastroProps) {
  return await api.post("/register", {
    name: values.nome,
    email: values.email,
    phone: values.celular,
    city: values.cidade,
    state: values.estado,
    password: values.password,
  });
}
