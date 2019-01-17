import React from 'react';

const getStatelist = (documentStates) => {
  return documentStates.map(state => <li>{state.fields.state_name.toString()}</li>);
};

export default {
  getStatelist,
};
