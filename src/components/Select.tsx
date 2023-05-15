import TextField from '@mui/material/TextField';
import { selectType } from '../type/type';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const Select = ({
  label,
  optionsArr,
  register,
  showError,
  name,
  errors,
  labelText,
  field
}: selectType) => {
  const options = optionsArr;

console.log(errors);

  return (
    // <Controller
    <Box sx={{ width: 1 }}>
      <Typography sx={{ paddingBottom: '10px' }} variant="body1">
        
        {label}
      </Typography>

      <TextField
        id="outlined-select-currency"
        select
        {...field}
        sx={{ width: 1, padding: '0px', backgroundColor: '' }}
        // {...register(name, {
        //   required: {
        //     value: true,
        //   },
        // })}
        rules
        error={errors[name] ? true : false}
        helperText={errors[name] && showError}
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
    </Box>

    // <Controller
    //   name="autocompleteInput"
    //   control={control}
    //   rules={{
    //     required: 'Please enter something',
    //   }}
    //   render={({ field, fieldState }) => (
    //     <Autocomplete
    //       getOptionLabel={(option) => option}
    //       helperText={fieldState.error?.message}
    //       sx={{ width: 1 }}
    //       error={!!fieldState.error}
    //       {...field}
    //       {...register(name, {
    //         required: {
    //           message: 'select is required',
    //           value: true,
    //         },
    //       })}
    //       options={options}
    //       renderInput={(params) => (
    //         <TextField {...params} label="Autocomplete" />
    //       )}
    //       onChange={(_, data) => field.onChange(data)}
    //     />
    //   )}
    // />

    // // <div style={{ width: '100%' }}>
    // //   <label htmlFor="">{labelText}</label>
    // //   <div>
    // //     <br />
    // //     <Autocomplete
    // //       //   value={value}
    // //
    // //       //   onChange={(event: any, newValue: string | null) => {
    // //       //     // setValue(newValue);
    // //       //   }}
    // //       error={errors[name] ? true : false}
    // //       id="controllable-states-demo"
    // //       options={options}
    // //       sx={{ width: 1 }}
    // //       renderInput={(params) => <TextField {...params} label={label} />}
    // //       helperText={errors[name] && 'hiiiii'}
    // //     />
    // //   </div>
    // // </div>
  );
};

export default Select;
