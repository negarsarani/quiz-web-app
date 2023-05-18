import TextField from '@mui/material/TextField';
import { selectType } from '../type/type';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';

const Select = ({
  label,
  optionsArr,
  register,
  name,
  errors,
  labelText,
  control,
}: selectType) => {
  const options = optionsArr;

  return (
    <FormControl sx={{ width: 1 }}>
      <Box sx={{ width: 1 }}>
        <Typography sx={{ paddingBottom: '10px' }} variant="body1">
          {label}
        </Typography>
        <Controller
          name={name}
          control={control}
          rules={{
            required: 'Please enter something',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-select-currency"
              select
              // required
              {...register(name)}
              label={labelText}
              sx={{ width: 1, padding: '0px' }}
              // rules
              error={!!errors[name]}
              helperText={errors[name]?.message}
            >
              {options.map((option: any) => (
                <MenuItem
                  sx={{ paddingY: '2px' }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Box>
    </FormControl>
  );
};

export default Select;
