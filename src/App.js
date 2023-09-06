import PostProvider from "./boardContext";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";

function App() {
  return (
    <>
      <PostProvider>
        <RouterProvider router={router} />
      </PostProvider>
    </>
  );
}

export default App;
