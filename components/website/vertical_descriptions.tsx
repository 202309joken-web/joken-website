"use client";

import { styled } from "styled-components";
import VerticalDescription from "./vertical_description";

const DivVerticalDescriptions = styled.div`
  padding: 60px 0;
  background: #eee;
`;

const DivVerticalDescription_container = styled.div`
  background: #eee;
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;
`;

const VerticalDescriptions = () => {
  const arrData = [
    {
      title: "サンプルタイトル",
      description: "こんにちは今回はタイピング練習をしていこうと思います。",
      imageSrc: "/images/myself_2022-04-22.jpg",
      imageAlt: "俺や",
    },
    {
      title: "サンプルタイトル",
      description: "こんにちは今回はタイピング練習をしていこうと思います。",
      imageSrc: "/images/myself_2022-04-22.jpg",
      imageAlt: "俺や",
    },
    {
      title: "サンプルタイトル",
      description: "こんにちは今回はタイピング練習をしていこうと思います。",
      imageSrc: "/images/myself_2022-04-22.jpg",
      imageAlt: "俺や",
    },
  ];

  return (
    <DivVerticalDescriptions>
      <DivVerticalDescription_container>
        {arrData.map((data, index) => {
          return (
            <VerticalDescription
              title={data.title}
              description={data.description}
              imageSrc={data.imageSrc}
              imageAlt={data.imageAlt}
              key={index}
            />
          );
        })}
      </DivVerticalDescription_container>
    </DivVerticalDescriptions>
  );
};
export default VerticalDescriptions;
