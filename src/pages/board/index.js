import { usePost } from "../../boardContext";
import OnePost from "./components/onePost";
import UserInformation from "./components/userInformation";

const BoardPage = () => {
  const { post } = usePost();

  return (
    <div>
      <UserInformation />
      {post.map((post) => (
        <OnePost key={post.id} post={post} />
      ))}
    </div>
  );
};
export default BoardPage;
