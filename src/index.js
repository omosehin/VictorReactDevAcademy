//Name: Victor Abidoye

import React, { Component } from "react";
import ReactDOM from "react-dom";

import BoardItem from "./components/BoardItem/index.js";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        F: "",
        N: "",
        W: "",
        S: ""
      }
    };
  }

  handleValueChanged = valAr => {
    let pos = valAr[0];
    let value = valAr[1];
    if (!isNaN(value) && value < 100) {
      let data_ = this.state.data;
      data_[pos] = value;
      this.setState({
        data: data_
      });
    }
  };

  moveData(from, to) {
    let fromData = this.state.data[from];
    let toData = this.state.data[to];

    let data_ = this.state.data;
    data_[from] = toData;
    data_[to] = fromData;

    this.setState({
      data: data_
    });
  }

  handleArrowClicked = pos => {
    if (pos === "N") this.moveData("N", "C");
    if (pos === "W") this.moveData("W", "C");
    if (pos === "E") this.moveData("E", "C");
    if (pos === "S") this.moveData("S", "C");
  };

  render() {
    return (
      <div className="App">
        <div className="info">
          <div className="header">Instructions(read this)</div>

          <div className="entry">
            When done with your implementation hit the download button in the
            top left corner to download your solution in a zip file.
          </div>

          <div className="entry">
            Save the zip file with the name format{" "}
            <b>"firstName_lastName-square.zip"</b>.
          </div>

          <div className="entry">
            Send the zip file to gilbert.karadja@gmail.com. Late submissions
            will be ignored. Copying work will be severly penalized (-9,000
            points)
          </div>
        </div>

        <div className="info">
          <div className="header">Question 1</div>
        </div>

        <div className="">
          <div className="">
            <BoardItem
              pos="A"
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["A"]}
            />
            <BoardItem
              pos="N"
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["N"]}
            />
            <BoardItem
              pos="B"
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["B"]}
            />
          </div>

          <div className="">
            <BoardItem
              pos="W"
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["W"]}
            />
            <BoardItem
              pos="C"
              onArrowClicked={this.handleArrowClicked}
              swappable={true}
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["C"]}
            />

            <BoardItem
              pos="E"
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["E"]}
            />
          </div>

          <div className="">
            <BoardItem
              pos="D"
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["D"]}
            />
            <BoardItem
              pos="S"
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["S"]}
            />
            <BoardItem
              pos="F"
              onValueChanged={this.handleValueChanged}
              inputValue={this.state.data["F"]}
            />
          </div>
        </div>

        <div className="info">
          <div className="header">Requirements</div>
          <div className="entry">
            1) A user shoud be able to input a value into any square. The{" "}
            <b>value</b> should be a number <b>less than 100</b>
          </div>
          <div className="entry">
            2) Clicking on any of the swap buttons should swap the values of the
            respective squares involved.
          </div>
        </div>

        <div className="info">
          <div className="header">Question 2</div>
          <div className="entry">...just kidding</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
