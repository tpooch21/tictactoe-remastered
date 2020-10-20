import styled from "styled-components";

const PlayAgainButton = styled.button`
  height: 50px;
  width: 100px;
  font-family: inherit;
  background-color: #ccc;
  border: 2px solid red;
  color: red;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
  margin-bottom: 10px;
  font-weight: 700;
`;

export default PlayAgainButton;
