import React from 'react';
import TextField from '@material-ui/core/TextField';


function TimePickers2() {


  return (
    <form className="picker" noValidate>
      <TextField
        id="time"
        label="End Time"
        type="time"
        defaultValue=""
        className=""
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}

export default (TimePickers2);