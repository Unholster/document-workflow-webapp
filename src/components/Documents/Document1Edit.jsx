import React from 'react';
import api from '../../api/api';
import ChiefSection from '../DocumentSections/ChiefSection.jsx'
import WorkSection from '../DocumentSections/WorkSection.jsx'

class Document1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ct_id: 14,
      first_name: "",
      last_name: "",
      fee: "",
      start_date: "",
      end_date: "",
      description: "",
     };
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
         });
      });
  }

  render() {
    return (
      <div>
        <div>
          <br/>
          <h2>
          Documento de Tipo 1
          </h2>
          <br/>
          <form>
          <ChiefSection first_name={this.state.first_name}
                        last_name={this.state.last_name}
                        fee={this.state.fee}/>
          <WorkSection start_date={this.state.start_date}
                       end_date={this.state.end_date}
                       description={this.state.description}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Document1;
