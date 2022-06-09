import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement, counters } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          >
            {/* id={counter.id} for prop object*/}
            {/* // selected={true} */}
            {/* <p>Counter #{counter.id}</p> for using prop childern */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
