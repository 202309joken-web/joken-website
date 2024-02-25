import { Box, Button, Chip, Divider, Typography } from '@mui/material';

export interface BlogSummary {
  date: string;
  category: string;
  color: string;
  title: string;
  link: string;
}

interface Props {
  blogSummaries: BlogSummary[];
}

export const IntroduceBlogs = (props: Props) => (
  <Box maxWidth={1500} my={4} mx="auto" display="flex" justifyContent="center">
    <Box width={'90%'} pb={12}>
      <Typography pb={2} component={'h2'} variant="h4" align="center">
        <Typography component={'span'} display={'block'} fontSize={34}>
          Activity{' '}
          <Typography component="span" color="joken" fontSize={34}>
            L
          </Typography>
          og
        </Typography>
        <Typography component={'span'} display={'block'} fontSize={28}>
          活動
          <Typography component="span" color="joken" fontSize={28}>
            日
          </Typography>
          誌
        </Typography>
      </Typography>
      <Divider />
      <Box>
        {props.blogSummaries.map((data, index) => (
          <Box
            my={3}
            key={index}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box
              width={{ xs: 110, sm: 'auto' }}
              textAlign={'center'}
              pr={{ xs: 0, sm: 2 }}
            >
              <Typography
                display={'inline-block'}
                component={'span'}
                align="center"
                width={110}
              >
                {data.date}
              </Typography>
              <Chip
                color="primary"
                sx={{ bgcolor: data.color }}
                label={data.category}
              />
            </Box>
            <Button
              href={data.link}
              color="inherit"
              sx={{ flex: 1, justifyContent: 'left' }}
            >
              {data.title}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);
