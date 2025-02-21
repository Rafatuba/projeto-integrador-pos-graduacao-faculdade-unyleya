import { AxiosResponse } from "axios";
import api from "../../services/api";
import { AllRecentProducts } from "./types";

export async function getApiAllRecentsProducts(): Promise<
  AxiosResponse<AllRecentProducts[], any>
> {
  return await api.get("/products/recents-all");
}
