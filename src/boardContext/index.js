import { createContext, useContext, useState } from "react";
import { MockPosts } from "../__mock__/index";

const PostContext = createContext();

export const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [post, setPost] = useState(MockPosts(52));

  // 로그인 한 유저 정보
  const [userData, setUserData] = useState({
    id: "",
    nickname: "",
    profileImg: "",
  });

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);

  const [commentId, setCommentId] = useState("");

  const [addPostShow, setAddPostShow] = useState(false);

  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
        userData,
        setUserData,

        currentPage,
        setCurrentPage,

        addPostShow,
        setAddPostShow,

        commentId,
        setCommentId,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
