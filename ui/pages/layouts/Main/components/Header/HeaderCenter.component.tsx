import Box, { BoxProps } from '@mui/material/Box';
import { FC } from 'react';


interface HeaderCenterProps extends BoxProps {

}

const HeaderCenter: FC<HeaderCenterProps> = (props) => {
  const { children, ...HeaderCenterRest } = props;

  return <Box sx={{ flexGrow: '1', }} {...HeaderCenterRest}>
    {children}
  </Box>
}

export default HeaderCenter;