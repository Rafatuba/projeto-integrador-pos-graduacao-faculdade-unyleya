import CardProduto from "../../components/card-produto";
import UserTemplate from "../../templates/userTemplate";

export default function ListProducts() {
  return (
    <UserTemplate>
      <div className="w-full p-5 mb-5 max-w-[1280px]">
        <h2 className="text-lg font-medium mb-4">Produtos</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {Array.from({ length: 14 }).map(() => (
            <CardProduto />
          ))}
        </div>
      </div>
    </UserTemplate>
  );
}
