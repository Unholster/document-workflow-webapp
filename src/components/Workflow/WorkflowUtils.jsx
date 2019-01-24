import React from 'react';

const getStatelist = (documentStates) => {
  return documentStates.map(state => <div>{state.fields.state_name.toString()}</div>);
};

const getTransitionList = (documentTransitions) => {
  return documentTransitions.map(transition => <div>{transition.fields.name.toString()}</div>);
};

const getCurrentState = (workflow) => {
  const docJSON = JSON.parse(workflow.state.document);
  const statesJSON = JSON.parse(workflow.state.states);
  const id = docJSON.state;
  const currentState = statesJSON.find(e => e.pk === id);
  return currentState.fields.state_name.toString();
};

const getPossibleTransitions = (workflow) => {
  const docJSON = JSON.parse(workflow.state.document);
  const transitionsJSON = JSON.parse(workflow.state.transitions);
  const id = docJSON.state;
  const possibleTransitions = transitionsJSON.filter(e => e.fields.start_state === id);
  return possibleTransitions.map(transition => [transition.pk, transition.fields.name]);
};

export default {
  getStatelist,
  getTransitionList,
  getCurrentState,
  getPossibleTransitions,
};
