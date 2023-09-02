import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "/styles/globals.scss";
import StyledComponentsRegistry from "../../lib/registry";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joken - ホームページ",
  description: "あああああああああああああああああああああああああああ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
