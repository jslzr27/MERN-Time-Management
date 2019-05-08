import React, { Component } from "react";
import ScheduleList from "./List"
import Bar from "./Bar";

export default class Schedule extends Component {

  state = {
    totalHours:"",
    percentage: "",
  }

  // getTotalHours = totalHours => {
  //   this.setState({totalHours: totalHours})
  //   console.log(totalHours);
  // }

  // getPercentage

  getHours = e => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div id="schedule">
        <div id="questions">
        <ScheduleList getHours = {this.getHours} />
        <Bar percentage={this.state.percentage} /> 
        </div>
        
      </div>
    )
  }
}
