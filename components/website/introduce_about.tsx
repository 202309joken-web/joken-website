"use client";
import Image from "next/image";
import styled from "styled-components";

const IntroduceAbout = () => {
  return (
    <DivIntroduceAbout>
      <div>
        <div>
          <h2>
            <span>Jokenへ</span>
            <span>ようこそ</span>
          </h2>
          <p>
            日本大学工学部情報研究会、通称Jokenは、コンピュータに関することなら何でもござれ❗️なサークルです‼️😆質問などはメール
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
    padding: 100px 10%;
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

      & p {
        font-size: 18px;
      }

      & img.right {
        position: absolute;
        top: -40px;
        right: -40px;
        z-index: -1;
      }
      &::before {
        content: "";
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
