import { usePost } from "../../../boardContext";
import { useRef, useState } from "react";

const AddPostFix = ({ postid }) => {
  const { post, setPost } = usePost();
  const changePostTitle = useRef(null);
  const changePostContent = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);
  console.log(post);

  const PostChangeBtn = () => {
    if (!isEditMode) return setIsEditMode(true);

    const getPost = post.find((el) => el.id === postid);
    console.log(getPost);

    // const changePost = post.find((el) => el.id === getPost.id);
    // console.log(changePost);
    // getPost.title = changePostTitle.current.value;
    // getPost.content = changePostContent.current.value;
    // console.log(getPost.title);
    // console.log(getPost.content);

    const changePost = {
      ...getPost,
      title: changePostTitle.current.value,
      content: changePostContent.current.value,
    };
    console.log(changePost);

    const changePosts = post.map((el) => (el.id === postid ? changePost : el));
    setPost(changePosts);
    changePostTitle.current.value = "";
    changePostContent.current.value = "";
    setIsEditMode(false);
  };
  return (
    <>
      <button onClick={PostChangeBtn}>수정</button>
      {isEditMode ? (
        <div>
          {" "}
          <textarea defaultValue={post.title} ref={changePostTitle}></textarea>
          <textarea
            defaultValue={post.content}
            ref={changePostContent}
          ></textarea>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default AddPostFix;

//게시물 기능버튼
// const PostSideBtn = styled.button`
/* background-color: aqua; */
// `;
