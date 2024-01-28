import { FunctionComponent } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from "./core/main-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  }
]);

const App: FunctionComponent = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
