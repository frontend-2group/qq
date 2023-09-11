import { usePost } from "../../../../boardContext";

const DeleteComments = ({ postId, commentId }) => {
  const { post, setPost } = usePost();
  //   console.log(commentId);

  const deleteComment = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const getPost = post.find((el) => el.id === postId);

      console.log(getPost);

      const filterComments = getPost.Comments.filter(
        (el) => el.id !== commentId
      );
      console.log(filterComments);

      const delComments = {
        ...getPost,
        Comments: [...filterComments],
      };

      const deleteComments = post.map((el) =>
        el.id === postId ? delComments : el
      );

      setPost(deleteComments);
    }
  };
  return (
    <>
      <button onClick={deleteComment}>삭제</button>
    </>
  );
};
export default DeleteComments;
