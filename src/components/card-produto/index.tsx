import { useNavigate } from "react-router-dom";
import { CardProps } from "./types";

export default function CardProduto(props: CardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/detalhes/${props.id}`)}
      className="flex flex-col justify-around items-center gap-4 w-3xs h-96 shadow-lg px-3 py-4 bg-white rounded-lg box-border cursor-pointer"
      data-aos="flip-left"
    >
      <h1 className="text-center font-bold text-lg">{props.name}</h1>
      <img src={props.img} alt={props.name} className="max-w-36" />
      <div className="flex flex-col gap-2 self-start">
        <p className="w-full font-bold text-sm">{props.manufacturer}</p>
        <p className="w-full">R$ {props.price}</p>
      </div>
    </button>
  );
}
