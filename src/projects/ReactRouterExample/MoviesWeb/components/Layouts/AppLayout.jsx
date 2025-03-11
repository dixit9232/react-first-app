import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <div className="container">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
