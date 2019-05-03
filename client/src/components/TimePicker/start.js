import React from 'react';
import TextField from '@material-ui/core/TextField';


function TimePickers() {


  return (
    <form className="picker" noValidate>
      <TextField
        id="time"
        label="Start Time"
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

export default (TimePickers);