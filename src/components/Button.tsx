import { Buttontype } from '../type/type';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme, bg }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: bg,
  '&:hover': {
    backgroundColor: bg,
  },
}));

 function ButtonCustom({
  bg,
  children,
  onClick,
  type,
}: Buttontype) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton bg={bg} variant="contained" onClick={onClick} type={type}>
        {children}
      </ColorButton>
    </Stack>
  );
}
export default ButtonCustom