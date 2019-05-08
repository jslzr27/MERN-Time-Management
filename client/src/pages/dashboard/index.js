import React, { Component } from 'react'
import AddActivity from '../../components/AddActivity';
import Task from '../../components/Task';
import MyTask from '../../components/Task/MyTask';
import Stopwatch from '../../components/TimeTracker/Stopwatch';
import GoalPage from '../../components/Goals';
import Sidebar from '../../components/Sidebar';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        {/* <MyTask />
        <AddActivity />
        <Task />
        <Stopwatch />
        <GoalPage /> */}
      </div>
    )
  }
}
