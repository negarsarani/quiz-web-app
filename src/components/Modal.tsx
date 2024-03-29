/* eslint-disable @typescript-eslint/prefer-as-const */
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { RESET } from '../redux/slices/data.slice';
import { useDispatch } from 'react-redux';
import { Data } from '../redux/slices/data.slice';
import { useSelector } from 'react-redux';
import ButtonCustom from './Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #EAEAEA',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
  borderRadius: '1rem'
};
export default function ModalFinish({ finished, setFinished }: any) {
  const data = useSelector(Data);

  // const navigate = useNavigate();
  const handleClose = () => {
    setFinished(false);
  };
  const totalPercent =
    (data.numberOfQuestions.NumberOfCorrect /
      data.numberOfQuestions.AllQuestion) *
    100;
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={finished}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={finished}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              variant="h6"
              component="h2"
            >
              {`${totalPercent}%    ${
                totalPercent < 50 ? '  Failed DO It Again💪' : "  WOW! You're Genius💡"
              }`}
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link to="/">
                <ButtonCustom
                  bg="#da9301"
                  children={' play Again??'}
                  type="button"
                  style=""
                  onClick={() => {
                    dispatch(RESET());
                    handleClose();
                  }}
                />
              </Link>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
