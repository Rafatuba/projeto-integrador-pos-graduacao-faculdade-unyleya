import Footer from "../../components/footer";
import Header from "../../components/header";

export default function UserTemplate(props: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col relative">
      <Header />
      <div className="flex flex-1 flex-col px-[5%] mt-20">{props.children}</div>
      <Footer />
    </div>
  );
}
