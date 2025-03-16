// import { createBrowserRouter, RouterProvider } from "react-router";
// import { AppLayout } from "./projects/ReactRouterExample/MoviesWeb/components/Layouts/AppLayout";
// import { Home } from "./projects/ReactRouterExample/MoviesWeb/Pages/Home";
// import { About } from "./projects/ReactRouterExample/MoviesWeb/Pages/About";
// import { Movies } from "./projects/ReactRouterExample/MoviesWeb/Pages/Movies";
// import { Contact } from "./projects/ReactRouterExample/MoviesWeb/Pages/Contact";
// import { ErrorPage } from "./projects/ReactRouterExample/MoviesWeb/components/UI/ErrorPage";
// import { fetchMovieDetails, fetchMovies, submitContactForm } from "./projects/ReactRouterExample/MoviesWeb/APIs/FetchMovieData";
// import { MoviesDetails } from "./projects/ReactRouterExample/MoviesWeb/Pages/MoviesDetails";



// export const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <AppLayout />,
//       errorElement: <ErrorPage />,

//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/about",
//           element: <About />,
//         },
//         {
//           path: "/movies",
//           element: <Movies />,
//           loader: fetchMovies,
//         },{
//           path: "/movies/:id",
//           element: <MoviesDetails />,
//           loader: fetchMovieDetails,
//         },
//         {
//           path: "/contact",
//           element: <Contact />,
//           action: submitContactForm
//         },
//       ],
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router}></RouterProvider>
//     </>
//   );
// };

///-------------------------------------------------- New Code ---------------------------------------------------------------
import { Posts } from "./projects/axios-example/pages/Posts";


export const App = () => {
  return <Posts />;
};
