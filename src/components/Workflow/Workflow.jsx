import React from 'react';
import WorkflowUtils from './WorkflowUtils';
import api from '../../api/api';

class Workflow extends React.Component {
  constructor() {
    super();
    this.state = {
      states: [],
    };
  }

  componentDidMount() {
    api.getDocumentStates(this.props.doc_id)
      .then((response) => {
        const states_list = WorkflowUtils.getStatelist(response);
        this.setState({ states: states_list });
      });
  }

  render() {
    return (
      <div>
        Estados del documento con id {this.props.doc_id}:
        <br />
        <br />
        { this.state.states }
      </div>
    );
  }
}

export default Workflow;
