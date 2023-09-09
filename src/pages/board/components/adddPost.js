import { usePost } from "../../../boardContext";
import { faker } from "@faker-js/faker";
const AddPost = () => {
  const { post, setPost } = usePost();
  console.log(post, setPost);
  const onSubmitAdd = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;
    console.log(title, content);

    const newAddPost = {
      id: Math.floor(Math.random() * 1000000),
      title,
      content,
      Comments: [],
      Post_img: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => faker.image.url()),
      User: {
        id: Math.floor(Math.random() * 1000000),
        nickname: faker.person.firstName(),

        profileImg: faker.image.url(),
      },
      createdAt: new Date(),
      myPost: true,
      //내가쓴것만
    };
    setPost([newAddPost, ...post]);
  };

  return (
    <form onSubmit={onSubmitAdd}>
      <input name="title" />
      <input name="content" />
      <button>작성하기</button>
    </form>
  );
};
export default AddPost;
