import { NavLink, useNavigate } from "react-router-dom";
import { RiDeleteBinLine, RiEdit2Line, RiEyeLine } from "react-icons/ri";

export default function CardProdutoAdmin() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-max shadow-lg p-7 bg-white rounded-lg relative">
      <h1 className="text-center font-bold text-xl">Echo Spot com Alexa</h1>
      <img
        src="https://m.media-amazon.com/images/I/71anQJA7UcL._AC_SL1500_.jpg"
        alt="imagem do produto"
        className="w-40"
      />
      <p className="w-full font-bold text-lg">Amazon</p>
      <p className="w-full">R$ 459,90</p>
      <div className=" flex flex-col gap-2 text-2xl absolute bottom-5 right-5">
        <NavLink to="/detalhes">
          <RiEyeLine />
        </NavLink>
        <button
          onClick={() => navigate("/form-product")}
          className="cursor-pointer"
        >
          <RiEdit2Line />
        </button>
        <button
          onClick={() => alert("Vc Excluiu o produto")}
          className="cursor-pointer"
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}
