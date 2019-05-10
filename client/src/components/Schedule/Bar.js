import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width:40rem;
    height:40rem;
    background-color: #fff;
    border-radius:10px;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black ;
`;

const Circle = styled.div`
  height: 165px;
  width: 165px;
  background-color:#696878;
  border-radius: 50%;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
`;

// const TrackCircle = styled.div`
//   width: 25rem;
//   height: 25rem;
//   border: 20px solid;
//   border-radius: 50%;
//   border-color: red;
//   margin: auto;
//   transition: width 0.3s ease-in-out;
// `;

const Track = styled.div`
    width: 80%;
    height:1.5em;
    background-color: black;
    border-radius: 10px;
    margin: auto;
    transition: width 0.3s ease-in-out;
`;

//    width: ${props => props.percentage}%;
const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: yellow;
    border-radius: 8px;
`;


export default class Bar extends Component {
  clamp = (min, value, max) => {
    return Math.min(Math.max(parseInt(value),min),max);
  }
  render() {
    return (
      <div>
        <Container>
          <Title>
            Hello
          </Title>  
          <Track>
            <Thumb percentage={this.clamp(0, this.props.percentage, 100)} />
          </Track>
          {/* <Track>
            <Thumb percentage={this.clamp(0, this.props.percentage, 100)} />
            <Thumb />
          </Track> */}
        </Container>
      </div>
    )
  }
}

Bar.propTypes = {
  percentage: PropTypes.number,
};
