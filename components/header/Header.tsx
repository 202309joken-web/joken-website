"use client";

import Link from "next/link";
import { styled } from "styled-components";

const Header = () => {
  const headerDatas = [
    { href: "/", title: "HOME" },
    { href: "/about", title: "サークル概要" },
    { href: "/record", title: "活動記録" },
    { href: "/sns", title: "SNS" },
  ];

  return (
    <Setposition>
      <ListHeaderList>
        <TitleLogo>
          <SpanBlue>J</SpanBlue>oken
        </TitleLogo>
        <Flexul>
          {headerDatas.map((headerData, index) => {
            return (
              <HeaderList
                href={headerData.href}
                title={headerData.title}
                key={index}
              />
            );
          })}
        </Flexul>
      </ListHeaderList>
    </Setposition>
  );
};

export default Header;

const SpanBlue = styled.span`
  color: blue;
`;

const ListHeaderList = styled.nav`
  padding: 1rem 30px 1rem 30px;
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
`;

const TabList = styled.li`
  padding-left: 40px;
  padding-right: 40px;
  list-style: none;
`;

const LinkA = styled(Link)`
  color: #000;
  font-size: 0.95rem;
  font-family:
    "Montserrat",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";

  &:hover {
    color: blue;
  }
`;

const Setposition = styled.header`
  position: fixed;
`;

const Flexul = styled.ul`
  display: flex;
`;

const TitleLogo = styled.p`
  font-size: 40px;
  color: #000;
  font-family:
    "Montserrat",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
`;

type HeaderListProps = {
  href: string;
  title: string;
};

const HeaderList = (props: HeaderListProps) => {
  const href = props.href;
  const title = props.title;
  return (
    <TabList>
      <LinkA href={href}>{title}</LinkA>
    </TabList>
  );
};
