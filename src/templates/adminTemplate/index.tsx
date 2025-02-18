import { PropsWithChildren } from "react";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";
import HeaderAdmin from "../../components/header-admin";

type AdminTemplateProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplateProps) {
  return (
    <div className="h-screen flex flex-col relative">
      <ScrollTop />
      <HeaderAdmin />
      <div className="flex flex-1 flex-col px-[5%] mt-20 max-w-[1920px]">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
