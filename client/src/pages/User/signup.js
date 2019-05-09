import React, { Component, ReactPropTypes } from 'react';
// import UserForm from "./UserForm";
import "./style.css";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    margin: {
    margin: theme.spacing.unit,
    },
    cssLabel: {
    '&$cssFocused': {
        color: "#8eba43",
    },
    },
    cssFocused: {},
    cssUnderline: {
    '&:after': {
        borderBottomColor: "#8eba43",
    },
    },
});

class Signup extends Component {
    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }

    render(){
        const { values, handleChange } = this.props;
        const expression = /\S+@\S+/
        const { classes } = this.props;  
        expression.test(String('my-email@test.com').toLowerCase());
        return(
            <Grid container id="user-form" className={classes.root}>
                <h1>Sign Up</h1>
                <FormControl>
                    <TextField
                        name="first-name"
                        id="standard-with-placeholder first"
                        label="Your First Name"
                        placeholder="First Name"
                        margin="normal"
                        classes={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused
                        }}
                        // onChange={handleChange("firstName")}
                        // defaultValue={values.firstName}
                    />
                     <TextField
                        name="last-name"
                        id="standard-with-placeholder last"
                        label="Your Last Name"
                        placeholder="Last Name"
                        margin="normal"
                        classes={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused
                        }}
                        // onChange={handleChange("lastName")}
                        // defaultValue={values.lastName}
                    />
                    <TextField 
                        name="email"
                        id="standard-with-placeholder email"
                        label="Email address"
                        placeholder="email@website.com"
                        type="email"
                        margin="normal"
                        classes={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused
                        }}
                        // onChange={handleChange("email")}
                        // defaultValue={values.email}
                    />
                    <TextField
                        name="password"
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        margin="normal"
                        classes={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused
                        }}
                        // onChange={handleChange("password")}
                        // defaultValue={values.password}
                    />
                    <Button onClick={this.continue} id="button">
                        Finish Signing Up
                    </Button>
                </FormControl>
            </Grid>
        )
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Signup);