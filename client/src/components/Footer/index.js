import React, { Fragment } from 'react'
import { withStyles, AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import MenuTabs from '../Tabs';
import "./style.css";


const styles = {
    root: {
      background: '#4b7447',
      border: 0,
      boxShadow: 'none',
      position: "static",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
  };  


const Footer = (props) => {
    const { classes } = props;
    return(
        <Fragment>
          <Grid id="footerdiv">
            <AppBar className={classes.root}>
            <MenuTabs />
            <Typography id="symbols">
                Powered by:<br></br>
                <i className="fab fa-react"></i> 
                <i className="fab fa-js-square"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-node"></i>
            </Typography> <br></br>
            <Typography id="copyright">© Copyright 2019 Coding Bootcamp | Created by: <span id="footer-name">Jesus Salazar</span> <a id="link" href="https://www.linkedin.com/in/jesus-salazar-484837173/" target="_blank"><i className="fab fa-linkedin"></i></a> <a id="link" href="https://github.com/jslzr27" target="_blank"> <i className="fab fa-github"></i></a> <span> &</span> <span id="footer-name">Tyler Zaworski</span></Typography>
            </AppBar>
          </Grid>
        </Fragment>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Footer);
