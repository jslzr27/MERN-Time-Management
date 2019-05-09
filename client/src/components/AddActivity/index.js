import React from "react";
import "./style.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TimePickers from "../TimePicker/start";
import TimePickers2 from "../TimePicker/end";



const AddActivity = () => {
    return (
    <Card className="card">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          Enter your Activity
        </Typography>
        <TextField
          id="standard-name"
          label="Add Title"
          className="textField"
          margin="normal"
        />
        <Typography>
        <div className="pickers"><i class="far fa-clock"></i> <TimePickers /> <TimePickers2 /></div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="primary">Save</Button>
      </CardActions>
    </Card>
    )
}

export default AddActivity;