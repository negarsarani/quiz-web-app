import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ListButton from '../components/ListButton';
import ButtonCustom from '../components/Button';
import { useState } from 'react';
import { Data } from '../redux/slices/data.slice';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { NEXT, ChangeAnswer } from '../redux/slices/data.slice';
import ModalFinish from '../components/Modal';
const QuestionPage = () => {
  const data = useSelector(Data);
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(false);
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        px: '1.5rem',

        '@media (min-width:600px)': {
          px: '2.5rem',
        },
        '@media (min-width:960px)': {
          px: '3rem',
        },
      }}
    >
      {finished && (
        <ModalFinish finished={finished} setFinished={setFinished} />
      )}
      <Box
        component="form"
        // onSubmit={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: '#ffffff',
          width: '100%',
          height: 'fit',
          p: '1.5rem',
          '@media (min-width:600px)': {
            p: '2.5rem',
          },
          '@media (min-width:960px)': {
            p: '3rem',
          },
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.8rem',
        }}
      >
        {data.Alldata?.length > 0 ? (
          <>
            <Typography variant="body1" sx={{ color: '#49f956' }}>
              {`Correnct Answers ${data.numberOfQuestions.NumberOfCorrect} / ${data.numberOfQuestions.AllQuestion}`}
            </Typography>
            <ListButton
              question={data.currentData.question}
              item={[
                data.currentData.correct_answer,
                ...data.currentData.incorrect_answers,
              ]}
              // setChooseVal={setChooseVal}
              // chooseVal={chooseVal}
            />
            <ButtonCustom
              type="button"
              width="50%"
              bg="#ffab00"
              children={'Next Questions'}
              onClick={() => {
                if (data.numberOfQuestions.AllQuestion - 1 === data.question) {
                  setFinished(true);
                } else {
                  if (data.correctAnswer === -1) {
                    ('');
                  } else {
                    dispatch(NEXT({ flag: true }));
                  }
                }

                dispatch(ChangeAnswer(-1));
              }}
            />
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            <Typography>please Wait</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default QuestionPage;
