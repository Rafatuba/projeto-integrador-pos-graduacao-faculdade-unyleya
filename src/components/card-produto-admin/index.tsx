import { NavLink, useNavigate } from "react-router-dom";
import { RiDeleteBinLine, RiEdit2Line, RiEyeLine } from "react-icons/ri";
import Modal from "react-modal";
import { useState } from "react";
import { CardPropsAdmin } from "./types";
import { removeApiProduct } from "./services";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { getApiMyProducts } from "../../pages/user-products/services";
import { toast } from "react-toastify";

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

export default function CardProdutoAdmin(props: CardPropsAdmin) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { token } = useAuthSessionStore();

  function openModal() {
    setIsOpen(true);
  }

  const navigate = useNavigate();

  const toastSuccess = () => {
    toast.success("Produto excluído com sucesso", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });
  };

  const toastError = () => {
    toast.error("Erro ao excluir produto. Tente novamente mais tarde.", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });
  };

  async function removeProduct() {
    try {
      await removeApiProduct(props.id, token);
      const response = await getApiMyProducts(token);
      toastSuccess();
      setIsOpen(false);
      props.setMyProducts(response.data);
    } catch (error) {
      toastError();
    }
  }

  return (
    <div className="flex flex-col justify-around items-center gap-4 w-3xs h-96 shadow-lg px-3 py-4 bg-white rounded-lg box-border relative">
      <h1 className="text-center font-bold text-xl">{props.name}</h1>
      <img src={props.img} alt={props.name} className="w-40" />
      <p className="w-full font-bold text-lg">{props.manufacturer}</p>
      <p className="w-full">R$ {props.price}</p>
      <div className=" flex flex-col gap-2 text-2xl absolute bottom-5 right-5">
        <NavLink to={`/detalhes/${props.id}`} title="Visualizar anúncio">
          <RiEyeLine />
        </NavLink>
        <button
          onClick={() => navigate("/form-product")}
          className="cursor-pointer"
          title="Editar anúncio"
        >
          <RiEdit2Line />
        </button>
        <button
          onClick={openModal}
          className="cursor-pointer"
          title="Excluir anúncio"
        >
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
                onClick={() => removeProduct()}
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
