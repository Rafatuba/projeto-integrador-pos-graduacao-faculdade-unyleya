import Footer from "../../components/footer";
import Header from "../../components/header";
import ScrollTop from "../../components/scrollTop";

export default function UserTemplate(props: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col items-center relative">
      <ScrollTop />
      <Header />
      <div className="flex flex-1 flex-col px-[5%] mt-20 max-w-[1920px]">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
