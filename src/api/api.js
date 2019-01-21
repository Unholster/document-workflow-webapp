import axios from 'axios';

const API_HOST = 'http://127.0.0.1:8000/dp';


function getDocumentsTypes() {
  return axios.get(`${API_HOST}/doctypes`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getDocumentStates(document_id) {
  return axios.get(`${API_HOST}/get_document_states`, {
    params: {
      doc_id: document_id,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getDocumentTransitions(document_id) {
  return axios.get(`${API_HOST}/get_document_transitions`, {
    params: {
      doc_id: document_id,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getDocumetSections(document_id) {
  return axios.get(`${API_HOST}/get_document_sections`, {
    params: {
      doc_id: document_id,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getPreviousDocumentStates(s_id) {
  return axios.get(`${API_HOST}/get_previous_states`, {
    params: {
      state_id: s_id,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getNextDocumentStates(s_id) {
  return axios.get(`${API_HOST}/get_next_states`, {
    params: {
      state_id: s_id,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default {
  getDocumentStates,
  getDocumentsTypes,
  getDocumetSections,
  getDocumentTransitions,
  getPreviousDocumentStates,
  getNextDocumentStates,
};
