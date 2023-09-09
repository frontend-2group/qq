import { usePost } from "../../../boardContext";

const AddPostDel = ({ postid }) => {
  const { post, setPost } = usePost();
  console.log(post);
  //   console.log(postid);

  const PostDeleteBtn = () => {
    const getPost = post.find((el) => el.id === postid);
    // console.log(getPost);

    const deletePost = post.filter((el) => el.id !== getPost.id);
    console.log(deletePost);
    // post.

    // const deletedPost = {
    //   ...getPost,
    //   id: [...deletePost],
    // };
    setPost(deletePost);

    // console.log(deletedPost);

    // const deletedPosts = post.map((el) =>
    //   el.id === postid ? deletedPost : el
    // );
    // setPost(deletedPosts);
  };
  return <button onClick={PostDeleteBtn}>삭제</button>;
};
export default AddPostDel;
