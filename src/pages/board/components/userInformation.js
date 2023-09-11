import { styled } from "styled-components";
import { usePost } from "../../../boardContext";

const UserInformation = () => {
  const { userData, setAddPostShow } = usePost();
  const onAddPost = () => {
    setAddPostShow((prev) => !prev);
  };
  return (
    <MyDataBox>
      <H1Box>BOARD</H1Box>
      {userData.id.length !== 0 && (
        <ProfileBox>
          <ProfileImg src={userData.profileImg} alt="img" />
          {userData.nickname}
          <br />
          <button onClick={onAddPost}>게시물 작성</button>
          {/* <button onClick={() => setAddPostShow(true)}>게시물 작성</button> */}
          <br />
          <button>게시물 조회</button>
        </ProfileBox>
      )}
    </MyDataBox>
  );
};
export default UserInformation;

const MyDataBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  width: 100%;
  height: 80px;
`;
const H1Box = styled.h1`
  display: flex;
  align-items: center;
  margin: 4px;
`;

const ProfileBox = styled.div`
  margin: 4px;
  font-size: medium;
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
