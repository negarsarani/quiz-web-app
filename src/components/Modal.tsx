/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { RESET } from '../redux/slices/data.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Data } from '../redux/slices/data.slice';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {`${totalPercent}% ${
                totalPercent < 50 ? 'Failed DO It Again' : "WOW! You're Genius"
              }`}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Link to="/">
                {' '}
                <span
                  onClick={() => {
                    dispatch(RESET());
                    handleClose();
                  }}
                >
                  play Again??
                </span>
              </Link>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
