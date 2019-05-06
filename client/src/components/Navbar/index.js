import React, { Fragment } from 'react'
import { withStyles, AppBar, Toolbar, Typography, Button, FormHelperText } from '@material-ui/core';
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
    },
  };  


let Navbar = (props) => {
    const { classes } = props;
    return(
        <Fragment>
            <AppBar className={classes.root} position="static">
                <Toolbar id="bar">
                    <Button color="inherit" href="/" id="logo">
                    Time Management App
                    </Button>
                    <Button id="login" color="inherit" href="/signup">Login / Register</Button>
                </Toolbar>
            </AppBar>
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