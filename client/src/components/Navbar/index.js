import React, { Fragment } from 'react'
import { withStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';


const styles = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  };  


const Navbar = (props) => {
    const { classes } = props;
    return(
        <Fragment>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Typography variant="headline" color="inherit">
                    Time Management App
                    </Typography>
                    <Button color="inherit">Login / Register</Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Navbar);
