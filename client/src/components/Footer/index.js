import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import MenuTabs from "../Tabs";
import "./style.css";

const Footer = () => {
    return (
        <div>
            <AppBar id="footer" color="primary">
            <MenuTabs />
           <Typography>
                Powered by:<br></br>
                <i class="fab fa-react"></i> 
                <i class="fab fa-js-square"></i>
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-node"></i>
            </Typography> 
            <Typography>© Copyright 2019 Coding Bootcamp | Created by: Jesus Salazar <i class="fab fa-linkedin"></i> <i class="fab fa-github"></i> <span> &</span> Tyler Zaworski</Typography>
            </AppBar>
        </div>
    )
}

export default Footer;