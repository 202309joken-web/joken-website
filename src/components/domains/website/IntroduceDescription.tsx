'use client';

import { Box, Divider, Typography, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IntroduceDescriptionProps {
  isTextLeft: boolean;
  blogData: IntroDescription;
}

export interface IntroDescription {
  title: string;
  desc: string;
  image: string;
  alt: string;
}

export const IntroduceDescription: React.FC<IntroduceDescriptionProps> = (
  props
) => (
  <Box maxWidth={1500} my={4} mx="auto" display="flex" justifyContent="center">
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      width="90%"
      borderBottom="2px dashed #8ad3f2"
      py={10}
    >
      <Box
        m={5}
        display="flex"
        justifyContent={'center'}
        alignItems="center"
        flex={1}
        minWidth={320}
      >
        <Box display="flex" position="relative" flex={1} minWidth={320}>
          <TypographyLine width={6} height="140%" top={'-14%'} left={-12} />
          <TypographyLine width={6} height="140%" top={'-22%'} left={0} />
          <TypographyLine width={3} height="140%" top={'-12%'} right={0} />
          <TypographyLine width={3} height="140%" top={'-8%'} right={-8} />
          <TypographyLine
            width={'calc(100% + 12px + 8px)'}
            height={14}
            top={-14}
            left={-12}
            right={-8}
          />
          <TypographyLine
            width={'calc(100% + 12px + 8px)'}
            height={14}
            bottom={-14}
            left={-12}
            right={-8}
          />
          <Image
            src={props.blogData.image}
            width={300}
            height={200}
            alt={props.blogData.alt}
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Box>
      <Box order={props.isTextLeft ? -1 : 0} flex={1} minWidth={320}>
        <Typography
          component="h3"
          variant="h4"
          fontWeight={'bold'}
          py={1}
          mb={{ xs: 2, sm: 0 }}
          align="center"
        >
          {props.blogData.title}
        </Typography>
        <Divider
          sx={{ borderColor: (theme) => theme.palette.joken, borderWidth: 5 }}
        />
        <Typography p={2}>{props.blogData.desc}</Typography>
      </Box>
    </Box>
  </Box>
);

/** 茶色線の共通パーツ */
const TypographyLine = styled(Typography)(() => ({
  position: 'absolute',
  background: '#c57033',
  content: '""',
}));
