import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Mypage from "@pages/Mypage";
import Test from "@pages/Test";
import Result from "@pages/Result";
import RootLayout from "@layouts/RootLayout";
import ProtectedRouter from "@/app/ProtectedRouter";

const Router = () => {
  const Routes = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "",
          element: <ProtectedRouter />,
          children: [
            {
              path: "/mypage",
              element: <Mypage />,
            },
            {
              path: "/test",
              element: <Test />,
            },
            {
              path: "/result",
              element: <Result />,
            },
          ],
        },
      ],
    },
  ];

  const router = createBrowserRouter([...Routes]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
