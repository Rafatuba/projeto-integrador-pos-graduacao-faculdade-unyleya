import { FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white flex flex-col items-center justify-center w-full min-h-52 gap-3  px-10">
      <div className="flex self-start">
        <h2 className="font-bold text-2xl ">UnyBay</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <p>Faculdade Unyleya | Todos os direitos reservados</p>
        <div className="flex items-center justify-center text-4xl gap-3">
          <FaLinkedin />
          <FaFacebook />
        </div>
      </div>
    </footer>
  );
}
