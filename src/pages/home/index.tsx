import CardProduto from "../../components/card-produto";
import UserTemplate from "../../templates/userTemplate";

export default function Home() {
  return (
    <UserTemplate>
      <div className="w-full p-5 mb-5">
        <h2 className="text-lg font-medium mb-4">Produtos recentes</h2>
        <div className="flex flex-wrap gap-4">
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </div>
        <p className="text-end mt-4 text-blue-400">Ver mais</p>
      </div>

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
