import type { AppProps } from 'next/app';
import { FC } from 'react';

// Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { Box } from '@mui/material';
import MainLayout from '../layouts/Main';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
