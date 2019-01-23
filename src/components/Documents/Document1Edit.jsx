import React from 'react';
import api from '../../api/api';
import ChiefSection from '../DocumentSections/ChiefSection.jsx'
import WorkSection from '../DocumentSections/WorkSection.jsx'
import Workflow from '../Workflow/Workflow';

import $ from 'jquery';

class Document1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ct_id: 14,
<<<<<<< HEAD
      first_name: '',
      last_name: '',
      fee: '',
      start_date: '',
      end_date: '',
      description: '',
      doc_state: '',
=======
      first_name: "",
      last_name: "",
      fee: "",
      start_date: "",
      end_date: "",
      description: "",
      doc_state: "",
>>>>>>> Allows to edit a document and save it's new state
     };

     this.formRef = React.createRef();
     this._handleSubmit = this._handleSubmit.bind(this);
     this.setNextState = this.setNextState.bind(this)
  }

  componentDidMount() {
    api.getDocument1(1)
      .then((response) => {
        this.setState({
          fee: response.fee,
          first_name: response.first_name,
          last_name: response.last_name,
          start_date: response.start_date,
          end_date: response.end_date,
          description: response.description,
          doc_state: response.state,
         });
      });
  }

  render() {
    return (
      <div>
        <div>
          <br />
          <h2>
          Documento de Tipo 1
          </h2>
          <br/>
          <form onSubmit={this._handleSubmit} ref={this.formRef} id="docForm">
          <ChiefSection first_name={this.state.first_name}
                        last_name={this.state.last_name}
                        fee={this.state.fee}/>
          <WorkSection start_date={this.state.start_date}
                       end_date={this.state.end_date}
                       description={this.state.description}/>
          <Workflow doc_id={14} set_state_cb={this.setNextState}/>
          <input type="hidden" name="state" value={this.state.doc_state}/>
          <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }

  _handleSubmit(e){
    e.preventDefault();
    api.postDocument1Url(1, $("#docForm"));
    window.location.reload();
  }

  setNextState(next_state) {
    this.setState({
      doc_state: next_state,
    });
  }

  _handleSubmit(e){
    e.preventDefault();
    api.postDocument1Url(1, $("#docForm"));
    window.location.reload();
  }
}

export default Document1;
