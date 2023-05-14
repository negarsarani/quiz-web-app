import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AutoComplete from '../components/AutoComplete';
import { TextField } from '@mui/material';
import ButtonCustom from '../components/Button';

const Form = () => {
  return (
    <Box component="span">
      <Typography variant="h3" component="h2">
        h1. Heading
      </Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
      <ButtonCustom/>
    </Box>
  );
};

export default Form;
