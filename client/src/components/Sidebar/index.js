import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Schedule from "../Schedule/schedule";
import AddActivity from "../AddActivity";
import Task from '../Task';
import MyTask from '../Task/MyTask';
import Stopwatch from '../TimeTracker/Stopwatch';
import GoalPage from '../Goals';
import CircularProgressBar from '../Schedule/ProgressBar';

import "./style.css";
import { Query } from 'mongoose';
import { CircularProgress } from '@material-ui/core';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        border: "1px solid yellow",
        height: "100%",
        width: "100%",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        border: "1px solid blue",
        height: "100%"
    },
    drawerPaper: {
        width: drawerWidth,
        top: "auto",
        height: "100%"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

    
class SideBar extends Component {

    state = {
        showSchedule: false,
        showStopwatch: false,
        showAddactivity: false,
        showGoals: false,
    }


    toggleSchedule = () => {
        const doesShow = this.state.showSchedule;
        this.setState({showSchedule: !doesShow});
    }
    
    toggleStopwatch = () => {
        const doesShow = this.state.showStopwatch;
        this.setState({showStopwatch: !doesShow});
        console.log(doesShow);
    }
    toggleGoalPage = () => {
        const doesShow = this.state.showGoals;
        this.setState({showGoals: !doesShow});
    }
    toggleAddActivity = () => {
        const doesShow = this.state.showAddactivity;
        this.setState({showAddactivity: !doesShow});
    }

    handleClick = () => {
        console.log("hi");
    }

    render() {
        const { classes } = this.props;
        let schedule, stopWatch, goals, addActivity = null;
       
        if (this.state.showSchedule) {
            schedule = ( <Schedule /> );
        }
        if (this.state.showStopwatch) {
            stopWatch = ( <Stopwatch /> );
        }
        if (this.state.showAddactivity) {
            addActivity = ( <AddActivity /> );
        }
        if (this.state.showGoals) {
            goals = ( <GoalPage /> );
        }
        return (
            <div className={classes.root} id="dashboard">
                <CssBaseline />
                {/* <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    id="sidebar"
                > */}
                    <List id="main-sidebar">
                        <ListItem button onClick={this.toggleSchedule}>
                            <ListItemIcon><i className="far fa-calendar"></i></ListItemIcon>
                            <ListItemText >Schedule</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.toggleAddActivity}>
                            <ListItemIcon><i className="fas fa-plus"></i></ListItemIcon>
                            <ListItemText >Add activity</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.toggleStopwatch}>
                            <ListItemIcon><i className="fas fa-stopwatch"></i></ListItemIcon>
                            <ListItemText >Track</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.toggleGoalPage}>
                            <ListItemIcon><i className="fas fa-bullseye"></i></ListItemIcon>
                            <ListItemText >Goals</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.handleClick}>
                            <ListItemIcon><i className="fas fa-history"></i></ListItemIcon>
                            <ListItemText >History</ListItemText>
                        </ListItem>
                    </List>
                {/* </Drawer> */}
                <main className={classes.content} id="dashboard-maincontent">
                    <div className={classes.toolbar} />
                    <h1>Hello, </h1>
                    {schedule}
                    {stopWatch}
                    {goals}
                    {addActivity}
                </main>
            </div>
        );
    }
}



SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);