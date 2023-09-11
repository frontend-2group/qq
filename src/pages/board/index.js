import { usePost } from "../../boardContext";
import AddPost from "./components/adddPost";
import OnePost from "./components/onePost";
import UserInformation from "./components/userInformation";

const BoardPage = () => {
  const { post, addPostShow, setAddPostShow } = usePost();

  return (
    <div>
      <UserInformation />
      {/* {addPostShow && <AddPost />} */}
      {addPostShow && <AddPost onClose={() => setAddPostShow(false)} />}
      {post.map((post) => (
        <OnePost key={post.id} post={post} />
      ))}
    </div>
  );
};
export default BoardPage;
//<AddPost />
