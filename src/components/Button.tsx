import { Buttontype } from '../type/type';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme, bg , width }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: bg,
  '&:hover': {
    backgroundColor: bg,
  },
  width:width
}));

 function ButtonCustom({
  bg,
  children,
  onClick,
  type,
  width
}: Buttontype) {
  return (
  
      <ColorButton bg={bg} width={width} variant="contained" onClick={onClick} type={type}>
        {children}
      </ColorButton>
  );
}
export default ButtonCustom