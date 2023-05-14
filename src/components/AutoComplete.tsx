import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ListItemText from '@mui/material/ListItemText';
type AutoCompleteType = {
  label: string;
  labelText: string;
  optionsArr: string[];
};
const AutoComplete = ({ label, labelText, optionsArr }: AutoCompleteType) => {
  const options = optionsArr;
  const [value, setValue] = React.useState<string | null>(options[0]);
  return (
    
    <div style={{width:"100%"}} >
      <label htmlFor="">{labelText}</label>
      <div>

        <br />
        <Autocomplete
          value={value}
          
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 1 }}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      </div>
    </div>
  );
};

export default AutoComplete;
