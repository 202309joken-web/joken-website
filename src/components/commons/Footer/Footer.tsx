'use client';

import { Box, Button, Typography } from '@mui/material';

export const Footer = () => (
  <Box display="flex" bgcolor="#444" color="white" py={3}>
    <Box pl={4}>
      <Box py={4}>
        <Typography fontStyle={'italic'} fontSize={64} lineHeight={'100%'}>
          <Typography
            fontSize={64}
            component={'span'}
            color={'joken'}
            lineHeight={'100%'}
          >
            J
          </Typography>
          oken
        </Typography>
        <Typography fontSize={18} lineHeight={'100%'}>
          college of engineering
        </Typography>
      </Box>
      <Typography variant="body2" pb={4}>
        &copy; 2023 Joken. All rights reserved.
      </Typography>
    </Box>

    <Box display={'flex'} alignItems={'center'} flex={1}>
      <Box maxWidth={300} mx={'auto'}>
        <Button href="/" color="inherit">
          HOME
        </Button>
        <Button href="/" color="inherit">
          about us
        </Button>
        <Button href="/" color="inherit">
          blog
        </Button>
        <Button href="/" color="inherit">
          contact
        </Button>
        <Button
          href="https://twitter.com/nuce_joken"
          color="inherit"
          target="_blank"
        >
          X(Twitter)
        </Button>
        <a href="">about us</a>
        <a href="">blog</a>
        <a href="">contact</a>
        <a href="https://twitter.com/nuce_joken" target="_blank">
          X(Twitter)
        </a>
      </Box>
    </Box>
  </Box>
);
