import { useNavigate } from "react-router-dom";
import AdminTemplate from "../../templates/adminTemplate";
import CardProdutoAdmin from "../../components/card-produto-admin";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { getApiMyProducts } from "./services";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Products } from "./types";

export default function UserProducts() {
  const [myProducts, setMyProducts] = useState<Products[]>([]);

  const navigate = useNavigate();

  const { token } = useAuthSessionStore();

  const toastInfo = () => {
    toast.info("Você não possui produtos cadastrados", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });
  };

  const toastError = () => {
    toast.error("Erro ao buscar produtos. Tente novamente mais tarde.", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });
  };

  async function getMypProducts() {
    try {
      const response = await getApiMyProducts(token);
      setMyProducts(response.data);
      if (response.data.length === 0) {
        toastInfo();
      }
    } catch (error) {
      toastError();
    }
  }

  useEffect(() => {
    getMypProducts();
  }, []);

  return (
    <AdminTemplate>
      <div className="w-full p-5 mb-5 max-w-[1280px]">
        <div className="flex justify-between items-center  mb-4">
          <h2 className="text-lg font-medium">Meus anúncios</h2>
          <button
            className="bg-secundary text-white py-1 px-6 rounded-sm cursor-pointer hover:bg-orange-600 transition duration-200"
            onClick={() => navigate("/form-product")}
          >
            Criar anúncio
          </button>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {myProducts.map((product) => (
            <CardProdutoAdmin
              key={product._id}
              name={product.name}
              manufacturer={product.manufacturer}
              price={product.price.toString()}
              img={product.url1}
              id={product._id}
            />
          ))}
        </div>
        <p className="pt-8">
          Total: {myProducts.length}{" "}
          {myProducts.length > 0
            ? myProducts.length > 1
              ? "itens"
              : "item"
            : "Nenhum item encontrado"}
        </p>
        <ToastContainer />
      </div>
    </AdminTemplate>
  );
}
