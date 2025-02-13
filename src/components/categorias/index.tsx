import { FaCamera, FaTv } from "react-icons/fa";
import { LuGamepad2, LuLaptop, LuTabletSmartphone } from "react-icons/lu";
import { FaEllipsis } from "react-icons/fa6";

const itensCategoria = [
  {
    id: 1,
    titulo: "Jogos",
    icone: <LuGamepad2 />,
  },
  {
    id: 2,
    titulo: "Notebooks",
    icone: <LuLaptop />,
  },
  {
    id: 3,
    titulo: "Câmeras",
    icone: <FaCamera />,
  },
  {
    id: 4,
    titulo: "Smartfones e Tablets",
    icone: <LuTabletSmartphone />,
  },
  {
    id: 5,
    titulo: "Tvs e Monitores",
    icone: <FaTv />,
  },
  {
    id: 6,
    titulo: "Outros",
    icone: <FaEllipsis />,
  },
];

export default function Categorias() {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-primary p-5 mb-5">
      <h2 className="text-white text-lg font-medium mb-4">Categorias</h2>
      <div className="flex justify-around items-center">
        {itensCategoria.map((item) => (
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-3xl bg-white text-primary rounded-full p-3">
              {item.icone}
            </span>
            <p className="text-white font-medium text-lg">{item.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
