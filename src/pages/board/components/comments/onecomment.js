import { usePost } from "../../../../boardContext";
import DeleteComments from "./delComments";
import UpdateComments from "./updateComments";

export const OneComment = ({ posts, comments, postId, commentsId }) => {
  const { post, commentId, setCommentId } = usePost();

  const onOpenUpdateInput = () => {
    const getPost = post.find((el) => el.id === postId);
    // console.log(getPost);
    const comment = getPost.Comments.find((el) => el.id === commentsId);

    setCommentId(comment.id);
  };

  return (
    <>
      {commentId === comments.id ? (
        <>
          {/*값 갱신하는 수정버튼  */}
          <UpdateComments
            comments={comments}
            commentsId={commentsId}
            postId={posts.id}
          />
        </>
      ) : (
        <>
          <p>{comments.content}</p>
          <button onClick={onOpenUpdateInput}>수정</button>
          {/*input창 띄우는 용도 */}
        </>
      )}

      <div>
        <DeleteComments
          postId={post.id}
          commentId={comments.id}
          comment={comments.content}
        />
      </div>
    </>
  );
};

export default OneComment;
