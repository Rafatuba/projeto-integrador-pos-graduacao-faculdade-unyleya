import CardProduto from "../../components/card-produto";
import UserTemplate from "../../templates/userTemplate";

export default function ResultadoBusca() {
  return (
    <UserTemplate>
      <div className="w-full p-5 mb-5 max-w-[1280px]">
        <h2 className="text-lg font-medium mb-4">Resultado da busca</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {Array.from({ length: 7 }).map(() => (
            <CardProduto />
          ))}
        </div>
        <p className="pt-8">Total: 7 itens</p>
      </div>
    </UserTemplate>
  );
}
