import React, { Component } from 'react'
import AddActivity from '../../components/AddActivity';
import Task from '../../components/Task';
import MyTask from '../../components/Task/MyTask';
import Stopwatch from '../../components/TimeTracker/Stopwatch';
import GoalPage from '../../components/Goals';
import Sidebar from '../../components/Sidebar';
import { Grid } from '@material-ui/core';
import './style.css';


export default class Dashboard extends Component {
  render() {
    return (
      <Grid container id="dashboard-container">
        <Sidebar />
        {/* <MyTask />
        <AddActivity />
        <Task />
        <Stopwatch />
        <GoalPage /> */}
      </Grid>
    )
  }
}
