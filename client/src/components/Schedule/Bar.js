import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width:50rem;
    height:50rem;
    background-color: #fff;
    border-radius:10px
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black ;
`;

const Track = styled.div`
    width: 50%;
    height:2em;
    background-color: red;
    border-radius:10px;
    margin: auto;
    transition: width 0.3s ease-in-out;
`;

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: yellow;
    border-radius: 8px;
`;


export default class Bar extends Component {
  clamp = (min, value, max) => {
    return Math.min(Math.max(min, value, max));
  }
  render() {
    return (
      <div>
        <Container>
          <Title>
            Hello
          </Title>
          <Track>
            {/* <Thumb percentage={this.clamp(0, this.props.percentage, 100)} /> */}
            <Thumb percentage={this.clamp(0, this.props.percentage, 24)} />
          </Track>
        </Container>
      </div>
    )
  }
}

Bar.propTypes = {
  percentage: PropTypes.number,
};
