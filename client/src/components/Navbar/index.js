import React, { Fragment } from 'react'
import { withStyles, AppBar, Toolbar, Typography, Button, FormHelperText, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import "./style.css";


const styles = {
    root: {
      background: '#eb8a44',
      border: 0,
      borderRadius: 0,
      boxShadow: 'none',
      color: 'white',
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99,
    },
  };  


let Navbar = (props) => {
    const { classes } = props;
    return(
        <Fragment>
          <Grid container>
            <AppBar className={classes.root} position="static" id="appbar">
                <Toolbar id="bar">
                  <Grid container id="ssss">
                    <Grid item id="home-btn">
                      <Button color="inherit" href="/" id="logo">
                      Time Management App
                      </Button>
                    </Grid>
                    <Grid id="signup-login">
                      <Button id="signup-login-btn" color="inherit" href="/signup">Login / Register</Button>
                    </Grid>
                  </Grid>
                </Toolbar>
            </AppBar>
          </Grid>
        </Fragment>
        //Get auth
        //     <Fragment>
        //     <AppBar className={classes.root} position="static">
        //         <Toolbar>
        //             <Button color="inherit" href="/" id="logo">
        //             Time Management App
        //             </Button>
        //             <Button id="dashbard" color="inherit" href="dashboard">Go To Your Dashboard</Button>
        //         </Toolbar>
        //     </AppBar>
        // </Fragment>
    )
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Navbar);



///example//////
////
///

// let NavBar = (props) => {

//   const loginOrProfile = (auth) => {

//     return auth.isAuthenticated ?
//       <Nav className="float-xs-right" navbar>
//         <NavItem className="navbar-text">
//           Welcome back {auth.username}
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to="/logout">Logout</NavLink>
//         </NavItem>
//       </Nav>

//       :

//       <Nav className="float-xs-right" navbar>
//         <NavItem>
//           <NavLink tag={Link} to="/login">Log in</NavLink>
//         </NavItem>
//       </Nav>
//   };

//   return (
//     <div>
//       <Navbar color="inverse" dark full>
//         <NavbarBrand href="/">Our Cool App</NavbarBrand>
//         {loginOrProfile(props.auth)}
//       </Navbar>
//     </div>
//   );
// };

// NavBar.propTypes = {
//   auth: React.PropTypes.object.isRequired
// };

// export default NavBar;