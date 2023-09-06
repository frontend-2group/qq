import { createBrowserRouter } from "react-router-dom";
import BoardPage from "../pages/board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BoardPage />,
  },
]);

export default router;
