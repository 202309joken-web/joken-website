'use client';
import styled from 'styled-components';
import Link from 'next/link';

export type BlogSummary = {
  date: string;
  category: string;
  color: string;
  title: string;
  link: string;
};

type Props = {
  blogSummaries: BlogSummary[];
};
const IntroduceBlogs = (props: Props) => {
  const blogSummaries = props.blogSummaries;

  return (
    <DivIntroduceBlogs>
      <div>
        <h2>
          <span>
            Activity <SpanBlue>L</SpanBlue>og
          </span>
          <span>
            活動<SpanBlue>日</SpanBlue>誌
          </span>
        </h2>
        <div>
          {blogSummaries.map((data, index) => {
            return (
              <DivItem $color={data.color} key={index}>
                <div>
                  <span className="date">{data.date}</span>
                  <span className="category">{data.category}</span>
                </div>
                <p>
                  <LinkA href={data.link}>{data.title}</LinkA>
                </p>
              </DivItem>
            );
          })}
        </div>
      </div>
    </DivIntroduceBlogs>
  );
};

export default IntroduceBlogs;

const DivIntroduceBlogs = styled.div`
  display: flex;
  max-width: 1500px;
  margin: 100px auto;
  justify-content: center;
  & > div {
    width: 90%;
    padding-bottom: 100px;
    & h2 {
      padding-bottom: 20px;
      & > span {
        display: block;
        font-weight: initial;
        text-align: center;
        &:first-child {
          font-size: 34px;
        }
        &:last-child {
          font-size: 28px;
        }
      }
    }
    & > div {
      border-top: 2px solid #ddd;
    }
  }
`;

// ここから、ブログリスト
const DivItem = styled.div<{ $color: string }>`
  padding: 20px 0%;
  border-bottom: 2px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    flex: 1;
  }

  & > div {
    padding-right: 20px;
    @media screen and (max-width: 467px) {
      width: 110px;
      padding-right: 0;
    }
    & > span {
      display: inline-block;
      width: 110px;
      text-align: center;
      &.category {
        background: ${(props) => props.$color};
        color: white;
      }
    }
  }
`;

const SpanBlue = styled.span`
  color: var(--color_theme_joken);
`;

const LinkA = styled(Link)`
  color: #000;
  font-family:
    'Montserrat',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';

  &:hover {
    color: var(--color_theme_joken);
  }
`;
