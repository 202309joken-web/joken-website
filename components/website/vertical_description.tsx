import { styled } from "styled-components";

const DivVerticalDescription = styled.div`
  text-align: center;
`;

const VerticalDescription = () => {
  return (
    <DivVerticalDescription>
      <h3>こんにちは</h3>
      <p>今回はタイピング練習をしていこうと思います。</p>
    </DivVerticalDescription>
  );
};
export default VerticalDescription;
