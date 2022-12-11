import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { NextPageContext } from 'next/types';
import { FC } from 'react';
import Link, { NextLinkComposed } from '../components/Link.component';

interface NotFoundProps extends NextPageContext { }

const NotFoundPage: FC<NotFoundProps> = (props) => {
  return (
    <Box
      component='main'
      sx={{
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
      <Container maxWidth='xl'>
        <Box sx={{}}>
          <Typography variant='h1'>Not Found</Typography>
          <Typography variant='h4'>404</Typography>
          <Button component={NextLinkComposed} to='/' variant='contained'>
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
