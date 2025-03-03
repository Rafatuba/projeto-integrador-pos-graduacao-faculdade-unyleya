import { NavLink, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import { useAuthSessionStore } from "../../hooks/use-auth-session";

const estiloModal = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function HeaderAdmin() {
  const { clearToken } = useAuthSessionStore();
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function logout() {
    console.log("Saiu");
    clearToken();
    navigate("/");
  }

  return (
    <div>
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
              <button onClick={openModal}>Sair</button>
            </li>
            <li>
              <button
                className="bg-white text-secundary py-1 px-6 rounded-sm cursor-pointer hover:bg-gray-300 transition duration-200"
                onClick={() => navigate("/meus-anuncios")}
              >
                Meus anúncios
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={estiloModal}
          contentLabel="Example Modal"
        >
          <div className="flex flex-col gap-4 items-center px-16 py-4">
            <h1 className="font-medium text-lg">Sair</h1>
            <h1>Deseja realmente sair?</h1>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-primary text-white px-10 py-2 rounded-md hover:bg-blue-400  duration-200 cursor-pointer"
                onClick={logout}
              >
                Sim
              </button>
              <button
                className="text-primary border-2 px-10 py-2 rounded-md hover:bg-blue-400 hover:text-white duration-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Não
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
