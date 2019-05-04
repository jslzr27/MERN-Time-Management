import React, { Component } from 'react';
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

export default class Mobiscroll extends Component {
  render() {
    return (
      <div>
       <label> 
        Time 
        <mobiscroll.Range touchUi={false} controls={['time']} placeholder="Please select..." /> 
        </label>
      </div>
    )
  }
}
