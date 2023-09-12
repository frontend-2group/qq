import { styled } from "styled-components";
import { useState } from "react";

const OnePost = ({ post }) => {
  // 이미지 페이지 네이션
  const [imgIndex, setImgIndex] = useState(0);
  const onBeforeImg = () => {
    imgIndex === 0
      ? setImgIndex(post.Post_img.length - 1)
      : setImgIndex(imgIndex - 1);
  };
  const onNextImg = () => {
    imgIndex === post.Post_img.length - 1
      ? setImgIndex(0)
      : setImgIndex(imgIndex + 1);
  };

  return (
    <PostPage>
      <PostBox>
        <PostUser>
          <ProfileImg src={post.User.profileImg} alt="img" />
          {post.User.nickName}
        </PostUser>
        <PostTitle>{post.title}</PostTitle>
        <ContentImgWrapper>
          {post.Post_img.length > 1 && <button onClick={onBeforeImg}>◀</button>}
          <ContentImg src={post.Post_img[imgIndex]} alt="img" />
          {post.Post_img.length > 1 && <button onClick={onNextImg}>▶</button>}
        </ContentImgWrapper>
        <PostContent>{post.content}</PostContent>
        <button>댓글 보기</button> {/* 여기에 댓글 로직 추가해주세요 */}
      </PostBox>
    </PostPage>
  );
};
export default OnePost;

const PostPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PostBox = styled.div`
  border: 1px solid black;
  width: 1000px;
  height: 540px;
  margin-bottom: 32px;
  margin-top: 32px;
`;

// 프로필 이미지, 닉네임, 제목
const PostUser = styled.div`
  border: 1px solid black;
  font-size: 32px;
`;
const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const PostTitle = styled.div`
  border: 1px solid black;
  text-align: center;
  height: 24px;
`;

// 이미지
const ContentImgWrapper = styled.div`
  border: 1px solid black;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentImg = styled.img`
  width: 400px;
  height: 400px;
`;

// 내용
const PostContent = styled.div``;
