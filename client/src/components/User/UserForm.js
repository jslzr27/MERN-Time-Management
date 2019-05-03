/* eslint-disable default-case */
import React, { Component } from 'react'
import SignUp from './signup';

export default class UserForm extends Component {
    state={
        step: 1,
        firstName: '',
        lastName: '', 
        email: '',
        password:'',
    }

    //proceed to next step

    nextStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Back to prev step

     prevStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password } = this.state;
    const values = { firstName, lastName, email, password };
   
    switch(step) {
        case 1:
            return(
                <SignUp 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
        case 2:
            return <h1>Success</h1>
    }
  }
}
