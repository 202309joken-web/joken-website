"use client";
import Image from "next/image";
import styled from "styled-components";

type Props = {
  isTextLeft: boolean;
  blogData: IntroDesc;
};

export type IntroDesc = {
  title: string;
  desc: string;
  image: string;
  alt: string;
};

const IntroduceDescription = (props: Props) => {
  const isTextLeft = props.isTextLeft;
  const textClass = isTextLeft ? "text left" : "text";
  const blogData = props.blogData;
  return (
    <DivIntroduceDescription>
      <div>
        <div className="image">
          <div>
            <span className="left_0"></span>
            <span className="left_1"></span>
            <span className="right_0"></span>
            <span className="right_1"></span>
            <span className="top"></span>
            <span className="bottom"></span>
            <Image
              src={blogData.image}
              width={2000}
              height={1600}
              alt={blogData.alt}
            />
          </div>
        </div>
        <div className={textClass}>
          <h3>{blogData.title}</h3>
          <p>{blogData.desc}</p>
        </div>
      </div>
    </DivIntroduceDescription>
  );
};

export default IntroduceDescription;

const DivIntroduceDescription = styled.div`
  max-width: 1500px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    border-bottom: 2px dashed #8ad3f2;
    padding-bottom: 100px;
    & > div {
      flex: 1;
      min-width: 320px;
      &.text {
        text-align: center;
        padding: 4%;
        &.left {
          order: -1;
        }
        & h3 {
          font-size: 34px;
          line-height: 70px;
          border-bottom: 5px solid #8ad3f2;
          margin-bottom: 30px;
        }
      }
      &.image {
        margin: 20px;
        /* background: #b46a3f; */
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
          display: flex;
          position: relative;
          & img {
            object-fit: cover;
            width: 300px;
            height: 200px;
          }
          & span {
            position: absolute;
            background: #c57033;
            content: "";
            &.left {
              &_0 {
                width: 6px;
                height: 140%;
                top: -14%;
                left: -12px;
              }
              &_1 {
                width: 6px;
                height: 140%;
                top: -22%;
                left: 0;
              }
            }
            &.right {
              &_0 {
                width: 3px;
                height: 140%;
                top: -12%;
                right: 0;
              }
              &_1 {
                width: 3px;
                height: 140%;
                top: -8%;
                right: -8px;
              }
            }
            &.top {
              width: calc(100% + 12px + 8px);
              height: 14px;
              top: -14px;
              left: -12px;
            }
            &.bottom {
              width: calc(100% + 12px + 8px);
              height: 14px;
              bottom: -14px;
              left: -12px;
            }
          }
        }
      }
    }
  }
`;
