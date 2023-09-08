import { usePost } from "../../boardContext";
import OnePost from "./components/onePost";

const BoardPage = () => {
  const { post } = usePost();

  return (
    <div>
      {post.map((post) => (
        <OnePost key={post.id} post={post} />
      ))}
    </div>
  );
};
export default BoardPage;
