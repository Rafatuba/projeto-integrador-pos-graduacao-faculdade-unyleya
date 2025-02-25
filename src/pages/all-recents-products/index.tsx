import { useEffect, useState } from "react";
import CardProduto from "../../components/card-produto";
import UserTemplate from "../../templates/userTemplate";
import { getApiAllRecentsProducts } from "./services";
import { AllRecentProducts } from "./types";
import ListLoading from "../../components/list-loading";

export default function AllRecentsProducts() {
  const [allRecentsProducts, setAllRecentsProducts] = useState<
    AllRecentProducts[]
  >([]);

  const [loading, setLoading] = useState(false);

  async function getAllRecentsProducts() {
    setLoading(true);
    try {
      const response = await getApiAllRecentsProducts();
      setAllRecentsProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos recentes");
    }
    setLoading(false);
  }

  useEffect(() => {
    getAllRecentsProducts();
  }, []);

  return (
    <UserTemplate>
      <div className="w-full p-5 mb-5 max-w-[1280px]">
        <h2 className="text-lg font-medium mb-4">Produtos Recentes</h2>
        {loading && <ListLoading />}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {allRecentsProducts.map((product) => (
            <CardProduto
              key={product._id}
              id={product._id}
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
