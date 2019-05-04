import React, { Component, Fragment } from 'react'
import { Card, CardContent, Typography, CardActions, Button, TextField } from '@material-ui/core';

export default class Task extends Component {
  render() {
    return (
      <Fragment>
        <Card className="card">
            <CardContent>
                <Typography className="title" color="textSecondary" gutterBottom>
                    Enter an activity that you want to improve
                </Typography>
                <TextField
                    id="standard-name"
                    label="Add Title"
                    className="textField"
                    margin="normal"
                />
                <Typography className="title" color="textSecondary" gutterBottom>
                    What is your goal?
                </Typography>
                I want to do this <input type="number" min="1" max="168" step="0.5" value="5" name="hours"></input> hours per week
                <CardActions>
                    <Button>Add Goal</Button>
                </CardActions>
            </CardContent>
        </Card>
      </Fragment>
    )
  }
}
