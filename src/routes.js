// import { AiOutlineHome } from "react-icons/ai";
import Home from "./pages/Home/Home";
import GameDetail from "./pages/GameDetail/GameDetail";



const routes = [
  {
    invisible: false,
    name: "Home",
    link: "/home",
    layout: "/game",
    Element: <Home />,
    // icon: <AiOutlineHome />,
    activeIndex: 0,
  },
  {
    invisible: false,
    name: "GameDetail",
    link: "/GameDetail",
    layout: "/game",
    Element: <GameDetail/>,
    // icon: <AiOutlineHome />,
    activeIndex: 0,
  },
];

export default routes;
