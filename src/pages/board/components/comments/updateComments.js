import { usePost } from "../../../../boardContext";

const UpdateComments = ({ commentsId, postId, comments }) => {
  const { post, setCommentId, setPost } = usePost();
  const getPost = post.find((el) => el.id === postId);
  const getComment = getPost.Comments.find((el) => el.id === commentsId);

  console.log(comments.content);

  const SubmitUpdateCommentsValue = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    const getCommentUpdateContent = {
      ...getComment,
      content: comment,
    };

    const updateCommentsArr = getPost.Comments.map((el) =>
      el.id === commentsId ? getCommentUpdateContent : el
    );

    console.log(updateCommentsArr);

    const updateComment = {
      ...getPost,
      Comments: updateCommentsArr,
    };

    const updatePostComment = post.map((el) =>
      el.id === postId ? updateComment : el
    );

    console.log(updatePostComment);
    setPost(updatePostComment);
    setCommentId("");
  };
  return (
    <form onSubmit={SubmitUpdateCommentsValue}>
      <input name="comment" defaultValue={comments.content}></input>
      <button>수정</button>
    </form>
  );
};
export default UpdateComments;
