import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) => props.height && `height: ${props.height}px`}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

function TextInput({ height, value, onChange }) {
  return <StyledTextarea onChange={onChange} height={height} value={value} />;
}

export default TextInput;
