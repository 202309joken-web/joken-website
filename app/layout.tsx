import type { Metadata } from 'next';
// import { Inter } from "next/font/google";
import '/styles/globals.scss';
import StyledComponentsRegistry from '../lib/registry';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Joken - ホームページ',
  description:
    '日本大学工学部 情報研究会Jokenはコンピュータを使った創作活動サークルです。プログラミング等を用いたゲーム・アプリ開発、3DCGによる作品や動画コンテンツ作成、プログラミングの初心者講習会やLT(Lightning Talk)会による各々の趣味の布教活動など。',
  keywords: '日本大学工学部 情報研究会,プログラミングサークル',
  openGraph: {
    type: 'website',
    url: 'https://joken-website.vercel.app/',
    title: 'Joken - ホームページ',
    description:
      '日本大学工学部 情報研究会Jokenはコンピュータを使った創作活動サークルです。プログラミング等を用いたゲーム・アプリ開発、3DCGによる作品や動画コンテンツ作成。',
    siteName: 'Joken - ホームページ',
    images: [
      {
        url: 'https://joken-website.vercel.app/images/icatch.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nuce_joken',
    title: 'Joken - ホームページ',
    images: 'https://joken-website.vercel.app/images/icatch.png',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );

export default RootLayout;
