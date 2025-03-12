import { createBrowserRouter, RouterProvider } from "react-router";
import { AppLayout } from "./projects/ReactRouterExample/MoviesWeb/components/Layouts/AppLayout";
import { Home } from "./projects/ReactRouterExample/MoviesWeb/Pages/Home";
import { About } from "./projects/ReactRouterExample/MoviesWeb/Pages/About";
import { Movies } from "./projects/ReactRouterExample/MoviesWeb/Pages/Movies";
import { Contact } from "./projects/ReactRouterExample/MoviesWeb/Pages/Contact";
import { ErrorPage } from "./projects/ReactRouterExample/MoviesWeb/components/UI/ErrorPage";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
