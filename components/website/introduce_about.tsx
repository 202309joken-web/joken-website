'use client';
import Image from 'next/image';
import styled from 'styled-components';

const IntroduceAbout = () => {
  return (
    <DivIntroduceAbout>
      <div>
        <div id="about">
          <h2>
            <span>Jokenへ</span>
            <span>ようこそ</span>
          </h2>
          <p>
            コンピュータを使った創作活動サークルです。プログラミング等を用いたゲーム・アプリ開発、3DCGによる作品や動画コンテンツの作成を行っています。
          </p>

          <p>
            また、定期的に開催されるプログラミングの初心者講習会やLT(Lightning
            Talk)会による各々の趣味の布教活動など、幅広く好奇心を深めることができます。
          </p>
          <Image
            className="right"
            src="/images/icon_colorful.png"
            width={100}
            height={100}
            alt="Jokenしましま"
          />
        </div>
        <Image
          className="right"
          src="/images/joken_squid.png"
          width={120}
          height={120}
          alt="Jokenしましま"
        />
      </div>
    </DivIntroduceAbout>
  );
};

export default IntroduceAbout;

const DivIntroduceAbout = styled.div`
  display: flex;
  max-width: 1500px;
  margin: 100px auto;
  justify-content: center;

  & > div {
    width: 90%;
    border-top: 6px solid #8ad3f2;
    border-bottom: 14px solid #8ad3f2;
    display: flex;
    padding: 140px 10%;
    justify-content: center;
    position: relative;

    & div {
      text-align: center;
      padding: 100px 10px;
      background: #ecf0f8;
      max-width: 800px;
      position: relative;
      & h2 {
        font-size: 46px;
        & span {
          display: inline-block;
        }
      }

      @media screen and (max-width: 467px) {
        padding: 60px 10px;
        h2 {
          font-size: 26px;
        }
      }
      /* & p {
        font-size: 18px;
      } */

      & img.right {
        position: absolute;
        top: -40px;
        right: -40px;
        z-index: -1;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: -40px;
        left: -40px;
        z-index: -1;
        max-width: 344px;
        max-height: 100%;
        width: 30vw;
        height: 30vw;
        background: #bed5e8;
      }
    }
    & img.right {
      position: absolute;
      bottom: 0%;
      right: 0;
      z-index: -1;
    }
  }
`;
