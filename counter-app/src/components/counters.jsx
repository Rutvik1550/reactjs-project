import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onReset, counters } = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}
