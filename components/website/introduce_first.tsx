'use client';

import Image from 'next/image';
import { styled } from 'styled-components';

const IntroduceFirst = () => {
  const windowWidth =
    typeof window !== 'undefined' ? window.innerWidth * 1.2 : 1000;
  return (
    <DivIntroduceFirst>
      <DivWrap>
        <p>
          <span>College</span>
          <span>of</span>
          <span>Engineering</span>
        </p>
        <ImageOrigin
          src={'/images/joken_background.svg'}
          width={windowWidth}
          height={windowWidth}
          alt="jokenのライン"
        />
        <SpanBackground></SpanBackground>
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
  overflow: hidden;
  display: flex;
  height: 500px;
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  & > p {
    z-index: 1;
    position: absolute;
    &:first-child {
      top: 0;
      left: 40px;
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
      right: 40px;
      & span {
        color: var(--color_theme_joken);
      }
    }
  }
`;

const ImageOrigin = styled(Image)`
  width: 120%;
  position: relative;
`;

const SpanBackground = styled.span`
  display: inline-block;
  content: '';
  width: 120%;
  height: 300%;
  position: absolute;
  top: -100%;
  left: 120%;
  background: white;
  animation: introduceFirstSpanBackground 2s ease;
  @keyframes introduceFirstSpanBackground {
    0% {
      transform: translateX(-100%) rotate(-10deg);
    }
    100% {
      transform: translateX(0) rotate(-10deg);
    }
  }
`;
