import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/userTemplate";
import { useParams } from "react-router-dom";
import { getApiDetailsProducts } from "./services";
import { useEffect, useState } from "react";
import { DetalhesProps } from "./types";
import { toast, ToastContainer } from "react-toastify";
import { formatPrice } from "../../utils/format-price";

export default function Detalhes() {
  const [product, setProduct] = useState<DetalhesProps>({} as DetalhesProps);

  const params = useParams();
  const idProduct = params?.id;

  const toastError = () =>
    toast.error("Falha ao buscar produto. Tente novamente mais tarde!", {
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toastId",
    });

  async function getDetailsProduct() {
    try {
      const response = await getApiDetailsProducts(idProduct!);
      setProduct(response.data);
    } catch (error) {
      toastError();
    }
  }

  useEffect(() => {
    getDetailsProduct();
  }, []);

  return (
    <UserTemplate>
      <h1 className="text-2xl font-bold text-gray-800 w-2xl my-8">
        {product.name}
      </h1>
      <div
        className="flex items-center justify-center gap-12"
        key={product._id}
      >
        <div className="w-md">
          <Carousel
            infiniteLoop
            interval={4000}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            <div>
              <img src={product.url1} />
            </div>
            <div>
              <img src={product.url2} />
            </div>
          </Carousel>
        </div>

        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-4 w-96 shadow-md p-8 rounded-lg">
            <p className="font-bold">Informações do vendedor</p>
            <p>{product.user?.name || "Usuário desconhecido"}</p>
            <p>
              {product.user?.city} {product.user?.state}
            </p>
            <p>
              <span className="font-bold">Email: </span>
              {product.user?.email}
            </p>
            <p>
              <span className="font-bold">Telefone: </span>
              {product.user?.phone}
            </p>
          </div>
          <div className="shadow-md p-8 rounded-lg">
            <p>Preço</p>
            <p className="text-4xl text-center">{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-10 max-w-6xl">
        <h2 className="text-xl font-bold mb-5">Descrição</h2>
        <p
          className="text-gray-600 text-lg"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>

        <ToastContainer />
      </div>
    </UserTemplate>
  );
}
