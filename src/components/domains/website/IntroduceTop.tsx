'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export const IntroduceTop = () => (
  <Box mx="auto">
    <Box
      overflow="hidden"
      display="flex"
      height={500}
      position="relative"
      maxWidth={1500}
      mx="auto"
      my={0}
      justifyContent="center"
      alignItems="center"
    >
      {/*  左上のコンテンツ */}
      <Typography
        position="absolute"
        top={0}
        left={40}
        zIndex={1}
        width={330}
        display="flex"
        flexDirection="column"
      >
        <Typography fontSize={48} component="span">
          College
        </Typography>
        <Typography fontSize={48} component="span">
          of
        </Typography>
        <Typography fontSize={48} component="span">
          Engineering
        </Typography>
      </Typography>

      {/* 背景画像（青「〜」線） */}
      <Image
        src="/images/joken_background.svg"
        width={1200}
        height={1200}
        alt="jokenのライン"
        style={{ width: '120%', height: 'auto', position: 'relative' }}
        priority={true}
      />

      {/* 動く背景 */}
      <Typography
        component="span"
        display="inline-block"
        width="120%"
        height="300%"
        position="absolute"
        top="-100%"
        left="120%"
        bgcolor="white"
        sx={{
          content: '""',
          animation: 'introduceFirstSpanBackground 2s ease',
          '@keyframes introduceFirstSpanBackground': {
            '0%': {
              transform: 'translateX(-100%) rotate(-10deg)',
            },
            '100%': {
              transform: 'translateX(0) rotate(-10deg)',
            },
          },
        }}
      />
      <Typography
        fontSize={64}
        position="absolute"
        bottom={60}
        right={40}
        fontWeight="bold"
      >
        <Typography
          color={(theme) => theme.palette.joken}
          fontSize={64}
          component="span"
          fontWeight="bold"
        >
          J
        </Typography>
        oken
      </Typography>
    </Box>
  </Box>
);
