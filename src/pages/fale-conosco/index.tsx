import UserTemplate from "../../templates/userTemplate";

export default function FaleConosco() {
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
          <form className="flex flex-col w-full justify-center gap-8 px-14">
            <input
              type="text"
              placeholder="Nome completo"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border border-gray-300 rounded-sm h-11 shadow-md px-3"
            />
            <textarea
              name="descricao"
              id="descricao"
              placeholder="Escreva sua mensagem"
              className="border border-gray-300 rounded-sm h-64 shadow-md px-3 py-2 resize-none"
            ></textarea>
            <button className="bg-primary h-11 text-white text-lg rounded-sm">
              Enviar
            </button>
          </form>
        </section>
      </div>
    </UserTemplate>
  );
}
