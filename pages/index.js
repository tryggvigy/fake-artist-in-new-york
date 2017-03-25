import styled from "styled-components";
import Canvas from "../client/components/Canvas";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Wrapper>
    <Canvas />
  </Wrapper>
);
