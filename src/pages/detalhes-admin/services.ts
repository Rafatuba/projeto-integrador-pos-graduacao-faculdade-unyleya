import { AxiosResponse } from "axios";

import api from "../../services/api";
import { DetalhesProps } from "./types";

export async function getApiDetailsProducts(
  idProduct: string
): Promise<AxiosResponse<DetalhesProps, any>> {
  return await api.get(`/products/${idProduct}`);
}
