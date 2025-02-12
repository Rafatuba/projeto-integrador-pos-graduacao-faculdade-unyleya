import UserTemplate from "../../templates/userTemplate";

export default function NotFound() {
  return (
    <UserTemplate>
      <div className="flex flex-1 flex-col items-center justify-center gap-10">
        <img
          src="https://www.robsonpiresxerife.com/wp-content/uploads/2018/08/deu-rui.png"
          alt="imagem deu ruim"
        />
        <h1 className="text-xl">404 - Página não encontrada</h1>
      </div>
    </UserTemplate>
  );
}
