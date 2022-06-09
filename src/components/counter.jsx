import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // getting value from props which is in counters child element
  //   // tags: [],
  // };
  // Deleting it so can have single source of truth.

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // This is long method of getting refrence to original object, this bind met-
  // hod gives a new instance of handleIncrement function and in handle method-
  // this will refrences to currnet object, no matter how function is call this-
  // is not going to change, bind gives new function so save it to rest handle.

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // This is longer method for conditional list in jsx cant use if so create-
  // a new method to that shorter one is given below.

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  // As dont have state here so it dont have to be here as this component is-
  // going to be controled by its parent and rasie an event when data need to-
  // change.

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  // Adding arguments to events longer method by creating another method.

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        {/* <p>Counter #{this.props.id}</p> using prop object */}
        {/* {this.props.children} using prop childern*/}
        {/* getting value from counters using props defined in child element */}
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger"
          >
            x
          </button>
          {/* {this.state.tags.length === 0 && <p>Please create a new tag</p>} */}
          {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> 
        Mapping the list of tags with map method and returning message if leng-
        th is zero */}
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  // Giving our button a color depending upon the value of count
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
  // Showing count a string if value is zero.
}

export default Counter;
