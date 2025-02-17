import { useForm, SubmitHandler } from "react-hook-form";
import UserTemplate from "../../templates/userTemplate";

type FaleProps = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function FaleConosco() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FaleProps>();

  const onSubmit: SubmitHandler<FaleProps> = (data) => console.log(data);

  return (
    <UserTemplate>
      <div className="flex items-center justify-center p-20 w-full">
        <section className=" flex flex-col justify-center items-center gap-5 border border-gray-200 w-xl h-xl p-10 rounded-lg shadow-2xl">
          <div className="text-center">
            <h1 className="text-primary font-bold text-4xl mb-7">UnyBay</h1>
            <p className="font-medium mb-5">
              Fale conosco através do formulário abaixo
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full justify-center gap-8 px-14"
          >
            <input
              {...register("nome", { required: true })}
              type="text"
              placeholder="Nome completo"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            {errors.nome && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                Digite seu nome
              </span>
            )}

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="E-mail"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            {errors.email && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                Digite seu e-mail
              </span>
            )}

            <textarea
              {...register("mensagem", { required: true })}
              placeholder="Escreva sua mensagem"
              className="border border-gray-300 rounded-sm h-64 shadow-md px-3 py-2 resize-none"
            ></textarea>
            {errors.mensagem && (
              <span className="text-red-600 text-sm mt-[-30px] px-2">
                Digite sua mensagem
              </span>
            )}
            <button
              type="submit"
              className="bg-primary h-11 text-white text-lg rounded-sm"
            >
              Enviar
            </button>
          </form>
        </section>
      </div>
    </UserTemplate>
  );
}
