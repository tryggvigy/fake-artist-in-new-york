import React from "react";
import initGame from "../game";
import styled from "styled-components";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    initGame(this.canvasNode);
  }

  render() {
    return (
      <canvas
        ref={node => {
          this.canvasNode = node;
        }}
        height="400"
        width="600"
        style={{
          backgroundColor: "red"
        }}
      />
    );
  }
}
