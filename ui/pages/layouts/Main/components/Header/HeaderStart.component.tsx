import Box, { BoxProps } from '@mui/material/Box';
import { FC } from 'react';


interface HeaderStartProps extends BoxProps {

}

const HeaderStart: FC<HeaderStartProps> = (props) => {
  const { children, ...HeaderStartRest } = props;

  return <Box {...HeaderStartRest}>
    {children}
  </Box>
}

export default HeaderStart;