import { usePost } from "../../boardContext";
import OnePost from "./components/onePost";
import Pagination from "../pagination/pagination";
import UserInformation from "./components/userInformation";

const BoardPage = () => {
  const { post, currentPage } = usePost();

  // 한 페이지에 표시할 게시물 수
  const showPageNum = 5;

  // currentPage 값에 따라 해당 페이지의 게시물만 가져오기
  const startIndex = (currentPage - 1) * showPageNum;
  const endIndex = startIndex + showPageNum;
  const pagePost = post.slice(startIndex, endIndex);

  return (
    <div>
      <UserInformation />
      {pagePost.map((post) => (
        <OnePost key={post.id} post={post} />
      ))}
      <Pagination pagePost={pagePost} />
    </div>
  );
};
export default BoardPage;
