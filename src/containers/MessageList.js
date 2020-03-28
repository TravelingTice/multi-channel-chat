import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMessages } from '../actions';

const Ul = styled.ul`

`;

const Message = styled.li`
  padding: 20px;
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
            {message.content}
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
