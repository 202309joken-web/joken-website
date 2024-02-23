'use client';
import Image from 'next/image';
import styled from 'styled-components';

const IntroduceSchedule = () => (
    <DivIntroduceShcedule>
      <div>
        <div>
          <h3>活動日時</h3>
          <p>火・木 16時30分〜19時30分</p>
          <h3>活動場所</h3>
          <p>70号館7072教室またはオンライン</p>
          <h3>所属人数</h3>
          <p>200人</p>
          <Image
            className="fishing"
            src="/images/fishing.svg"
            width={100}
            height={100}
            alt="釣りをしてる人"
          />
          <Image
            className="kingyo"
            src="/images/kingyo.svg"
            width={60}
            height={60}
            alt="釣りをしてる人"
          />
        </div>
      </div>
    </DivIntroduceShcedule>
  );
export default IntroduceSchedule;

const DivIntroduceShcedule = styled.div`
  display: flex;
  max-width: 1500px;
  margin: 100px auto;
  justify-content: center;

  & > div {
    width: 90%;
    display: flex;
    justify-content: center;
    border-bottom: 2px dashed #8ad3f2;
    & > div {
      margin-top: -194px;
      padding-top: 194px;
      border-left: 1px solid #8ad3f2;
      max-width: 400px;
      margin-bottom: 80px;
      position: relative;
      & h3 {
        display: inline-block;
        line-height: 100%;
        border-bottom: 10px solid #ecf0f8;
        padding: 0 20px;
        font-size: 28px;
        font-weight: normal;
      }
      & p {
        text-align: center;
        padding: 30px 0;
        font-size: 18px;
      }
      & img {
        position: absolute;
        &.fishing {
          top: -20px;
          left: -90px;
          @media screen and (max-width: 467px) {
            left: -10px;
            transform: scale(-1, 1);
          }
        }
        &.kingyo {
          bottom: -60px;
          left: -30px;
        }
      }
    }
  }
`;
