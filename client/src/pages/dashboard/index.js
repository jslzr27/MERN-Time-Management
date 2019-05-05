import React, { Component } from 'react'
import AddActivity from '../../components/AddActivity';
import Task from '../../components/Task';
import MyTask from '../../components/Task/MyTask';
import Stopwatch from '../../components/TimeTracker/Stopwatch';
import GoalPage from '../../components/Goals';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>This is your dashboard</h1>
        <MyTask />
        <AddActivity />
        <Task />
        <Stopwatch />
        <GoalPage />
      </div>
    )
  }
}
