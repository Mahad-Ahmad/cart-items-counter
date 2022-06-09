import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  
  
  
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((v) => v.id !== counterId);
    this.setState({ counters });
  };

  render() {
  return (
    <div>
    <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
    <main className='container'>
      <Counters
      // events used as props for other components.
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete} />
    </main>
    </div>
  );
}
}
export default App;
