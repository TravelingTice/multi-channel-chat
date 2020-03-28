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
  // create ref for messages end
  constructor(props) {
    super(props);
    this.messageEndRef = React.createRef();
  } 

  componentDidMount() {
    this.props.setMessages();
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.messageEndRef.current) {
      this.messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render () {
    const { messages, selectedChannel } = this.props;
    if (!selectedChannel) return <p>Please select a channel</p>;

    // filter messages per channel
    const channelMessages = messages.filter(message => message.channel === selectedChannel.id );

    if (!channelMessages.length) return <p>Be the first one to write a message here!</p>;

    return (
      <Ul>
        {channelMessages.map(message => (
          <Message key={message.id}>
            <p>{message.content}</p>
            <span>- {message.author}</span>
          </Message>
        ))}
        <li style={{height: 0}} ref={this.messageEndRef}></li>
      </Ul>
    );
  }
}

function mapStateToProps(state) {
  return { 
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
