import React, { Component } from "react";
import ScheduleList from "./List";
import Bar from "./Bar";
import { Grid, } from "@material-ui/core/";
import CircularProgressBar from "./ProgressBar";
import "./style.css";

export default class Schedule extends Component {

  state = {
    totalHours: 0,
    percentage: 0,
  }

  // getHours = e => {
  //   function getPercent(percentFor, percentOf) {
  //     return (percentFor / percentOf * 100);
  //   }
  //   this.setState({ 
  //     totalHours: e.target.value,
  //     percentage: getPercent(this.state.totalHours, 24)
  //   })
  //   console.log(e.target.value);
  // }

//   getTotalHours = totalHours => {
//     this.setState({totalHours: totalHours})
//     console.log(totalHours);
//   }
//   getPercent = (percentFor, percentOf) => {
//     return (percentFor / percentOf * 100);
// }

  // getPercentage = () => {
  //   let changePercentage = this.state.percentage;
  //   changePercentage = 25;
  //   this.setState(
  //     { percentage: changePercentage },
  //   );
  // }
  
  // getHours = e => {
  //   this.setState({totalHours: e.target.value});
  //   console.log(e.target.value);
  // }

  render() {
    return (
        <Grid container id="schedule-div">
          <Grid item md>        
            <ScheduleList 
            getHours = {this.getTotalHours} 
            />
          </Grid>
          <Grid item md id="questions">
            {/* <Bar percentage={this.state.percentage} />  */}
            <CircularProgressBar 
            percentage={this.state.percentage}
            strokeWidth="20"
            sqSize="400" />
          </Grid>      
        </Grid>
    )
  }
}
