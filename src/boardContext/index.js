import { createContext, useContext, useState } from "react";
import { MockPosts } from "../__mock__/index";

const PostContext = createContext();

export const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [post, setPost] = useState(MockPosts(5));
  const [userData, setUserData] = useState({
    id: "",
    nickname: "",
    profileImg: "",
  });
  const [addPostShow, setAddPostShow] = useState(false);
  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
        userData,
        setUserData,
        addPostShow,
        setAddPostShow,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
