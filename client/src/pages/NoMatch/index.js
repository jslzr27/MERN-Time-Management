import React, { Component } from 'react'
import { Button } from '@material-ui/core';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h1>Error 404. Page Not Found</h1>
        <Button variant="contained" color="primary">Go Back to Home</Button>
      </div>
    )
  }
}
