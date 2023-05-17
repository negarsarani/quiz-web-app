import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Select from '../components/Select';
import { TextField } from '@mui/material';
import ButtonCustom from '../components/Button';
import { Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Inputs } from '../type/type';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { INIT } from '../redux/slices/data.slice';
import { Category, Difficulty } from '../features/selectArra';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DevTool } from '@hookform/devtools';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from '../features/schema/schema';
import { Data } from '../redux/slices/data.slice';

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      number: 5,
      category: '',
      difficulty: '',
    },
    mode: 'onChange',
    delayError: 1000,
  });
  const onSubmit = (data: Inputs) => {
    // axios(
    //   `https://opentdb.com/api.php?amount=${data.number}&category=${data.category}&difficulty=${data.difficulty}&type=multiple&token=3211ada1ac72b342e486e5ee2c12943b8f6e77c5c64710fe5f693be2a69937b4`
    // ).then((res) => dispatch(INIT(res.data.results)));
    const a = [
      {
        category: 'Animals',
        type: 'multiple',
        difficulty: 'medium',
        question: 'What is the scientific name for the &quot;Polar Bear&quot;?',
        correct_answer: 'Ursus Maritimus',
        incorrect_answers: ['Polar Bear', 'Ursus Spelaeus', 'Ursus Arctos'],
      },
      {
        category: 'Animals',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'Which animal was part of an Russian domestication experiment in 1959?',
        correct_answer: 'Foxes',
        incorrect_answers: ['Pigeons', 'Bears', 'Alligators'],
      },
      {
        category: 'Animals',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'What dog bread is one of the oldest breeds of dog and has flourished since before 400 BCE.',
        correct_answer: 'Pugs',
        incorrect_answers: ['Bulldogs', 'Boxers', 'Chihuahua'],
      },
      {
        category: 'Animals',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'What is the common term for bovine spongiform encephalopathy (BSE)?',
        correct_answer: 'Mad Cow disease',
        incorrect_answers: ['Mickle', 'Milk fever', 'Foot-and-mouth disease'],
      },
      {
        category: 'Animals',
        type: 'multiple',
        difficulty: 'medium',
        question:
          '&quot;Decapods&quot; are an order of ten-footed crustaceans.  Which of these are NOT decapods?',
        correct_answer: 'Krill',
        incorrect_answers: ['Lobsters', 'Shrimp', 'Crabs'],
      },
    ];
    dispatch(INIT(a));
    navigate('/quiz');
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
          <label htmlFor="" style={{ fontFamily: 'dana' }}>
            Number
          </label>
          <Controller
            name={'number'}
            control={control}
            rules={{ required: 'Please enter something' }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Number of questions"
                variant="outlined"
                sx={{ width: 1 }}
                type="number"
                {...register('number')}
                error={!!errors.number}
                helperText={errors.number?.message}
                {...field}
              />
            )}
          />
        </div>
        <Select
          name={'difficulty'}
          labelText={'Select Difficulty '}
          optionsArr={Difficulty}
          showError="This Difficulty is 
          required"
          label={'Difficulty'}
          errors={errors}
          control={control}
          register={register}
        />

        <Select
          name={'category'}
          labelText={'Select Category '}
          optionsArr={Category}
          label={'Category'}
          errors={errors}
          showError="This Category  is required"
          control={control}
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
        />
      </Box>
      <DevTool control={control} />
    </Container>
  );
};

export default Form;
