import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AutoComplete from '../components/AutoComplete';
import { TextField } from '@mui/material';
import ButtonCustom from '../components/Button';
import { Container } from '@mui/material';
const Form = () => {
  return (
    <Container
      maxWidth="xs"
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
      <Box
        component="span"
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
        <Typography variant="h3" component="h2" fontWeight={'bold'}>
          Setup Quiz
        </Typography>
        <div style={{ width: '100%', gap: '10px' }} className={'flex-col'}>
          <label htmlFor="">Number of Questions</label>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </div>
        <AutoComplete
          labelText={'Select Difficulty '}
          optionsArr={['Easy', 'Medium', 'Hard']}
          label={'Difficulty'}
        />
        <AutoComplete
          labelText={'Select Category '}
          optionsArr={['Any Category', 'Art', 'Sports', 'Animals']}
          label={'Category'}
        />
        <ButtonCustom
          bg="#da9301"
          children={'Start'}
          onClick={() => {
            ('');
          }}
          type="submit"
          width="100%"
          // sx={{ width:1}}
        />
      </Box>
    </Container>
  );
};

export default Form;
