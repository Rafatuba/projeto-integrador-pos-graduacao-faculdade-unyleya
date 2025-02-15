import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/userTemplate";

export default function Detalhes() {
  return (
    <UserTemplate>
      <h1 className="text-2xl font-bold text-gray-800 w-2xl my-8">
        Novo Echo Spot com Alexa (2024) | Despertador inteligente com som
        vibrante
      </h1>
      <div className="flex items-center justify-center gap-12">
        <div className="w-md">
          <Carousel
            infiniteLoop
            interval={4000}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            <div>
              <img src="https://m.media-amazon.com/images/I/71anQJA7UcL._AC_SL1500_.jpg" />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71CrkAgNKNL._AC_SL1500_.jpg" />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71JD11eJ+5L._AC_SL1500_.jpg" />
            </div>
          </Carousel>
        </div>

        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-4 w-96 shadow-md p-8 rounded-lg">
            <p className="font-bold">Informações do vendedor</p>
            <p>John Philip de Sousa</p>
            <p>Fortaleza PR</p>
            <p>
              <span className="font-bold">Email: </span>jpsousa@bol.com.br
            </p>
            <p>
              <span className="font-bold">Telefone: </span>(75) 9852-4521
            </p>
          </div>
          <div className="shadow-md p-8 rounded-lg">
            <p>Preço</p>
            <p className="text-4xl text-center">R$ 459,90</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-10 max-w-6xl">
        <h2 className="text-xl font-bold mb-5">Descrição</h2>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nobis quos at earum saepe distinctio fuga minima nemo dolorum,
          molestiae maxime voluptatem iusto quod atque corporis soluta totam
          repellendus exercitationem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iusto, consectetur suscipit aut asperiores at dolor
          tempore sunt accusantium illum consequuntur aliquam voluptates natus
          reiciendis vero cupiditate corrupti in itaque nulla!
        </p>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nobis quos at earum saepe distinctio fuga minima nemo dolorum,
          molestiae maxime voluptatem iusto quod atque corporis soluta totam
          repellendus exercitationem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iusto, consectetur suscipit aut asperiores at dolor
          tempore sunt accusantium illum consequuntur aliquam voluptates natus
          reiciendis vero cupiditate corrupti in itaque nulla!
        </p>
      </div>
    </UserTemplate>
  );
}
