import { NavLink } from "react-router-dom";
import CardProduto from "../../components/card-produto";
import Carrossel from "../../components/carrossel";
import Categorias from "../../components/categorias";
import UserTemplate from "../../templates/userTemplate";
import { getApiRecentsProducts, getApiRecommendedProducts } from "./services";
import { useEffect, useState } from "react";
import { Product } from "./types";

export default function Home() {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  async function getRecentsProducts() {
    try {
      const response = await getApiRecentsProducts();
      setRecentProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos recentes");
    }
  }

  async function getRecommendedProducts() {
    try {
      const response = await getApiRecommendedProducts();
      setRecommendedProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos recomendados");
    }
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
          className="w-3xl h-12 rounded-sm my-6 p-3 text-lg border border-gray-300"
          placeholder="O que você procura?"
        />
        <NavLink to="/resultado-busca">
          <button className="bg-primary text-white py-2 px-5 text-lg h-12 rounded-sm hover:bg-blue-500">
            Buscar
          </button>
        </NavLink>
      </div>

      <div className="w-full p-5 mb-5">
        <h2 className="text-lg font-medium mb-4">Produtos recentes</h2>
        <div className="flex flex-wrap gap-4">
          {recentProducts.map((product) => (
            <CardProduto
              key={product._id}
              name={product.name}
              img={product.url1}
              manufacturer={product.manufacturer}
              price={`R$ ${product.price.toFixed(2).toString()}`}
            />
          ))}
        </div>
        <NavLink to="/produtos">
          <p className="text-end mt-4 text-blue-400">Ver mais</p>
        </NavLink>
      </div>

      <Categorias />

      <div className="w-full p-5 mb-5">
        <h2 className="text-lg font-medium mb-4">Anúncios</h2>
        <div className="flex flex-wrap gap-4">
          {recommendedProducts.map((product) => (
            <CardProduto
              key={product._id}
              name={product.name}
              img={product.url1}
              manufacturer={product.manufacturer}
              price={`R$ ${product.price.toFixed(2).toString()}`}
            />
          ))}
        </div>
        <p className="text-end mt-4 text-blue-400">Ver mais</p>
      </div>
    </UserTemplate>
  );
}
