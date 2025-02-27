import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";
import AuthTemplate from "../../templates/authTemplate";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CadastroProps } from "./types";
import { registerUser } from "./services";
import { toast, ToastContainer } from "react-toastify";

const schemaCadastro = yup.object().shape({
  nome: yup
    .string()
    .required("Digite seu nome completo")
    .min(5, "Digite seu nome completo"),
  cidade: yup.string().required("Digite a cidade").min(5, "Digite a cidade"),
  estado: yup.string().required("Digite o estado").min(2, "Digite o estado"),
  celular: yup
    .string() // Usando string para aceitar valores vazios
    .min(11, "Digite um celular válido")
    .transform((value) => (value === "" ? null : value)) // Transformando vazio em null
    .nullable() // Permite null
    .matches(/^[0-9]+$/, "Digite apenas números") // Adicionando validação para números
    .required("Digite um número de celular"),
  email: yup
    .string()
    .required("Digite seu e-mail")
    .email("Digite um e-mail válido"),
  password: yup
    .string()
    .required("Digite sua senha")
    .min(6, "A senha precisa ter pelo menos 6 caracteres"),
});

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CadastroProps>({ resolver: yupResolver(schemaCadastro) });

  // const onSubmit: SubmitHandler<CadastroProps> = (data) => console.log(data);

  const toastError = () =>
    toast.error("Falha ao se cadastrar. Tente novamente mais tarde.", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });

  const toastSuccess = () =>
    toast.success("Cadastro realizado com sucesso!", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });

  async function createUser(values: CadastroProps) {
    try {
      const response = await registerUser(values);
      console.log(response.data);
      toastSuccess();
      reset();
    } catch (error: any) {
      {
        `${error.message}` === "Request failed with status code 400"
          ? toast.error("E-mail já cadastrado", {})
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
            <p className="font-medium mb-5">Cadastrar-se</p>
          </div>
          <form
            onSubmit={handleSubmit(createUser)}
            className="flex flex-col w-full justify-center gap-8 px-14"
          >
            <input
              {...register("nome")}
              type="text"
              placeholder="Nome Completo"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            {errors.nome && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                {errors.nome.message}
              </span>
            )}
            <input
              {...register("cidade")}
              type="text"
              placeholder="Cidade"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            {errors.cidade && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                {errors.cidade.message}
              </span>
            )}
            <input
              {...register("estado")}
              type="text"
              placeholder="Estado"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            {errors.estado && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                {errors.estado.message}
              </span>
            )}
            <input
              {...register("celular")}
              type="number"
              placeholder="Celular"
              className="appearance-none border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            {errors.celular && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                {errors.celular.message}
              </span>
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="E-mail"
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
              placeholder="Nova senha"
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
            >
              Cadastrar
            </button>
          </form>
          <NavLink to="/login">
            <p className="text-gray-400 font-medium hover:text-gray-600">
              Já possui conta? Entrar
            </p>
          </NavLink>
        </section>
        <ToastContainer />
      </div>
    </AuthTemplate>
  );
}
