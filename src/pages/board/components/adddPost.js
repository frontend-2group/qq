import styled from "styled-components";
import { usePost } from "../../../boardContext";
import { faker } from "@faker-js/faker";
const AddPost = ({ onClose }) => {
  //onClose추가
  const { post, setPost, userData, setAddPostShow } = usePost();
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
        id: userData.id,
        nickName: userData.nickname,
        profileImg: userData.profileImg,
      },
      createdAt: new Date(),
      myPost: true,
      //내가쓴것만
    };
    setPost([newAddPost, ...post]);
    setAddPostShow(false);
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmitAdd}>
        <Title>
          <h1>NEW POST</h1>
          <button type="button" onClick={onClose}>
            x
          </button>
        </Title>
        <Content>
          <input name="title" placeholder="title을 입력해주세요" />
          <input name="content" placeholder="content를 입력해주세요" />
        </Content>
        <Button>작성하기</Button>
      </Form>
    </Wrapper>
  );
};
export default AddPost;
//게시물작성을 눌렀을때 보이기

//스타일..은 대충했습니당...
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.7); */
  z-index: 1000;
`;

const Form = styled.form`
  width: 300px;
  height: 300px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

//모달의 제목이랑 버튼
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    margin-left: 64px;
  }

  & > button {
    border: none;
    background-color: white;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

//인풋에 내용
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  flex-direction: column;

  & > input {
    width: 88%;
    height: 40px;
    /* border: none;
    outline: none;
    border-radius: 8px; */
    padding: 0 16px;
    margin-bottom: 16px;
    text-align: center;
  }
`;
const Button = styled.button`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: white;
  }
  border: 1px solid #000;
  margin-top: 20px;
  padding: 10px;
`;
//9월11일자 커밋해보기
