import api from "../../services/api";
import { CadastroProps } from "./types";

export async function saveApiProducts(body: CadastroProps, token: string) {
  return api.post(
    "/products",
    {
      name: body.nome,
      manufacturer: body.factory,
      category: body.category,
      price: body.price,
      url1: body.url1,
      url2: body.url2,
      description: body.descricao,
    },
    { headers: { Authorization: token } }
  );
}
