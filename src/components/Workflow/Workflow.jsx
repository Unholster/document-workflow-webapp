import React from 'react';
import { Jumbotron, Badge, ButtonGroup, Button } from 'reactstrap';
import WorkflowUtils from './WorkflowUtils';
import api from '../../api/api';
import './Workflow.css';


class Workflow extends React.Component {
  constructor() {
    super();
    this.states = [];
    this.transitions = [];
    this.state = {
      states: [],
      transitions: [],
      document: [],
      currentState: '',
      possibleTransitions: '',
      rSelected: '',
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  componentDidMount() {
    api.getDocumentStates(this.props.doc_id)
      .then((response) => {
        this.setState({ states: JSON.stringify(response) });
        this.transitions = JSON.stringify(response);
      });
    api.getDocumentTransitions(this.props.doc_id)
      .then((response) => {
        this.setState({ transitions: JSON.stringify(response) });
        this.states = JSON.stringify(response);
      });
    api.getDocument1(1)
      .then((response) => {
        this.setState({ document: JSON.stringify(response) });
      });
  }

  componentDidUpdate() {
    if (this.state.states.length > 0 && this.state.transitions.length > 0 && this.state.document.length > 0) {
      if (this.state.currentState === '') {
        this.setState({ currentState: WorkflowUtils.getCurrentState(this) });
        this.setState({
          possibleTransitions: WorkflowUtils.getPossibleTransitions(this)
            .map(transition => <Button color="primary" onClick={() => this.onRadioBtnClick(transition[0])} active={this.state.rSelected === transition[0]}>{transition[1].toString()}</Button>)
        });
      }
    }
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <Jumbotron>
        <div>
        <h3 className="text-left">
          Estado del documento
        </h3>
          <br />
          <h5 className="text-left"> Estado actual del documento: &nbsp;&nbsp;&nbsp;<Badge color="secondary">{this.state.currentState}</Badge></h5>
          <br />
          <br />
          <h5 className="text-left"> Transiciones aplicables:</h5>
          <br />
          <ButtonGroup>
            {this.state.possibleTransitions}
          </ButtonGroup>
        </div>
      </Jumbotron>
    );
  }
}

export default Workflow;
