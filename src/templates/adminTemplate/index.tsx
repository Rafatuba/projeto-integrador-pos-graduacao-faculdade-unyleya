import { PropsWithChildren, useEffect } from "react";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";
import HeaderAdmin from "../../components/header-admin";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { useNavigate } from "react-router-dom";

type AdminTemplateProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplateProps) {
  const { token } = useAuthSessionStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

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
