import React from "react";
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import "./style.css";

const Navbar = (props) => {
    const { classes } = props;
    return(
        <div className="classes.root">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="headline" color="inherit">
                    Time Management App
                    </Typography>
                    <Button color="inherit">Login / Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default Navbar;