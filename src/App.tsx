import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuemSomos from "./pages/quemsomos";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import Detalhes from "./pages/detalhes";
import ResultadoBusca from "./pages/resultado-busca";
import NotFound from "./pages/not-found";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quemsomos",
      element: <QuemSomos />,
    },
    {
      path: "/produtos",
      element: <ListProducts />,
    },
    {
      path: "/detalhes",
      element: <Detalhes />,
    },
    {
      path: "/resultado-busca",
      element: <ResultadoBusca />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
