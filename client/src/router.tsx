import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import RootLayout from "@/layouts/RootLayout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "predictions",
          element: <Predictions />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);
