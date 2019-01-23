import React, { Component } from 'react';
import './App.css';
import Workflow from './components/Workflow/Workflow';
import Document1 from './components/Documents/Document1Edit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Document1 />
        <Workflow doc_id={14} />
      </div>
    );
  }
}

export default App;
