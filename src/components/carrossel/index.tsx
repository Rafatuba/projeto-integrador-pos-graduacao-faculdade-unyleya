import { Carousel } from "react-responsive-carousel";
import ControlesImg from "../../assets/controles.webp";
import DescontoImg from "../../assets/desconto.webp";
import macsImg from "../../assets/macs.webp";

export default function Carrossel() {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img src={ControlesImg} />
        </div>
        <div>
          <img src={DescontoImg} />
        </div>
        <div>
          <img src={macsImg} />
        </div>
      </Carousel>
    </div>
  );
}
