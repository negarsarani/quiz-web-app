import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AutoCompleteType } from '../type/type';
import { useForm, Controller } from 'react-hook-form';
const AutoComplete = ({
  label,
  labelText,
  optionsArr,
  errors,
  name,
  register,
  control,
}: AutoCompleteType) => {
  const options = optionsArr;
  //   const [errors
  console.log(errors);

  return (
    <Controller
      name="autocompleteInput"
      control={control}
      rules={{
        required: 'Please enter something',
      }}
      render={({ field, fieldState }) => (
        <Autocomplete
          getOptionLabel={(option) => option}
          helperText={fieldState.error?.message}
          sx={{ width: 1 }}
          error={!!fieldState.error}
          {...field}
          {...register(name, {
            required: {
              message: 'select is required',
              value: true,
            },
          })}
          options={options}
          renderInput={(params) => (
            <TextField {...params} label="Autocomplete" />
          )}
          onChange={(_, data) => field.onChange(data)}
        />
      )}
    />

    // <div style={{ width: '100%' }}>
    //   <label htmlFor="">{labelText}</label>
    //   <div>
    //     <br />
    //     <Autocomplete
    //       //   value={value}
    //
    //       //   onChange={(event: any, newValue: string | null) => {
    //       //     // setValue(newValue);
    //       //   }}
    //       error={errors[name] ? true : false}
    //       id="controllable-states-demo"
    //       options={options}
    //       sx={{ width: 1 }}
    //       renderInput={(params) => <TextField {...params} label={label} />}
    //       helperText={errors[name] && 'hiiiii'}
    //     />
    //   </div>
    // </div>
  );
};

export default AutoComplete;
