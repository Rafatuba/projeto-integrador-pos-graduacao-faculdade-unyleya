import api from "../../services/api";
import { LoginProps } from "./types";

export async function auth(values: LoginProps) {
  return await api.post("/auth", {
    email: values.email,
    password: values.password,
  });
}
