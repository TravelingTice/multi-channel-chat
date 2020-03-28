import React from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const StyledInput = styled(Input)`
  background-color: #3D3B3C;
  color: #ededed;
  border: 1px solid #999;
  &:focus {
    background-color: #3D3B3C;
    color: #ededed;
  }
`;

class SendMessage extends React.Component {
  state = {
    message: 'Hello'
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }
  render () {
    const { message } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <StyledInput type="text" value={message} />
        </FormGroup>
      </Form>
    )
  }
}

export default SendMessage;
