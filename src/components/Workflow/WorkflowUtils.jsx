import React from 'react';

const getStatelist = (documentStates) => {
  return documentStates.map(state => <div>{state.fields.state_name.toString()}</div>);
};

const getTransitionList = (documentTransitions) => {
  return documentTransitions.map(transition => <div>{transition.fields.name.toString()}</div>);
};

export default {
  getStatelist,
  getTransitionList,
};
