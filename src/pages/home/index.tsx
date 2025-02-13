import { NavLink } from "react-router-dom";
import CardProduto from "../../components/card-produto";
import Carrossel from "../../components/carrossel";
import Categorias from "../../components/categorias";
import UserTemplate from "../../templates/userTemplate";

export default function Home() {
  return (
    <UserTemplate>
      <Carrossel />

      <div>
        <input
          type="text"
          className="shadow w-full h-12 rounded-sm my-6 p-3 text-lg"
          placeholder="&#128269; Buscar produto"
        />
      </div>

      <div className="w-full p-5 mb-5">
        <h2 className="text-lg font-medium mb-4">Produtos recentes</h2>
        <div className="flex flex-wrap gap-4">
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </div>
        <NavLink to="/produtos">
          <p className="text-end mt-4 text-blue-400">Ver mais</p>
        </NavLink>
      </div>

      <Categorias />

      <div className="w-full p-5 mb-5">
        <h2 className="text-lg font-medium mb-4">Anúncios</h2>
        <div className="flex flex-wrap gap-4">
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </div>
        <p className="text-end mt-4 text-blue-400">Ver mais</p>
      </div>
    </UserTemplate>
  );
}
