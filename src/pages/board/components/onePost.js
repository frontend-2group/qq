import { styled } from "styled-components";
import { useState } from "react";

import OneComment from "./comments/onecomment";
import AddComments from "./comments/addComments";
// import { usePost } from "../../../boardContext";
import AddPostFix from "./addPostFix";
import AddPostDel from "./addPostDel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faker } from "@faker-js/faker";

const OnePost = ({ post }) => {
  // 이미지 페이지 네이션
  const [imgIndex, setImgIndex] = useState(0);

  // 댓글 보기
  const [isComments, setIsComments] = useState(false);

  // 좋아요
  const [isLiked, setIsLiked] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);

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
  const onLikeBtn = () => {
    // e.preventDefault();
    setIsLiked((prev) => !prev);
    isLiked ? setLikeNumber(likeNumber - 1) : setLikeNumber(likeNumber + 1);
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

        {/* 댓글 부분 */}
        <CommentsWrapper>
          <FontAwesomeIcon
            icon={faComment}
            onClick={onShowComments}
            style={{ fontSize: "25px", padding: "5px" }}
          />
          <FontAwesomeIcon
            onClick={onLikeBtn}
            icon={faHeart}
            style={{
              color: isLiked ? "red" : "black",
              fontSize: "25px",
              padding: "5px",
            }}
          />
          <p>좋아요{likeNumber}개</p>
          {isComments && (
            <div>
              {post.Comments.map((comment) => (
                <>
                  <CommentBoxWrapper>
                    {comment.myComment ? (
                      <>
                        <OneComment
                          comments={comment}
                          posts={post}
                          postId={post.id}
                          commentsId={comment.id}
                        />
                      </>
                    ) : (
                      <>
                        <ProfileImg
                          src={Array(Math.floor(Math.random() * 3) + 1)
                            .fill()
                            .map(() => faker.image.url())}
                          alt="img"
                          style={{ padding: "10px" }}
                        />
                        <p>{comment.content}</p>
                      </>
                    )}
                  </CommentBoxWrapper>
                </>
              ))}
              <AddComments postId={post.id} />
            </div>
          )}
        </CommentsWrapper>
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

const CommentsWrapper = styled.div`
  padding: 10px;
`;
