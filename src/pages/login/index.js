import { styled } from "styled-components";
import { usePost } from "../../boardContext";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

const LoginPage = () => {
  const { userData, setUserData } = usePost();
  const navigate = useNavigate();

  const onLoginForm = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const nickname = e.target.nickname.value;
    setUserData({
      ...userData,
      id,
      nickname,
      profileImg: faker.image.url(),
    });
    navigate("./board");
  };

  return (
    <LoginForm onSubmit={onLoginForm}>
      <LoginBox>
        <h1>BOARD</h1>
        <hr />
        <InputLabel>
          ID <LoginInput name="id" placeholder="아이디를 입력해주세요" />
        </InputLabel>
        <br />
        <InputLabel>
          nickName
          <LoginInput name="nickname" placeholder="닉네임을 입력해주세요" />
        </InputLabel>
        <br />
        <LoginBtn>입장</LoginBtn>
      </LoginBox>
    </LoginForm>
  );
};
export default LoginPage;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  border: 4px solid black;
  width: 400px;
  height: 200;
  margin-top: 200px;
  text-align: center;
`;

const InputLabel = styled.div`
  text-align: left;
  width: 2px;
  margin-left: 4px;
  font-size: large;
  font-weight: 600;
`;

const LoginInput = styled.input`
  width: 380px;
  height: 40px;
`;

const LoginBtn = styled.button`
  width: 400px;
  height: 36px;
`;
