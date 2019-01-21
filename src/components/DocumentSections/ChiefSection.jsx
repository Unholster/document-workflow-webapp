import React from 'react';
import { Col, Label, Input, Jumbotron, FormGroup } from 'reactstrap';

export default (props) => {
  const jumboStyles = { paddingTop: '20px', paddingBottom : '20px' };
  return (
    <div>
      <Jumbotron style={jumboStyles}>
        <h3 class="text-left">
        Encargado de Trabajo
        </h3>
        <br/>
        <FormGroup row>
          <Label for="first_name" sm={2}>Nombre</Label>
          <Col sm={10}>
            <Input type="text" name="first_name" id="first_name" placeholder="Nombre" defaultValue={props.first_name} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="last_name" sm={2}>Apellido</Label>
          <Col sm={10}>
            <Input type="text" name="last_name" id="last_name" placeholder="Apellido" defaultValue={props.last_name} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="fee" sm={2}>Precio</Label>
          <Col sm={10}>
            <Input type="number" name="fee" id="fee" placeholder="100.000" defaultValue={props.fee}/>
          </Col>
        </FormGroup>
      </Jumbotron>
    </div>
  );
};
