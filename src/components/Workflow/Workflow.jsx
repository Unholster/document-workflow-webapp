import React from 'react';
import api from '../../api/api';

class Workflow extends React.Component {
  constructor() {
    super();
    this.state = {
      states: [],
    };
  }

  componentDidMount() {
    api.getDocumentStates(14)
      .then((response) => {
        this.setState({ states: response });
      });
  }

  render() {
    const lel = JSON.stringify(this.state.states);
    return (
      <div>
        { lel }
      </div>
    );
  }
}

export default Workflow;
