import Box, { BoxProps } from '@mui/material/Box';
import { FC } from 'react';


interface HeaderEndProps extends BoxProps {

}

const HeaderEnd: FC<HeaderEndProps> = (props) => {
  const { children, ...HeaderEndRest } = props;

  return <Box {...HeaderEndRest}>
    {children}
  </Box>
}

export default HeaderEnd;