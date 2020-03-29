import React from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions';

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
    message: ''
  }

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { message } = this.state;
    const { sendMessage, currentUser, currentChannel } = this.props;
    if (message) {
      sendMessage(message, currentUser, currentChannel);
      this.setState({ message: '' });
    }
  }
  render () {
    const { message } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <StyledInput 
            type="text"
            value={message}
            onChange={this.handleChange('message')}
            placeholder="Send message..." />
        </FormGroup>
      </Form>
    )
  }
}

function mapStateToProps(state, props) {
  return { 
    currentUser: state.currentUser,
    currentChannel: state.channels.find(channel => channel.name === props.channelFromParams)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);
