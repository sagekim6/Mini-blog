import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 37px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

const ContextText = styled.p`
  font-size: 14px;
`;

function CommentListItem({ comment }) {
  return (
    <Wrapper>
      <ContextText>{comment.content}</ContextText>
    </Wrapper>
  );
}

export default CommentListItem;
