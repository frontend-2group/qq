import { styled } from "styled-components";
import { usePost } from "../../../../boardContext";
import DeleteComments from "./delComments";
import UpdateComments from "./updateComments";

export const OneComment = ({ posts, comments, postId, commentsId }) => {
  const { post, commentId, setCommentId, userData } = usePost();

  const onOpenUpdateInput = () => {
    const getPost = post.find((el) => el.id === postId);

    const comment = getPost.Comments.find((el) => el.id === commentsId);

    setCommentId(comment.id);
  };

  return (
    <>
      {commentsId === commentId ? (
        <>
          <UpdateComments
            comments={comments}
            commentsId={commentsId}
            postId={posts.id}
          />
          <DeleteComments
            postId={posts.id}
            commentId={commentsId}
            comment={comments.content}
          />
        </>
      ) : (
        <>
          <ProfileImg
            src={userData.profileImg}
            alt="img"
            style={{ padding: "10px" }}
          />
          <p>{comments.content}</p>
          <button onClick={onOpenUpdateInput}>수정</button>
          <DeleteComments
            postId={posts.id}
            commentId={commentsId}
            comment={comments.content}
          />
        </>
      )}
    </>
  );
};

export default OneComment;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
