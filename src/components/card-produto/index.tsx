import { NavLink } from "react-router-dom";
import { CardProps } from "./types";

export default function CardProduto(props: CardProps) {
  return (
    <NavLink to="/detalhes">
      <div className="flex flex-col justify-around items-center gap-4 w-3xs h-96 shadow-lg p-7 bg-white rounded-lg">
        <h1 className="text-center font-bold text-xl">{props.name}</h1>
        <img src={props.img} alt={props.name} className="w-40 object-contain" />
        <div className="flex flex-col gap-2 self-start">
          <p className="w-full font-bold text-lg">{props.manufacturer}</p>
          <p className="w-full">{props.price}</p>
        </div>
      </div>
    </NavLink>
  );
}
