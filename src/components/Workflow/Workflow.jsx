import React from 'react';
import { Jumbotron, Badge, ButtonGroup, Button, FormGroup, Col, Label, Input } from 'reactstrap';
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
      acceptComments: false,
      comment: '',
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onChangeFunction = this.onChangeFunction.bind(this);
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

  componentDidUpdate(prevState) {
    if (this.state.states.length > 0 && this.state.transitions.length > 0 && this.state.document.length > 0) {
      if (this.state.currentState === '') {
        this.setState({ currentState: WorkflowUtils.getCurrentState(this) });
        this.setState({
          possibleTransitions: WorkflowUtils.getPossibleTransitions(this)
            .map(transition => <Button color="primary" onClick={() => this.onRadioBtnClick(transition[0])} active={this.state.rSelected === transition[0]}>{transition[1].toString()}</Button>),
          comment: '',
        });
      }
    }
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected: rSelected[0] });
    this.props.set_state_cb(rSelected[0]);
    this.props.set_transition_cb(rSelected[1]);
    this.addCommentTextArea(rSelected[1]);
  }

  onChangeFunction(component, value) {
    this.setState({ comment: value });
  }

  addCommentTextArea(rSelected) {
    const transition = JSON.parse(this.state.transitions).find(e => e.pk === rSelected);
    this.setState({ acceptComments: transition.fields.accepts_observation });
  }


  render() {
    let textarea;
    if (this.state.acceptComments) {
      textarea = (
        <FormGroup row>
          <Label for="description" sm={2}>Comentario</Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="comment"
              id="comment"
              placeholder="Añadir un comentario..."
              value={this.state.comment}
              onChange={this.onChangeFunction}
            />
          </Col>
        </FormGroup>
      );
    } else {
      textarea = null;
    }
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
          <br />
          <br />
          {textarea}
        </div>
      </Jumbotron>
    );
  }
}

export default Workflow;
