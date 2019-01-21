import React from 'react';
import WorkflowUtils from './WorkflowUtils';
import api from '../../api/api';
import './Workflow.css';


class Workflow extends React.Component {
  constructor() {
    super();
    this.state = {
      states: [],
      transitions: [],
    };
  }

  componentDidMount() {
    api.getDocumentStates(this.props.doc_id)
      .then((response) => {
        const states_list = WorkflowUtils.getStatelist(response);
        this.setState({ states: states_list });
      });
    api.getDocumentTransitions(this.props.doc_id)
      .then((response) => {
        const transitions_list = WorkflowUtils.getTransitionList(response);
        this.setState({ transitions: transitions_list });
      });
  }

  render() {
    return (
      <div>
        Estados del documento {this.props.doc_id}:
        <br />
        <br />
        <div className="Workflow-States-Container">
          { this.state.states }
        </div>
        <br />
        <br />
        Transiciones del documento:
        <br />
        <br />
        { this.state.transitions }
      </div>
    );
  }
}

export default Workflow;
