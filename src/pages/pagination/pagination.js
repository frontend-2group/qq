import { styled } from "styled-components";
import { usePost } from "../../boardContext";

const Pagination = ({ pagePost }) => {
  const { post, currentPage, setCurrentPage } = usePost();

  const lastPage = Math.ceil(post.length / 5);

  const onFirstPage = () => {
    setCurrentPage(1);
  };
  const onLastPage = () => {
    setCurrentPage(lastPage);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 5;

    let startPage = Math.max(currentPage - Math.floor(maxButtonsToShow / 2), 1);
    let endPage = Math.min(startPage + maxButtonsToShow - 1, lastPage);

    if (endPage - startPage < maxButtonsToShow - 1) {
      startPage = Math.max(endPage - maxButtonsToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <PaginationBox>
      <button onClick={onFirstPage}>처음</button>

      {renderPageButtons()}

      <button onClick={onLastPage}>마지막</button>
    </PaginationBox>
  );
};
export default Pagination;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
