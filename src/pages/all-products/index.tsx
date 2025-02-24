import { useEffect, useState } from "react";
import CardProduto from "../../components/card-produto";
import UserTemplate from "../../templates/userTemplate";
import { getApiAllProducts, getApiAllProductsOrdered } from "./services";
import { Products } from "./types";
import ListLoading from "../../components/list-loading";

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);

  const [loading, setLoading] = useState(false);

  async function getAllProducts() {
    setLoading(true);
    try {
      const response = await getApiAllProducts();
      setAllProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos recentes");
    }
    setLoading(false);
  }

  async function getAllProductsOrder(typeOrder: "ascending" | "descending") {
    setLoading(true);
    setAllProducts([]);
    try {
      const response = await getApiAllProductsOrdered(typeOrder);
      setAllProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos recentes");
    }
    setLoading(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <UserTemplate>
      <div className="w-full p-5 mb-5 max-w-[1280px]">
        <h2 className="text-lg font-medium mb-4">Todos os produtos</h2>
        <div className="text-end my-4">
          <p>
            Ordenar por:{" "}
            <button
              onClick={() => getAllProductsOrder("ascending")}
              className="text-blue-400"
            >
              Menor preço
            </button>{" "}
            |{" "}
            <button
              onClick={() => getAllProductsOrder("descending")}
              className="text-blue-400"
            >
              Maior preço
            </button>
          </p>
        </div>
        {loading && <ListLoading />}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {allProducts.map((product) => (
            <CardProduto
              key={product._id}
              name={product.name}
              img={product.url1}
              manufacturer={product.manufacturer}
              price={`R$ ${product.price.toFixed(2).toString()}`}
            />
          ))}
        </div>
      </div>
    </UserTemplate>
  );
}
