import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Home extends Component {
  render() {
    return (
      <div> 
        <h1>Manage your time with us</h1>
        <h3>Find Time to Learn, Play or Enjoy</h3>
        <Button variant="contained" color="primary">Register for Free</Button>
        <br></br>
        <h4>Already have an account. <span className="login"><a>Log in</a></span></h4>
      </div>
    )
  }
}
