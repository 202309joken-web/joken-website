"use client";

import { styled } from "styled-components";
import VerticalDescription from "./vertical_description";

const DivVerticalDescriptions = styled.div`
  display: flex;
`;

const VerticalDescriptions = () => {
  const arr = [1, 3, 3];

  return (
    <DivVerticalDescriptions>
      {arr.map((num) => {
        return <VerticalDescription key={num} />;
      })}
    </DivVerticalDescriptions>
  );
};
export default VerticalDescriptions;
