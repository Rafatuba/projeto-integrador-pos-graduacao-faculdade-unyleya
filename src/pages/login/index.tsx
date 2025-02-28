import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import AuthTemplate from "../../templates/authTemplate";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginProps } from "./types";
import { auth } from "./services";
import { toast, ToastContainer } from "react-toastify";
import { useAuthSessionStore } from "../../hooks/use-auth-session";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Digite seu e-mail"),
  password: yup
    .string()
    .required("Digite sua senha")
    .min(6, "A senha precisa ter pelo menos 6 caracteres"),
});

export default function Login() {
  const { setToken } = useAuthSessionStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ resolver: yupResolver(schema) });

  const toastError = () =>
    toast.error("Falha ao entrar. Tente novamente.", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });

  async function logar(values: LoginProps) {
    try {
      const response = await auth(values);
      setToken(response.data?.token);

      if (response) {
        navigate("/dashboard");
      }
    } catch (error: any) {
      {
        `${error.message}` === "Request failed with status code 401"
          ? toast.error("E-mail ou senha incorretos", {})
          : toastError();
      }
    }
  }

  return (
    <AuthTemplate>
      <div className="flex items-center justify-center p-20 w-full">
        <section className=" flex flex-col justify-center items-center gap-5 border border-gray-200 w-xl h-xl p-10 rounded-lg shadow-2xl">
          <div className="text-center">
            <h1 className="text-primary font-bold text-4xl mb-7">UnyBay</h1>
            <p className="font-medium mb-5">Acesse sua conta</p>
          </div>
          <form
            onSubmit={handleSubmit(logar)}
            className="flex flex-col w-full justify-center gap-8 px-14"
          >
            <input
              {...register("email")}
              placeholder="Digite seu e-mail"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            {errors.email && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                {errors.email.message}
              </span>
            )}
            <input
              {...register("password")}
              type="password"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            {errors.password && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                {errors.password.message}
              </span>
            )}

            <button
              type="submit"
              className="bg-primary h-11 text-white text-lg rounded-sm hover:bg-blue-900"
              // onClick={() => navigate("/meus-anuncios")}
            >
              Entrar
            </button>
          </form>
          <NavLink to="/cadastro">
            <p className="text-gray-400 font-medium hover:text-gray-600">
              Não possui conta? Criar conta
            </p>
          </NavLink>
        </section>
        <ToastContainer />
      </div>
    </AuthTemplate>
  );
}
