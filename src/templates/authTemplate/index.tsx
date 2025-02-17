import { PropsWithChildren } from "react";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";
import { NavLink } from "react-router-dom";

type AuthTemplateProps = PropsWithChildren & {};

export default function AuthTemplate(props: AuthTemplateProps) {
  return (
    <div className="h-screen flex flex-col relative">
      <ScrollTop />
      <header className="flex justify-between items-center py-4 px-4 bg-primary text-white fixed z-50 top-0 w-full">
        <h1 className="text-3xl">
          <NavLink to="/">UnyBay</NavLink>
        </h1>
      </header>
      <div className="flex flex-1 flex-col px-[5%] mt-20 max-w-[1920px]">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
