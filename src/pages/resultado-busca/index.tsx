import UserTemplate from "../../templates/userTemplate";

export default function ResultadoBusca() {
  return (
    <UserTemplate>
      <div>
        <h1>Produtos encontrados:</h1>
        <ul>
          <li>Produto 1</li>
          <li>Produto 2</li>
          <li>Produto 3</li>
        </ul>
      </div>
    </UserTemplate>
  );
}
