import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import { FC } from 'react';


interface HeaderProps extends AppBarProps {
  toolbarProps?: ToolbarProps
}

const Header: FC<HeaderProps> = (props) => {
  const { children, toolbarProps, ...HeaderRest } = props;
  return (
    <AppBar position='static' color='inherit' {...HeaderRest}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row' }} {...toolbarProps}>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
