import Button from '@mui/material/Button';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { FC, ReactElement, ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ScreenSizeEnum, useScreen } from '../../../../hooks';
import Box from '@mui/material/Box';

export enum SidebarStateEnum {
  Opened = 'Opened',
  Closed = 'Closed'
}

export type SidebarState = keyof typeof SidebarStateEnum;

type DynamicScreenWidth = {
  [ScreenSizeEnum.isMobile]?: string | number;
  [ScreenSizeEnum.isTablet]?: string | number;
  [ScreenSizeEnum.isLaptop]?: string | number;
  [ScreenSizeEnum.isDesktop]?: string | number;
};

interface SidebarProps extends Omit<DrawerProps, 'onClose' | 'open'> {
  drawerWidth?: string | number | DynamicScreenWidth;
  drawerHeader?: ReactNode | ReactElement;
  drawerState: SidebarState;
  onClose: (event: any) => void;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const {
    drawerWidth = {
      [ScreenSizeEnum.isMobile]: '100vw',
      [ScreenSizeEnum.isTablet]: '256px',
      [ScreenSizeEnum.isLaptop]: '256px',
      [ScreenSizeEnum.isDesktop]: '256px'
    } as DynamicScreenWidth,
    drawerHeader,
    drawerState,
    anchor = 'right',
    children,
    PaperProps,
    onClose = () => null,
    ...rest
  } = props;

  const screens = useScreen();

  /**
   * Gets the drawer width based on the drawerWidth property
   * @returns width of drawer
   */
  const getDrawerWidth = () => {
    if (
      drawerWidth !== 'string' &&
      drawerWidth !== 'number' &&
      typeof drawerWidth === 'object'
    ) {
      if (screens.isMobile) {
        return (drawerWidth as DynamicScreenWidth)[ScreenSizeEnum.isMobile];
      }

      if (screens.isTablet) {
        return (drawerWidth as DynamicScreenWidth)[ScreenSizeEnum.isTablet];
      }

      if (screens.isLaptop) {
        return (drawerWidth as DynamicScreenWidth)[ScreenSizeEnum.isLaptop];
      }

      if (screens.isDesktop) {
        return (drawerWidth as DynamicScreenWidth)[ScreenSizeEnum.isDesktop];
      }
    }

    return drawerWidth;
  };

  /**
   * Determines if the sidebar is open or closed based on the drawerState
   * @returns true: sidebar is open, false: sidebar is closed
   */
  const getDrawerState = () => {
    if (drawerState === SidebarStateEnum.Opened) {
      return true;
    }

    return false;
  };

  const handleOnClose = (event: any) => {
    onClose(event);
  };

  return (
    <Drawer
      open={getDrawerState()}
      anchor={anchor}
      PaperProps={{
        sx: {
          width: getDrawerWidth()
        }
      }}
      onClose={handleOnClose}
      {...rest}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}>
        <Box
          sx={{
            flexGrow: '1'
          }}>
          {drawerHeader}
        </Box>

        <Button onClick={handleOnClose}>
          <CloseIcon />
        </Button>
      </Toolbar>
      {children}
    </Drawer>
  );
};

export default Sidebar;
