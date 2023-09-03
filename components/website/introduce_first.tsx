"use client";

import Image from "next/image";
import { styled } from "styled-components";

const IntroduceFirst = () => {
  const windowWidth =
    typeof window !== "undefined" ? window.innerWidth * 1.2 : 1000;
  return (
    <DivIntroduceFirst>
      <DivWrap>
        <p>
          <span>College</span>
          <span>of</span>
          <span>Engineering</span>
        </p>
        <ImageOrigin
          src={"/images/joken_background.svg"}
          width={windowWidth}
          height={windowWidth}
          alt="jokenのライン"
        />
        <p>
          <span>J</span>
          oken
        </p>
      </DivWrap>
    </DivIntroduceFirst>
  );
};

export default IntroduceFirst;

const DivIntroduceFirst = styled.div`
  margin: 0 auto;
  /* background: #eee; */
`;
const DivWrap = styled.div`
  display: flex;
  height: 500px;
  position: relative;
  margin: 0 40px;
  justify-content: center;
  align-items: center;
  & > p {
    position: absolute;
    &:first-child {
      top: 0;
      left: 0;
      font-size: 48px;
      width: 330px;
      display: flex;
      flex-flow: column;
      & span {
        display: inline-block;
      }
    }
    &:last-child {
      font-size: 64px;
      font-weight: bold;
      bottom: 60px;
      right: 0;
      & span {
        color: var(--color_theme_joken);
      }
    }
  }
`;

const ImageOrigin = styled(Image)`
  width: 120%;
`;
