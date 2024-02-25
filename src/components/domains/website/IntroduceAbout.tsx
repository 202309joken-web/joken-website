import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';

export const IntroduceAbout = () => (
  <Box display="flex" maxWidth={1500} my={12} mx="auto" justifyContent="center">
    <Box
      width={'90%'}
      borderTop={'6px solid #8ad3f2'}
      borderBottom={'14px solid #8ad3f2'}
      display={'flex'}
      py={18}
      px={'10%'}
      justifyContent={'center'}
      position={'relative'}
      zIndex={1}
    >
      <Paper
        component={Box}
        id="about"
        textAlign={'center'}
        py={{ xs: 5, sm: 12 }}
        px={{ xs: 1, sm: 2 }}
        maxWidth={800}
        position={'relative'}
        sx={{
          bgcolor: '#ecf0f8',
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: -40,
            left: -40,
            zIndex: -1,
            maxWidth: '344px',
            maxHeight: '100%',
            width: '30vw',
            height: '30vw',
            background: '#bed5e8',
          },
        }}
      >
        <Typography component={'h2'}>
          <Typography component={'span'} fontSize={{ xs: 26, sm: 48 }}>
            Jokenへ
          </Typography>
          <Typography component={'span'} fontSize={{ xs: 26, sm: 48 }}>
            ようこそ
          </Typography>
        </Typography>
        <p>
          コンピュータを使った創作活動サークルです。プログラミング等を用いたゲーム・アプリ開発、3DCGによる作品や動画コンテンツの作成を行っています。
        </p>

        <p>
          また、定期的に開催されるプログラミングの初心者講習会やLT(Lightning
          Talk)会による各々の趣味の布教活動など、幅広く好奇心を深めることができます。
        </p>
        <Image
          className="right"
          src="/images/icon_colorful.png"
          width={100}
          height={100}
          alt="Jokenしましま"
          style={{ position: 'absolute', top: -40, right: -40, zIndex: -1 }}
        />
      </Paper>
      <Image
        className="right"
        src="/images/joken_squid.png"
        width={120}
        height={120}
        alt="Jokenイカ"
        style={{ position: 'absolute', bottom: 0, right: 0, zIndex: -1 }}
      />
    </Box>
  </Box>
);
