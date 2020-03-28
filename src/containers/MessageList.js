import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMessages } from '../actions';

const Ul = styled.ul`
  overflow-y: scroll;
`;

const Message = styled.li`
  margin-bottom: 30px;
  p {
    background-color: rgba(255,255,255,.1);
    padding: 20px;
    border-radius: 5px;
  }
`;

class MessageList extends React.Component {
  componentDidMount() {
    this.props.setMessages();
  }

  render () {
    const { messages } = this.props;
    return (
      <Ul>
        {messages.map(message => (
          <Message key={message.id}>
            <p>{message.content}</p>
            <span>- {message.author}</span>
          </Message>
        ))}
      </Ul>
    );
  }
}

function mapStateToProps(state) {
  return { messages: state.messages }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
