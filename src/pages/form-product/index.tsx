import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AdminTemplate from "../../templates/adminTemplate";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";

type CadastroProps = {
  nome: string;
  factory: string;
  category: string;
  price: string;
  url1: string;
  url2: string;
  descricao: string;
};

const schemaCadastro = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  factory: yup.string().required("Campo obrigatório"),
  category: yup.string().required("Campo obrigatório"),
  price: yup.string().required("Campo obrigatório"),
  url1: yup.string().required("Campo obrigatório"),
  url2: yup.string().required("Campo obrigatório"),
  descricao: yup.string().required("Campo obrigatório"),
});

export default function FormProduct() {
  const { quill, quillRef } = useQuill();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CadastroProps>({ resolver: yupResolver(schemaCadastro) });

  const onSubmit: SubmitHandler<CadastroProps> = (data) => console.log(data);

  useEffect(() => {
    if (quill) {
      const handleTextChange = () => {
        const htmlContent = quill.root.innerHTML;

        // Verificando se o conteúdo é vazio ou apenas contém <p><br></p>
        const isEmpty =
          htmlContent === "<p><br></p>" || htmlContent.trim() === "";

        // Se estiver vazio, marca o campo como erro
        if (isEmpty) {
          setValue("descricao", ""); // Definindo o valor como vazio para o React Hook Form
        } else {
          setValue("descricao", htmlContent); // Atualiza com o conteúdo válido
        }
      };

      // Configura o evento de mudança de texto
      quill.on("text-change", handleTextChange);

      // Cleanup para remover o evento quando o componente for desmontado
      return () => {
        quill.off("text-change", handleTextChange);
      };
    }
  }, [quill, setValue]); // Dependências: quill e setValue

  return (
    <AdminTemplate>
      <div className="flex items-center justify-center p-20 w-full">
        <section className=" flex flex-col justify-center items-center gap-5 border border-gray-200 w-full h-full p-10 rounded-lg shadow-2xl">
          <div className="w-full">
            <p className="font-medium mb-5">Preencha os campos abaixo:</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full"
          >
            <div className="grid grid-cols-2 gap-3 w-full">
              <div>
                <label htmlFor="">Nome do produto</label>
                <input
                  {...register("nome")}
                  type="text"
                  placeholder="Nome do produto"
                  className="border border-gray-300 rounded-sm h-11 shadow-md px-3 w-full"
                />
                {errors.nome && (
                  <span className="text-red-600 text-sm mt-[-30px] px-2">
                    {errors.nome.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="">Fabricante</label>
                <input
                  {...register("factory")}
                  type="text"
                  placeholder="Fabricante"
                  className="border border-gray-300 rounded-sm h-11 shadow-md px-3 w-full"
                />
                {errors.factory && (
                  <span className="text-red-600 text-sm mt-[-30px] px-2">
                    {errors.factory.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="categoria">Categoria</label>
                <select
                  id="categoria"
                  {...register("category")}
                  className="border border-gray-300 rounded-sm h-11 shadow-md px-3 w-full"
                >
                  <optgroup label="Selecione a categoria">
                    <option value={"jogos"}>Jogos</option>
                    <option value={"notebooks"}>Notebooks</option>
                    <option value={"cameras"}>Câmeras</option>
                  </optgroup>
                </select>
                {errors.category && (
                  <span className="text-red-600 text-sm mt-[-30px] px-2">
                    {errors.category.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="">Preço</label>
                <input
                  {...register("price")}
                  type="text"
                  placeholder="Preço"
                  className="border border-gray-300 rounded-sm h-11 shadow-md px-3 w-full"
                />
                {errors.price && (
                  <span className="text-red-600 text-sm mt-[-30px] px-2">
                    {errors.price.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="">Url 1</label>
                <input
                  {...register("url1")}
                  type="text"
                  placeholder="Url 1 da imagem"
                  className="border border-gray-300 rounded-sm h-11 shadow-md px-3 w-full"
                />
                {errors.url1 && (
                  <span className="text-red-600 text-sm mt-[-30px] px-2">
                    {errors.url1.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="">Url 2</label>
                <input
                  {...register("url2")}
                  type="text"
                  placeholder="Url 2 da imagem"
                  className="border border-gray-300 rounded-sm h-11 shadow-md px-3 w-full"
                />
                {errors.url2 && (
                  <span className="text-red-600 text-sm mt-[-30px] px-2">
                    {errors.url2.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full h-80">
              <label htmlFor="">Descrição do produto</label>
              <div className="w-full h-full mb-8">
                <div ref={quillRef} />
              </div>
              {errors.descricao && (
                <span className="text-red-600 text-sm mt-4 px-2">
                  {errors.descricao.message}
                </span>
              )}
            </div>
            <div className="flex gap-4 mt-4 self-end">
              <button
                className="bg-primary text-white w-32 py-2 rounded-md hover:bg-blue-400  duration-200 cursor-pointer"
                onClick={() => alert("Clicou")}
              >
                Salvar
              </button>
              <button
                className="text-primary border-2 w-32 py-2 rounded-md hover:bg-blue-400 hover:text-white duration-200 cursor-pointer"
                onClick={() => alert("Clicou em cancelar")}
              >
                Cancelar
              </button>
            </div>
          </form>
        </section>
      </div>
    </AdminTemplate>
  );
}
