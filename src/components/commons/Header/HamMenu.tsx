'use client';
import React, { useState } from 'react';
import { HeaderData } from '@/components/commons/Header/Header';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Slide,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

interface HamMenuProps {
  headerData: HeaderData[];
}
export const HamMenu: React.FC<HamMenuProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const headerData = props.headerData;
  return (
    <>
      {/* ハンバーガーメニュー */}
      <Typography
        component={Button}
        position="relative"
        width="var(--len__header__height)"
        height="var(--len__header__height)"
        onClick={handleClick}
        color={'inherit'}
        display={{ xs: 'inline-flex', sm: 'none' }}
      >
        <Typography
          bgcolor="black"
          component={'span'}
          width="70%"
          height={2}
          position="relative"
          sx={{
            transition: '0.3s',
            transform: isOpen ? 'rotate(45deg)' : 'none',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: 2,
              background: 'black',
              transition: '0.3s',
              left: 0,
              transformOrigin: 'center center',
            },
            '&::before': {
              top: isOpen ? 0 : -16,
              transform: isOpen ? 'rotate(90deg)' : 'none',
            },
            '&::after': {
              top: isOpen ? 0 : 16,
            },
          }}
        />
      </Typography>

      {/* ダイアログメニュー（ハンバーガーメニュー起動時有効） */}
      <Dialog
        TransitionComponent={Transition}
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle align="center" fontSize={30}>
          Joken
        </DialogTitle>
        <Box bgcolor={'white'} maxWidth={400}>
          {headerData.map((data) => (
            <Typography
              key={data.href + data.title}
              component={Button}
              fullWidth
              href={data.href}
              color="text.primary"
              p={2}
              onClick={handleClose}
            >
              {data.title}
            </Typography>
          ))}
        </Box>
      </Dialog>
    </>
  );
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});
