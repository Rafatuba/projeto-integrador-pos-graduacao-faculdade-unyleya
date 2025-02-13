import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-4 bg-primary text-white fixed z-50 top-0 w-full">
      <h1 className="text-3xl">
        <NavLink to="/">UnyBay</NavLink>
      </h1>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/quemsomos">Quem somos</NavLink>
          </li>
          <li>
            <button className="bg-secundary py-1 px-6 rounded-sm cursor-pointer hover:bg-orange-600 transition duration-200">
              Entrar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
