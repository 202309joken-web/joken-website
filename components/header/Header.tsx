"use client";

import Link from "next/link";
import { styled } from "styled-components";
import HamMenu from "./ham_menu";

export type HeaderData = {
  href: string;
  title: string;
};

const Header = () => {
  const headerDatas: HeaderData[] = [
    { href: "/", title: "HOME" },
    { href: "/#about", title: "サークル概要" },
    { href: "/record", title: "活動記録" },
    { href: "/sns", title: "SNS" },
  ];

  return (
    <HeaderElement>
      <div>
        <LinkLogo href="/">
          <i>
            <b>
              <SpanBlue>J</SpanBlue>oken
            </b>
          </i>
        </LinkLogo>
        <ListHeaderList>
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
          <HamMenu headerData={headerDatas} />
        </ListHeaderList>
      </div>
    </HeaderElement>
  );
};

export default Header;

// <header>要素
const HeaderElement = styled.header`
  height: var(--len__header__height);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1380px;
    background: white;
  }
`;

// Jokenロゴ要素（リンク）
const LinkLogo = styled(Link)`
  font-size: 40px;
  line-height: var(--len__header__height);
  height: var(--len__header__height);
  padding: 0 20px;
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
  color: black;
  &:hover {
    opacity: 0.5;
  }
`;

// 青
const SpanBlue = styled.span`
  color: var(--color_theme_joken);
`;

const ListHeaderList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TabList = styled.li`
  list-style: none;
`;

const LinkA = styled(Link)`
  padding: 0 30px;
  color: #000;
  font-size: 1.3rem;
  display: inline-block;
  line-height: var(--len__header__height);
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
    color: var(--color_theme_joken);
  }
`;

const Flexul = styled.ul`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
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
