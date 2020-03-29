import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';

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
    if (this.props.channels.length) {
      this.props.fetchMessages(this.props.selectedChannel);
    }
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    // check if the channel has changed, then refetch messages
    // check if channels are already loaded
    if (this.props.channels.length) {
      if (prevProps.selectedChannel !== this.props.selectedChannel) {
        this.props.fetchMessages(this.props.selectedChannel);
      }
    }
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.messageEndRef.current) {
      this.messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render () {
    const { messages } = this.props;

    if (!messages.length) return <p>Be the first one to write a message here!</p>;

    return (
      <Ul>
        {messages.map(message => (
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

function mapStateToProps(state, props) {
  return { 
    messages: state.messages,
    channels: state.channels,
    selectedChannel: state.channels.find(channel => channel.name === props.channelFromParams)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
