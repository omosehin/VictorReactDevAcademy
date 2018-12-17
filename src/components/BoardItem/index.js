import React, { Component } from "react";
import ReactDOM from "react-dom";

class BoardItem extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  onInputChange = event => {
    /**before setting state checking if value is a number
     * and that is less than 100
     */
    let inputValue = event.target.value;
    let inputArr = [this.props.pos, inputValue];
    this.props.onValueChanged(inputArr);
    // if (!isNaN(inputValue) && inputValue < 100) {
    //   this.setState({
    //     data: event.target.value
    //   });

    // }
  };

  onArrow = pos => {
    this.props.onArrowClicked(pos);
  };

  render() {
    return (
      <div className="board_item">
        <input value={this.props.inputValue} onChange={this.onInputChange} />

        {this.props.swappable && (
          <div>
            <div className="swap_button N" onClick={() => this.onArrow("N")}>
              {swapIcon}
            </div>
            <div className="swap_button S" onClick={() => this.onArrow("S")}>
              {swapIcon}
            </div>
            <div className="swap_button W" onClick={() => this.onArrow("W")}>
              {swapIcon}
            </div>
            <div className="swap_button E" onClick={() => this.onArrow("E")}>
              {swapIcon}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BoardItem;

var swapIcon = (
  <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384">
    <g>
      <g>
        <g>
          <polygon points="128,0 42.667,85.12 106.667,85.12 106.667,234.667 149.333,234.667 149.333,85.12 213.333,85.12    " />
          <polygon points="277.333,298.88 277.333,149.333 234.667,149.333 234.667,298.88 170.667,298.88 256,384 341.333,298.88    " />
        </g>
      </g>
    </g>
  </svg>
);
