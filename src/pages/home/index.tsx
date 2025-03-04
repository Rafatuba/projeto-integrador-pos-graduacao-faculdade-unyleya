import { NavLink, useNavigate } from "react-router-dom";
import CardProduto from "../../components/card-produto";
import Carrossel from "../../components/carrossel";
import Categorias from "../../components/categorias";
import UserTemplate from "../../templates/userTemplate";
import { getApiRecentsProducts, getApiRecommendedProducts } from "./services";
import { useEffect, useState } from "react";
import { Product } from "./types";
import ListLoading from "../../components/list-loading";

export default function Home() {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [inputSearch, setInputSearch] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function getRecentsProducts() {
    setLoading(true);
    try {
      const response = await getApiRecentsProducts();
      setRecentProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos recentes");
    }
    setLoading(false);
  }

  async function getRecommendedProducts() {
    setLoading(true);
    try {
      const response = await getApiRecommendedProducts();
      setRecommendedProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos recomendados");
    }
    setLoading(false);
  }

  useEffect(() => {
    getRecentsProducts();
    getRecommendedProducts();
  }, []);

  return (
    <UserTemplate>
      <Carrossel />

      <div className="flex justify-center items-center gap-3 w-full p-5">
        <input
          type="text"
          placeholder="O que deseja buscar?"
          className="border border-gray-300 rounded-sm h-11 shadow-md px-3 w-[80%]"
          onChange={(e) => setInputSearch(e.target.value)}
        />

        <button
          onClick={() => navigate(`/products/busca/${inputSearch}`)}
          className="bg-primary text-white font-medium rounded-sm h-11 w-24"
        >
          Buscar
        </button>
      </div>

      <div className="w-full p-5 mb-5">
        <h2 className="text-lg font-medium mb-4">Produtos recentes</h2>
        {loading && <ListLoading />}
        <div className="flex flex-wrap gap-4">
          {recentProducts.map((product) => (
            <CardProduto
              key={product._id}
              id={product._id}
              name={product.name}
              img={product.url1}
              manufacturer={product.manufacturer}
              price={product.price}
            />
          ))}
        </div>
        <NavLink to="/todos-produtos-recentes">
          <p className="text-end mt-4 text-blue-400">Ver mais</p>
        </NavLink>
      </div>

      <Categorias />

      <div className="w-full p-5 mb-5">
        <h2 className="text-lg font-medium mb-4">Anúncios</h2>
        {loading && <ListLoading />}
        <div className="flex flex-wrap gap-4">
          {recommendedProducts.map((product) => (
            <CardProduto
              key={product._id}
              id={product._id}
              name={product.name}
              img={product.url1}
              manufacturer={product.manufacturer}
              price={product.price}
            />
          ))}
        </div>
        <NavLink to="/todos-produtos">
          <p className="text-end mt-4 text-blue-400">Ver todos</p>
        </NavLink>
      </div>
    </UserTemplate>
  );
}
