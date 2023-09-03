"use client";

import Link from "next/link";
import { styled } from "styled-components";

const FooterElement = styled.footer`
  display: flex;
  background: #444;
  color: white;
  padding: 20px 0;
`;

const FooterLeft = styled.div`
padding-left: 40px;
  & > div {
    padding: 40px 0;
  }

  & > p {
    padding-bottom: 40px; 
  }
`;

const FooterRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  & > div {
    max-width: 300px;
    margin: 0 auto;
    & a {
      color: white;
      padding: 20px;
      display: inline-block;
    }
  }
`;

const PJokenIcon = styled.p`
  font-style: italic;
  font-size: 64px;
  line-height:64px;
  & span {
    color: var(--color_theme_joken);
  }
`;

const PJokenSummary = styled.p`
  font-size: 18px;
  line-height: 100%;
`;

const PJokenCopyright = styled.p`
  font-size: 10px;
`

const Footer = () => {
  return (<>
    <FooterElement>
      <FooterLeft>
        <div>
          <PJokenIcon>
            <span>J</span>
            oken
          </PJokenIcon>
          <PJokenSummary>college of engineering</PJokenSummary>
        </div>
        <PJokenCopyright>&copy; 2023 Joken. All rights reserved.</PJokenCopyright>
      </FooterLeft>

      <FooterRight>
        <div>
          <Link href="/">HOME</Link>
          <a href="">about us</a>
          <a href="">blog</a>
          <a href="">contact</a>
          <a href="https://twitter.com/nuce_joken" target="_blank">X(Twitter)</a>
        </div>
      </FooterRight>
    </FooterElement>
  </>);
}


export default Footer

// const DivLeft 