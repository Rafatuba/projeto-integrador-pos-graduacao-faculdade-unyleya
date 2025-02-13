export default function CardProduto() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-max shadow-lg p-7 bg-white rounded-lg">
      <h1 className="text-center font-bold text-xl">Echo Spot com Alexa</h1>
      <img
        src="https://m.media-amazon.com/images/I/71anQJA7UcL._AC_SL1500_.jpg"
        alt="imagem do produto"
        className="w-40"
      />
      <p className="w-full font-bold text-lg">Amazon</p>
      <p className="w-full">R$ 459,90</p>
    </div>
  );
}
