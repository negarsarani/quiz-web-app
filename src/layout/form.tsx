import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Select from '../components/Select';
import { TextField } from '@mui/material';
import ButtonCustom from '../components/Button';
import { Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Inputs } from '../type/type';
import { useSelector, useDispatch } from 'react-redux';
import { submit } from '../redux/slices/Form.slice';
const Category = [
  {
    value: '',
    label: 'Category',
  },
  {
    value: 'public',
    label: 'public Information',
  },
  {
    value: 'literature',
    label: 'literature',
  },
  {
    value: 'country',
    label: 'country',
  },
];
const Difficulty = [
  {
    value: '',
    label: 'Difficulty',
  },
  {
    value: 'easy',
    label: 'easy',
  },
  {
    value: 'medium',
    label: 'medium',
  },
  {
    value: 'hard',
    label: 'hard',
  },
];
const Form = () => {
  const FormValue = useSelector((state: any) => state.counter.value);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    delayError: 1000,
  });
  const onSubmit = (data: Inputs) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };
  return (
    <Container
      maxWidth="sm"
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
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
            error={errors.number ? true : false}
            label="Outlined"
            variant="outlined"
            sx={{ width: 1 }}
            type="number"
            {...register('number', { required: true })}
            helperText={errors.number && 'number is required'}
          />
        </div>
        <Select
          labelText={'Select Difficulty '}
          optionsArr={Difficulty}
          showError="select Difficulty "
          label={'Difficulty'}
          errors={errors}
          name={'difficulty'}
          register={register}
        />
        <Select
          labelText={'Select Category '}
          optionsArr={Category}
          label={'Category'}
          errors={errors}
          name={'category'}
          showError="select Category "
          register={register}
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
