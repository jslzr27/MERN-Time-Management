import React, { Component } from 'react';
import "./style.css";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

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

class Login extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const { values, handleChange } = this.props;
        const { classes } = this.props;  
        // const expression = /\S+@\S+/
        // expression.test(String('my-email@test.com').toLowerCase());
        return (
            <Grid container id="user-form" className={classes.root}>
                <h1>Log In</h1>
                <FormControl>
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
                        onChange={handleChange("email")}
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
                        onChange={handleChange("password")}
                   />
                    <Button onClick={this.continue} id="button">
                        Login
                    </Button>
                </FormControl>
                <Typography>Not registered yet. <span id="retake-form" onClick={this.back}>Sign Up</span></Typography>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Login);