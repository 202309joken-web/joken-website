'use client';
import { useState } from 'react';
import { HeaderData } from './Header';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {
  headerData: HeaderData[];
};
const HamMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBackClick = () => {
    setIsOpen(false);
  };
  const headerData = props.headerData;
  return (
    <>
      <DivHamMenu $isOpen={isOpen} onClick={handleClick}>
        <span></span>
      </DivHamMenu>
      <DivHeaderMenu $isOpen={isOpen} onClick={handleBackClick}>
        <ul onClick={(e) => e.stopPropagation()}>
          {headerData.map((data, index) => {
            return (
              <li key={index}>
                <LinkA href={data.href}>{data.title}</LinkA>
              </li>
            );
          })}
        </ul>
      </DivHeaderMenu>
    </>
  );
};

export default HamMenu;

const DivHamMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
  width: var(--len__header__height);
  height: var(--len__header__height);

  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #00000022;
  }
  & span {
    width: 70%;
    height: 2px;
    background: black;
    position: relative;
    transition: 0.3s;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: black;
      transition: 0.3s;
      left: 0;
      transform-origin: center center;
    }
    &::before {
      top: -16px;
    }
    &::after {
      top: 16px;
    }
    ${(props) =>
      props.$isOpen
        ? 'transform: rotate(45deg);\
    &::before {transform: rotate(90deg); top: 0}\
    &::after {top: 0}'
        : ''}
  }
`;

const DivHeaderMenu = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  position: fixed;
  top: var(--len__header__height);
  right: 0;
  width: 100%;
  height: calc(100% - var(--len__header__height));
  background: rgba(0, 0, 0, 0.3);
  justify-content: right;

  & ul {
    background: white;
    max-width: 400px;
    list-style: none;
  }
`;

const LinkA = styled(Link)`
  padding: 0 30px;
  color: #000;
  font-size: 1.3rem;
  display: inline-block;
  line-height: var(--len__header__height);
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
