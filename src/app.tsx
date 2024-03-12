import { FunctionComponent } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from "src/core/main-page";
import TatetiPage from "src/core/tateti/page/online";

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
