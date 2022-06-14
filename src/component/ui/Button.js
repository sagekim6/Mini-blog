import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button({ title, onClick }) {
  return <StyledBtn onClick={onClick}>{title || "button"}</StyledBtn>;
}

export default Button;
