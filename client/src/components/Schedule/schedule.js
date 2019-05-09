import React, { Component } from "react";
import ScheduleList from "./List";
import Bar from "./Bar";
import { Grid } from "@material-ui/core/";
import "./style.css";

export default class Schedule extends Component {

  state = {
    totalHours: 0,
    percentage: 50,
  }

  // getTotalHours = totalHours => {
  //   this.setState({totalHours: totalHours})
  //   console.log(totalHours);
  // }
  getWholePercent = (percentFor, percentOf) => {
    return (percentFor / percentOf * 100);
}

  getPercentage = () => {
    let percentage = this.state.percentage;
    percentage = 25;
    this.setState(
      { percentage: percentage },
    );
  }

  getHours = e => {
    this.setState({totalHours: e.target.value});
    console.log(e.target.value);
  }

  render() {
    return (
        <Grid container id="schedule-div">
        
          <Grid item md>        
            <ScheduleList getHours = {this.getHours} />
          </Grid>
          <Grid item md id="questions">
            <Bar percentage={this.state.percentage} /> 
          </Grid>      
        </Grid>
    )
  }
}
