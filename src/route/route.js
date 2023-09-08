import { createBrowserRouter } from "react-router-dom";
import BoardPage from "../pages/board";
import LoginPage from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/board",
    element: <BoardPage />,
  },
]);

export default router;
