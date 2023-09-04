"use client";

import { styled } from "styled-components";
import ImageSlider from "./ImageSlider";

const IntroduceSecond = () => {
  const images = [
    "/images/myself_2022-04-22.jpg",
    "/images/joken_background.svg",
    "/vercel.svg",
  ];
  return (
    <DivMain>
      <DivWrap>
        <DivWrapSummary>
          <div>
            <h2>Jokenとは</h2>
            <p>
              ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </p>
          </div>
        </DivWrapSummary>
        <DivWrapImages>
          <ImageSlider images={images} />
        </DivWrapImages>
      </DivWrap>
    </DivMain>
  );
};
export default IntroduceSecond;

const DivMain = styled.div`
  padding: 30px 0;
  background: #fdf9f9;
`;

const DivWrap = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const DivWrapSummary = styled.div`
  width: 100%;
  border-bottom: 2px solid #eee;
  border-radius: 1px;

  & div {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 60px;

    & h2 {
      line-height: 60px;
    }
  }
`;

const DivWrapImages = styled.div`
  & img {
  }
`;
