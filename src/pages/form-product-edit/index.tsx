import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AdminTemplate from "../../templates/adminTemplate";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CadastroProps } from "./types";
import { editApiProducts } from "./services";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { getApiDetailsProducts } from "../detalhes/services";
import { toast } from "react-toastify";

const schemaCadastro = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  factory: yup.string().required("Campo obrigatório"),
  category: yup.string().required("Campo obrigatório"),
  price: yup.string().required("Campo obrigatório"),
  url1: yup.string().required("Campo obrigatório"),
  url2: yup.string().required("Campo obrigatório"),
  descricao: yup.string().required("Campo obrigatório"),
});

export default function FormProductEdit() {
  const navigate = useNavigate();
  const { quill, quillRef } = useQuill();
  const { token } = useAuthSessionStore();

  const params = useParams();
  const id = params?.id || "";

  const [product, setProduct] = useState({
    price: "",
    category: "",
    descricao: "",
    factory: "",
    nome: "",
    url1: "",
    url2: "",
  });

  async function getProductById() {
    try {
      const response = await getApiDetailsProducts(id);
      const productResponse = response.data;
      setProduct({
        price: productResponse.price.toString(),
        category: productResponse.category,
        descricao: productResponse.description,
        factory: productResponse.manufacturer,
        nome: productResponse.name,
        url1: productResponse.url1,
        url2: productResponse.url2,
      });
    } catch (error) {}
  }

  useEffect(() => {
    getProductById();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CadastroProps>({
    resolver: yupResolver(schemaCadastro),
    defaultValues: product,
    values: product,
  });

  const toastError = () => {
    toast.error("Erro ao editar produtos. Tente novamente mais tarde.", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });
  };
  const toastSucess = () => {
    toast.success("Produto editado com sucesso.", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });
  };

  async function saveProduct(values: CadastroProps) {
    try {
      await editApiProducts(values, token, id);
      reset();
      navigate(-1);
      toastSucess();
    } catch (error) {
      toastError();
    }
  }

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
            <p className="font-medium mb-5">Altere os campos desejados:</p>
          </div>
          <form
            onSubmit={handleSubmit(saveProduct)}
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
                  <option value={"Selecione"} disabled>
                    Selecione a categoria
                  </option>
                  <option value={"jogos"}>Jogos</option>
                  <option value={"notebooks"}>Notebooks</option>
                  <option value={"cameras"}>Câmeras</option>
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
              <div
                style={{
                  width: "100%",
                  height: 250,
                }}
              >
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
                type="submit"
                className="bg-primary text-white w-32 py-2 rounded-md hover:bg-blue-400  duration-200 cursor-pointer"
              >
                Salvar
              </button>
              <button
                className="text-primary border-2 w-32 py-2 rounded-md hover:bg-blue-400 hover:text-white duration-200 cursor-pointer"
                onClick={() => navigate(-1)}
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
