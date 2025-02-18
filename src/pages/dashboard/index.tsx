import { NavLink } from "react-router-dom";
import Carrossel from "../../components/carrossel";
import AdminTemplate from "../../templates/adminTemplate";
import CardProduto from "../../components/card-produto";
import Categorias from "../../components/categorias";

export default function Dashboard() {
  return (
    <AdminTemplate>
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
    </AdminTemplate>
  );
}
