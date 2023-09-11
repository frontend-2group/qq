import { usePost } from "../../../../boardContext";

const AddComments = ({ postId }) => {
  const { post, setPost } = usePost();
  console.log(post);
  const onAddComments = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    const getPost = post.find((el) => el.id === postId);

    const newComment = {
      id: Math.floor(Math.random() * 10000),
      content: comment,
      User: {
        id: Math.floor(Math.random() * 10000),
        nickName: "",
        profileImg: "",
      },
      createdAt: "",
      myComment: false,
    };

    const pushComment = {
      ...getPost,
      Comments: [newComment, ...getPost.Comments],
    };

    const newComments = post.map((el) => (el.id === postId ? pushComment : el));

    setPost(newComments);

    e.target.comment.value = "";
  };

  return (
    <form onSubmit={onAddComments}>
      <input name="comment" />
      <button>추가</button>
    </form>
  );
};

export default AddComments;
