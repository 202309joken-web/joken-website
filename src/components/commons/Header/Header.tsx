'use client';

import HamMenu from '@/components/commons/Header/HamMenu';
import { Box, Button, Typography, styled } from '@mui/material';

export interface HeaderData {
  href: string;
  title: string;
}

const headerDatas: HeaderData[] = [
  { href: '/', title: 'HOME' },
  { href: '/#about', title: 'サークル概要' },
  { href: '/record', title: '活動記録' },
  { href: '/sns', title: 'SNS' },
];

export const Header = () => (
  <Box
    height={'var(--len__header__height)'}
    position={'fixed'}
    display={'flex'}
    justifyContent={'center'}
    zIndex={999}
    width={'100%'}
  >
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      width={'100%'}
      maxWidth={1380}
      bgcolor={'white'}
    >
      {/* 左側のJokenロゴボタン */}
      <Typography component={Button} href="/">
        <TypographyLogo color="joken">J</TypographyLogo>
        <TypographyLogo color="text.primary">oken</TypographyLogo>
      </Typography>

      <Box
        component={'nav'}
        display={{ xs: 'none', sm: 'flex' }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {headerDatas.map((headerData, index) => (
          <Typography
            p={2}
            component={Button}
            href={headerData.href}
            key={index}
            color={'text.primary'}
          >
            {headerData.title}
          </Typography>
        ))}
      </Box>
      <HamMenu headerData={headerDatas} />
    </Box>
  </Box>
);

/** 左側 ロゴ部分の共通テキストパーツ */
const TypographyLogo = styled(Typography)(() => ({
  fontSize: 40,
  fontFamily: `
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
  'Noto Color Emoji'
  `,
  fontWeight: 'bold',
  fontStyle: 'italic',
  textTransform: 'none',
}));
