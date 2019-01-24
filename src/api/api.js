import axios from 'axios';
import $ from 'jquery';

const API_HOST = 'http://127.0.0.1:8000/dp';
const API_TESTS = 'http://127.0.0.1:8000/test';


function getDocumentsTypes() {
  return axios.get(`${API_HOST}/doctypes`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      alert(err);
    });
}

function getDocumentStates(document_id) {
  return axios.get(`${API_HOST}/get_document_states?doc_id=${document_id}`, {
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err);
    });
}

function getDocumentTransitions(document_id) {
  return axios.get(`${API_HOST}/get_document_transitions?doc_id=${document_id}`, {
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err);
    });
}

function getDocumetSections(document_id) {
  return axios.get(`${API_HOST}/get_document_sections?doc_id=${document_id}`, {
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err);
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
      alert(err);
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
      alert(err);
    });
}

function getDocument1(document_id) {
  return axios.get(`${API_TESTS}/get_document1/${document_id}/?format=json`, {
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err);
    });
}

function getFormData($form) {
  const unindexed_array = $form.serializeArray();
  const indexed_array = {};

  $.map(unindexed_array, (n) => {
    indexed_array[n.name] = n.value;
  });

  return indexed_array;
}

function postDocument1Url(document_id, form) {
  return axios.post(`${API_TESTS}/save_document1/${document_id}/`,
    getFormData(form), {
      auth: {
        username: 'luis.bustos',
        password: '1234',
      },
    }).then((response) => {
    return response.data;
  }).catch((err) => {
    alert(err);
  });
}

export default {
  getDocumentStates,
  getDocumentsTypes,
  getDocumetSections,
  getDocumentTransitions,
  getPreviousDocumentStates,
  getNextDocumentStates,
  getDocument1,
  postDocument1Url,
};
