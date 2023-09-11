import { createContext, useContext, useState } from "react";
import { MockPosts } from "../__mock__/index";

const PostContext = createContext();

export const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [post, setPost] = useState(MockPosts(5));
  const [commentId, setCommentId] = useState("");

  return (
    <PostContext.Provider value={{ post, setPost, commentId, setCommentId }}>
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
