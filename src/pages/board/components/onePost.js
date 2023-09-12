import { styled } from "styled-components";
import { useState } from "react";

import OneComment from "./comments/onecomment";
import AddComments from "./comments/addComments";
// import { usePost } from "../../../boardContext";
import AddPostFix from "./addPostFix";
import AddPostDel from "./addPostDel";

const OnePost = ({ post }) => {
  // 이미지 페이지 네이션
  const [imgIndex, setImgIndex] = useState(0);

  // 댓글 보기
  const [isComments, setIsComments] = useState(false);

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
  const onShowComments = () => {
    setIsComments((prev) => !prev);
  };

  return (
    <PostPage>
      <PostBox>
        <PostUser>
          <ProfileImg src={post.User.profileImg} alt="img" />

          {post.User.nickName}
          {/* 게시물 기능버튼 추가 */}
          {post.myPost && (
            <div>
              <AddPostFix postid={post.id} />
              <AddPostDel postid={post.id} />
            </div>
          )}
        </PostUser>
        <PostTitle>{post.title}</PostTitle>
        <ContentImgWrapper>
          {post.Post_img.length > 1 && <button onClick={onBeforeImg}>◀</button>}
          <ContentImg src={post.Post_img[imgIndex]} alt="img" />
          {post.Post_img.length > 1 && <button onClick={onNextImg}>▶</button>}
        </ContentImgWrapper>

        <PostContent>{post.content}</PostContent>
        <button onClick={onShowComments}>
          {isComments ? "댓글닫기" : "댓글보기"}
        </button>
        {isComments && (
          <div>
            {post.Comments.map((comment) => (
              <>
                <CommentBoxWrapper>
                  <ProfileImg
                    src={post.User.profileImg}
                    alt="img"
                    style={{ padding: "10px" }}
                  />
                  <OneComment
                    comments={comment}
                    posts={post}
                    postId={post.id}
                    commentsId={comment.id}
                  />
                </CommentBoxWrapper>
              </>
            ))}
            <AddComments postId={post.id} />
          </div>
        )}
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
  height: auto;
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

//댓글

const CommentBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
