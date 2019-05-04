import React, { Component, Fragment } from 'react';
import { Card, CardContent, Typography, CardActions, Button, TextField } from '@material-ui/core';


export default class MyTask extends Component {
  render() {
    return (
    <Fragment>
        <Card className="card">
            <CardContent>
                <Typography className="title">
                    My Task
                </Typography>
                <Typography className="title">
                    Make an app
                </Typography>
                <CardActions>
                    <Button><i class="fas fa-edit"></i></Button>
                    <Button><i class="fas fa-trash-alt"></i></Button>
                </CardActions>
            </CardContent>
        </Card>
      </Fragment>
    )
  }
}
