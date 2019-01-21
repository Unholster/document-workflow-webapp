import React from 'react';
import { Col, Label, Input, Jumbotron, FormGroup } from 'reactstrap';

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc_text: props.description,
     };

     this.onChangeFunction = this.onChangeFunction.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.description !== this.props.description) {
      this.setState({ desc_text: nextProps.description })
    }
  }

  onChangeFunction(component, value){
    this.setState({desc_text:value});
  }

  render() {
    const jumboStyles = { paddingTop: '20px', paddingBottom : '20px' };
    return (
      <div>
        <Jumbotron style={jumboStyles}>
          <h3 className="text-left">
          Detalle de Trabajo
          </h3>
          <br/>
          <FormGroup row>
            <Label for="start_date" sm={2}>Fecha de Inicio</Label>
            <Col sm={10}>
              <Input type="date" name="start_date" id="start_date" defaultValue={this.props.start_date} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="end_date" sm={2}>Fecha de Termino</Label>
            <Col sm={10}>
              <Input type="date" name="end_date" id="end_date" defaultValue={this.props.end_date} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="description" sm={2}>Descripción del Trabajo</Label>
            <Col sm={10}>
              <Input type="textarea" name="description"
                                      id="description"
                                      placeholder="Descripción aproximada del detalle del trabajo."
                                      value={this.state.desc_text}
                                      onChange={this.onChangeFunction}/>
            </Col>
          </FormGroup>
        </Jumbotron>
      </div>
    );
  }
}

export default WorkSection;
