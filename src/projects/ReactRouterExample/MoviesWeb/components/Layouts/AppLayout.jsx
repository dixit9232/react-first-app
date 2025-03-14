import { Outlet, useNavigation } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loader } from "./Loader";

export const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading" || navigation.state === "submitting";

  return (
    <div className="container">
      <Header />
      {isLoading ? <Loader /> : <Outlet />}
      <Footer />
    </div>
  );
};