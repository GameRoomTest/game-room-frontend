import { FunctionComponent } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from "core/main-page";
import TatetiPage from "core/tateti/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/play/tateti",
    element: <TatetiPage />,
  }
]);

const App: FunctionComponent = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
