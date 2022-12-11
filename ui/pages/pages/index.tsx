import { Box, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box component="main" sx={{
      flexGrow: '1',
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center'
    }}>
      <Container maxWidth='xl'>
        <Box sx={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <Typography variant='h1'>NextJS Template</Typography>
          <Typography variant='h4'>Build with NextJS, MUI, and 🧡</Typography>
        </Box>
      </Container>
    </Box>
  );
}
