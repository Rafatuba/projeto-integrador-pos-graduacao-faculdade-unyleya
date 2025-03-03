import { useParams } from "react-router-dom";
import CardProduto from "../../components/card-produto";
import UserTemplate from "../../templates/userTemplate";
import { getApiProductsByName } from "./services";
import { useEffect, useState } from "react";

import ListLoading from "../../components/list-loading";
import { Product } from "./types";

export default function ResultadoBusca() {
  const params = useParams();
  const nameProduct = params?.product;

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  async function getProductsByName() {
    setLoading(true);
    try {
      const response = await getApiProductsByName(nameProduct!);
      setAllProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos por nome");
    }
    setLoading(false);
  }

  useEffect(() => {
    getProductsByName();
  }, []);

  return (
    <UserTemplate>
      <div className="w-full p-5 mb-5 max-w-[1280px]">
        <h2 className="text-lg font-medium mb-4">Resultado da busca</h2>
        {loading && <ListLoading />}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {allProducts.map((product) => (
            <CardProduto
              key={product._id}
              id={product._id}
              name={product.name}
              manufacturer={product.manufacturer}
              img={product.url1}
              price={product.price}
            />
          ))}
        </div>
        <p className="pt-8">
          Total: {allProducts.length}{" "}
          {allProducts.length > 0
            ? allProducts.length > 1
              ? "itens"
              : "item"
            : "Nenhum item encontrado"}
        </p>
      </div>
    </UserTemplate>
  );
}
