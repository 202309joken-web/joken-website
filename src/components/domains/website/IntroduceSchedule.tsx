import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const scheduleList = [
  { title: '活動日時', description: '火・木 16時30分〜19時30分' },
  { title: '活動場所', description: '70号館7072教室またはオンライン' },
  { title: '所属人数', description: '200人' },
];

export const IntroduceSchedule = () => (
  <Box display={'flex'} maxWidth={1500} mx={'auto'} justifyContent={'center'}>
    <Box
      width={'90%'}
      display={'flex'}
      justifyContent={'center'}
      borderBottom={'2px dashed #8ad3f2'}
    >
      <Box
        mt={-24}
        mb={10}
        pt={20}
        borderLeft={'1px solid #8ad3f2'}
        maxWidth={400}
        position={'relative'}
      >
        {scheduleList.map((schecule) => (
          <Box key={schecule.title}>
            <Typography
              display="inline-block"
              lineHeight="100%"
              borderBottom="10px solid #ecf0f8"
              px={4}
              component="h3"
              variant="h5"
            >
              {schecule.title}
            </Typography>
            <Typography align="center" py={4} fontSize={20}>
              {schecule.description}
            </Typography>
          </Box>
        ))}
        <Box
          position="absolute"
          top={-20}
          left={{ xs: -10, sm: -90 }}
          sx={{
            transform: { xs: 'scale(-1,1)', sm: 'none' },
          }}
          width={100}
          height={100}
        >
          <Image
            className="fishing"
            src="/images/fishing.svg"
            width={100}
            height={100}
            alt="釣りをしてる人"
          />
        </Box>
        <Box position="absolute" bottom={-60} left={-30} width={60} height={60}>
          <Image
            className="kingyo"
            src="/images/kingyo.svg"
            width={60}
            height={60}
            alt="金魚"
          />
        </Box>
      </Box>
    </Box>
  </Box>
);
