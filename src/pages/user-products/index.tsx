import { useNavigate } from "react-router-dom";
import CardProduto from "../../components/card-produto";
import AdminTemplate from "../../templates/adminTemplate";

export default function UserProducts() {
  const navigate = useNavigate();

  return (
    <AdminTemplate>
      <div className="w-full p-5 mb-5 max-w-[1280px]">
        <div className="flex justify-between items-center  mb-4">
          <h2 className="text-lg font-medium">Meus anúncios</h2>
          <button
            className="bg-secundary text-white py-1 px-6 rounded-sm cursor-pointer hover:bg-orange-600 transition duration-200"
            onClick={() => navigate("#")}
          >
            Adicionar
          </button>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {Array.from({ length: 5 }).map(() => (
            <CardProduto />
          ))}
        </div>
        <p className="pt-8">Total: 5 anúncios</p>
      </div>
    </AdminTemplate>
  );
}
