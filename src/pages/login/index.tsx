import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";
import AuthTemplate from "../../templates/authTemplate";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type LoginProps = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Digite seu e-mail"),
  password: yup
    .string()
    .min(6, "A senha precisa ter pelo menos 6 caracteres")
    .required("Digite sua senha"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginProps> = (data) => console.log(data);

  return (
    <AuthTemplate>
      <div className="flex items-center justify-center p-20 w-full">
        <section className=" flex flex-col justify-center items-center gap-5 border border-gray-200 w-xl h-xl p-10 rounded-lg shadow-2xl">
          <div className="text-center">
            <h1 className="text-primary font-bold text-4xl mb-7">UnyBay</h1>
            <p className="font-medium mb-5">Acesse sua conta</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
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
      </div>
    </AuthTemplate>
  );
}
