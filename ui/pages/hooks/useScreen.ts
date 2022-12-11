import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

/**
 * Enum of screen sized
 */
export enum ScreenSizeEnum {
  isMobile = 'isMobile',
  isTablet = 'isTablet',
  isLaptop = 'isLaptop',
  isDesktop = 'isDesktop'
}

/**
 * State for screen sizes
 */
interface ScreenSize {
  /** Screen is Mobile (screen < sm) */
  [ScreenSizeEnum.isMobile]: boolean;
  /** Screen is Tablet (sm < screen < md) */
  [ScreenSizeEnum.isTablet]: boolean;
  /** Screen is Laptop (md < screen < xl) */
  [ScreenSizeEnum.isLaptop]: boolean;
  /** Screen is Desktop ( xl < screen) */
  [ScreenSizeEnum.isDesktop]: boolean;
}

function useScreen(): ScreenSize {
  const theme = useTheme();

  const screens = {
    [ScreenSizeEnum.isMobile]: useMediaQuery(theme.breakpoints.down('sm')),
    [ScreenSizeEnum.isTablet]: useMediaQuery(
      theme.breakpoints.between('sm', 'md')
    ),
    [ScreenSizeEnum.isLaptop]: useMediaQuery(
      theme.breakpoints.between('md', 'xl')
    ),
    [ScreenSizeEnum.isDesktop]: useMediaQuery(theme.breakpoints.up('xl'))
  } as ScreenSize;

  return screens;
}

export default useScreen;
