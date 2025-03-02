import { NavLink, useNavigate } from "react-router-dom";

export default function HeaderAdmin() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center py-4 px-4 bg-primary text-white fixed z-50 top-0 w-full">
      <h1 className="text-3xl">
        <NavLink to="/dashboard">UnyBay</NavLink>
      </h1>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink to="/dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="/quemsomos">Quem somos</NavLink>
          </li>
          <li>
            <NavLink to="/">Sair</NavLink>
          </li>
          <li>
            <button
              className="bg-white text-secundary py-1 px-6 rounded-sm cursor-pointer hover:bg-gray-300 transition duration-200"
              onClick={() => navigate("/meus-anuncios")}
            >
              Anunciar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
