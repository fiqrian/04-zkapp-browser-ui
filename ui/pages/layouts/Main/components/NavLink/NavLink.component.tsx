import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import { NextLinkComposed, NextLinkComposedProps } from '../../../../components/Link.component';


interface NavLinkProps extends NextLinkComposedProps, Pick<ButtonProps, "startIcon" | "endIcon"> {
}

const NavLink: FC<NavLinkProps> = (props) => {
  const { children, to, startIcon, endIcon, target } = props;

  return (
    <Button
      component={NextLinkComposed}
      to={to}
      startIcon={startIcon}
      endIcon={endIcon}
      target={target}
    >
      {children}
    </Button>
  );
};

export default NavLink;
