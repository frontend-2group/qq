import { usePost } from "../../boardContext";
import AddPost from "./components/adddPost";
import OnePost from "./components/onePost";
import UserInformation from "./components/userInformation";

const BoardPage = () => {
  const { post } = usePost();

  return (
    <div>
   <AddPost />
      {post.map((post) => (
        <OnePost key={post.id} post={post} />
      ))}
    </div>
  );
};
export default BoardPage;
