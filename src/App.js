import React, { Component } from 'react';
import './App.css';
import Workflow from './components/Workflow/Workflow';
import Document1 from './components/Documents/Document1Edit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ submitted: false });
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    const workflow = this.state.submitted ? <Workflow doc_id={this.state.value} /> : '';
    return (
      <div className="App">
        <Document1 />
        <form onSubmit={this.handleSubmit}>
          Document id:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <br />
        { workflow }
      </div>
    );
  }
}

export default App;
