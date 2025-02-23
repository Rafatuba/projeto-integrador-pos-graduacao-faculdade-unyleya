import { NavLink, useNavigate } from "react-router-dom";
import { RiDeleteBinLine, RiEdit2Line, RiEyeLine } from "react-icons/ri";
import Modal from "react-modal";
import { useState } from "react";

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

export default function CardProdutoAdmin() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

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
        <button onClick={openModal} className="cursor-pointer">
          <RiDeleteBinLine />
        </button>
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={estiloModal}
          contentLabel="Example Modal"
        >
          <div className="flex flex-col gap-4 items-center px-16 py-4">
            <h1 className="font-medium text-lg">Encluir Produto</h1>
            <h1>Deseja realmente excluir o item?</h1>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-primary text-white px-10 py-2 rounded-md hover:bg-blue-400  duration-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
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
